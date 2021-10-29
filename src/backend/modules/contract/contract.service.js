const { create } = require('ipfs-http-client');
const fs = require('fs');
const { ContractRepository } = require('./contract.repository');
const ContractModel = require('./contract.model');
const { NotFoundException } = require('../../common/httpException');

const ipfs = create({
    host: '127.0.0.1',
    port: 5001,
    protocol: 'http'
});

class ContractServiceImp {
    constructor() {
        this.repository = ContractRepository;
    }

    async createOne(body) {
        return this.repository.createOne(new ContractModel(body).toJSon());
    }

    async updateOne({ id }, payload) {
        const foundUser = await this.repository.updateById(id, payload);
        if (!foundUser) {
            throw new NotFoundException('Contract not found');
        }
        return foundUser;
    }

    async uploadFile(fileName, filePath) {
        const file = fs.readFileSync(filePath);
        const fileAdded = await ipfs.add({ path: fileName, content: file });
        const fileHash = fileAdded.cid;
        return fileHash;
    }

    async upload(idContract) {
        try {
            const content = await this.repository.findById(idContract);
            console.log(content);
            const fileName = 'dungbugnua.txt';
            fs.writeFile(fileName, content, async err => {
                if (err) throw err;
                const filePath = `./${fileName}`;
                const file = fs.readFileSync(filePath);
                const fileAdded = await ipfs.add({ path: fileName, content: file });
                // console.log(fileAdded);
                const fileHash = fileAdded.cid;
                // console.log(fileHash);
                fs.unlink(filePath);

                // const res = {
                //     status: true,
                //     message: 'File is uploaded',
                //     data: {
                //         name: fileName,
                //         fileAddress: 
                //     }
                // };
                return fileHash.toString();
            });
        } catch (err) {
            // console.log(err);
            // res.status(500).send(err);
        }
    }

    async decode() {
        const asyncitr = ipfs.cat('QmUgh3c927zLx9khXxAzWztpjGccEHog7UirPtzwFkTxn5');
        let data = '';
        // eslint-disable-next-line no-restricted-syntax
        for await (const itr of asyncitr) {
            data += Buffer.from(itr).toString();
            // console.log(data);
        }
        return data;
    }
}

module.exports.ContractService = new ContractServiceImp();
