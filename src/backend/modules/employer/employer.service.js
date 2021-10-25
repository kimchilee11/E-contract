const { EmployerRepository } = require('./employer.repository');
const Employer = require('./employer.model');
const { NotFoundException } = require('../../common/httpException');

class EmployerServiceImp {
    constructor() {
        this.repository = EmployerRepository;
    }

    async createOne(employer, id = 'IZGjZoOptVfJUpDuJBcd') {
        const newUser = new Employer(employer);
        return this.repository.createEmployer(id, newUser.toJSon());
    }

    async getOne({ id }) {
        const foundUser = await this.repository.findById(id);
        if (!foundUser) {
            throw new NotFoundException('Employer not found');
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

module.exports.EmployerService = new EmployerServiceImp();
