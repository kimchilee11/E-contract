const { COMPANY_COLLECTION } = require('../../common/constants/collection.constant');
const { RepositoryBase } = require('../../infrastructure/repository/repositoryBase');

class CompanyRepositoryImp extends RepositoryBase {
    constructor() {
        super(COMPANY_COLLECTION);
    }

    async findByEmail(email) {
        const response = await this.model
            .where('companyEmail', '==', email)
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

module.exports.CompanyRepository = new CompanyRepositoryImp();
