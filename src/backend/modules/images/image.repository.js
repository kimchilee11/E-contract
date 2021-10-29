const { IMAGES_COLLECTION } = require('../../common/constants/collection.constant');
const { RepositoryBase } = require('../../infrastructure/repository/repositoryBase');

class ImageRepositoryImp extends RepositoryBase {
    constructor() {
        super(IMAGES_COLLECTION);
    }
}

module.exports.ImageRepository = new ImageRepositoryImp();
