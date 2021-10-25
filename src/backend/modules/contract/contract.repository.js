const { CONTRACTS_COLLECTION } = require('../../common/constants/collection.constant');
const { RepositoryBase } = require('../../infrastructure/repository/repositoryBase');

class ContractRepositoryImp extends RepositoryBase {
    constructor() {
        super(CONTRACTS_COLLECTION);
    }

    async findByEmail(email) {
        const response = await this.model
            .where('email', '==', email)
            .limit(1)
            .get();

        // let foundUser;
        // response.forEach(doc => {
        //     foundUser = {
        //         id: doc.id,
        //         ...doc.data(),
        //     };
        // });
        return response;
    }
}

module.exports.ContractRepository = new ContractRepositoryImp();
