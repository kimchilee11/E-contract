const { EMPLOYEES_COLLECTION } = require('../../common/constants/collection.constant');
const { RepositoryBase } = require('../../infrastructure/repository/repositoryBase');

class EmployeeRepositoryImp extends RepositoryBase {
    constructor() {
        super(EMPLOYEES_COLLECTION);
    }

    async findByEmail(email) {
        const response = await this.model
            .where('employeeEmail', '==', email)
            .limit(1)
            .get();

        let foundUser;
        response.forEach(doc => {
            foundUser = {
                id: doc.id,
                ...doc.data(),
            };
        });
        return foundUser;
    }
}

module.exports.EmployeeRepository = new EmployeeRepositoryImp();
