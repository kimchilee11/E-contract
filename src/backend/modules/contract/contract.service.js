const { create } = require('ipfs-http-client');
const fs = require('fs');
const { ContractRepository } = require('./contract.repository');
const ContractModel = require('./contract.model');
const { JwtService } = require('../auth/service/jwt.service');
const { NotFoundException } = require('../../common/httpException');

const ipfs = create({
    host: '127.0.0.1',
    port: 5001,
    protocol: 'http'
});

class ContractServiceImp {
    constructor() {
        this.repository = ContractRepository;
        this.jwtRepository = JwtService;
    }

    async createOne(body, { accessToken }) {
        // const idCompany = '04SyvgIh8qFvkvaO1Nsj';
        const idCompany = this.jwtRepository.decode(accessToken);
        return this.repository.createOne(new ContractModel(idCompany, body).toJSon());
    }

    async updateOne({ id }, payload) {
        const foundUser = await this.repository.updateById(id, payload);
        const contractUpdated = await this.repository.findById(id);
        await this.checkSignature(contractUpdated, id);
        if (!foundUser) {
            throw new NotFoundException('Contract not found');
        }
        return contractUpdated;
    }

    async checkSignature(contractInfor, id) {
        const { companySignature, employeeSignature } = contractInfor;
        if (companySignature !== '' || employeeSignature !== '') {
            await this.repository.updateById(id, { contractStatus: 'ACCEPTED' });
        }
        if (companySignature !== '' && employeeSignature !== '') {
            const hashed = await this.upload(contractInfor);
            console.log(hashed);
        }
    }

    async uploadFile(fileName, filePath) {
        const file = fs.readFileSync(filePath);
        const fileAdded = await ipfs.add({ path: fileName, content: file });
        const fileHash = fileAdded.cid;
        return fileHash;
    }

    async upload(content) {
        try {
            const cont = JSON.stringify(content);
            const { cid } = await ipfs.add(cont);
            console.log('IPFS cid:', cid);
            return cid.toString();
        } catch (err) {
            console.log(err);
        }
    }

    async decode(hashed) {
        const asyncitr = ipfs.cat(hashed);
        let data = '';
        // eslint-disable-next-line no-restricted-syntax
        for await (const itr of asyncitr) {
            data += Buffer.from(itr).toString();
        }
        return data;
    }
}

module.exports.ContractService = new ContractServiceImp();
