/* eslint-disable camelcase */
const fs = require('fs');
const { ContractRepository } = require('../contract/contract.repository');
const cloudinary = require('./cloudinary');

class ImageServiceImp {
    constructor() {
        this.contractRepository = ContractRepository;
    }

    createOnesignatureA = async (path, idContract) => {
        try {
            const { original_filename, url, format } = await cloudinary.uploader.upload(path);
            fs.unlink(`./upload/${original_filename}.${format}`, err => console.log(err));
            await this.contractRepository.updateById(idContract, { signatureA: url });
            return url;
        } catch (error) {
            console.log(error);
        }
    }

    createOnesignatureB = async (path, idContract) => {
        try {
            const { url } = await cloudinary.uploader.upload(path);
            await this.contractRepository.updateById(idContract, { signatureB: url });
            return url;
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports.ImageService = new ImageServiceImp();
