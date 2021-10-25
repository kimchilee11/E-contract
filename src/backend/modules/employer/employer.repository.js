const { EMPLOYERS_COLLECTION } = require('../../common/constants/collection.constant');
const { RepositoryBase } = require('../../infrastructure/repository/repositoryBase');

class EmployerRepositoryImp extends RepositoryBase {
    constructor() {
        super(EMPLOYERS_COLLECTION);
    }
}

module.exports.EmployerRepository = new EmployerRepositoryImp();
