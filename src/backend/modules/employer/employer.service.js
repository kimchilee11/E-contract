const { EmployerRepository } = require('./employer.repository');
// const Employer = require('./employer.model');
const { NotFoundException } = require('../../common/httpException');
const { UserRepository } = require('../user/user.repository');

class EmployerServiceImp {
    constructor() {
        this.repository = EmployerRepository;
        this.userRepository = UserRepository;
    }

    async createOne(employer) {
        const id = employer.id || 'IZGjZoOptVfJUpDuJBcd';
        // const newUser = new Employer(employer);
        await this.userRepository.updateById(id, { role: 2 });
        return this.repository.createEmployee(id, employer);
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
