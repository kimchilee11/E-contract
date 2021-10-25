const { ContractRepository } = require('./contract.repository');
const Contract = require('./contract.model');
const { NotFoundException } = require('../../common/httpException');

class EmployeeServiceImp {
    constructor() {
        this.repository = ContractRepository;
    }

    async createOne(contract, id = '') {
        const contDto = new Contract(contract);
        return this.repository.createEmployee(id, contDto.toJSon());
    }

    async getOne({ id }) {
        const foundUser = await this.repository.findById(id);
        if (!foundUser) {
            throw new NotFoundException('Employee not found');
        }

        return foundUser;
    }

    async updateOne({ id }, payload) {
        const foundUser = await this.repository.updateById(id, payload);
        if (!foundUser) {
            throw new NotFoundException('User not found');
        }

        return foundUser;
    }
}

module.exports.EmployeeService = new EmployeeServiceImp();
