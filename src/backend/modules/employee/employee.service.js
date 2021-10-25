const { EmployeeRepository } = require('./employee.repository');
const Employee = require('./employee.model');
const { NotFoundException } = require('../../common/httpException');

class EmployeeServiceImp {
    constructor() {
        this.repository = EmployeeRepository;
    }

    async createOne(employee, id = 'IZGjZoOptVfJUpDuJBcd') {
        const newUser = new Employee(employee);
        return this.repository.createEmployee(id, newUser.toJSon());
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
