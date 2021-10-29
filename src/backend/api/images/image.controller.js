const { HttpException } = require('../../common/httpException/HttpException');
const { InValidHttpResponse } = require('../../common/response/invalidHttp.response');
const { ValidHttpResponse } = require('../../common/response/validHttp.response');
const { ImageService } = require('../../modules/images/image.service');

class Controller {
    constructor() {
        this.service = ImageService;
    }

    createOneSignatureA = async (req, res) => {
        try {
            const data = await this.service.createOnesignatureA(req.file.path, req.body.idContract);
            return ValidHttpResponse.toCreatedResponse(data).toResponse(res);
        } catch (error) {
            if (error instanceof HttpException) {
                return new InValidHttpResponse(error.status, error.code, error.message)
                    .toResponse(res);
            }
            return InValidHttpResponse.toInternalResponse(error.message).toResponse(res);
        }
    }

    createOneSignatureB = async (req, res) => {
        try {
            const data = await this.service.createOnesignatureB(req.file.path, req.body.idContract);
            return ValidHttpResponse.toCreatedResponse(data).toResponse(res);
        } catch (error) {
            if (error instanceof HttpException) {
                return new InValidHttpResponse(error.status, error.code, error.message)
                    .toResponse(res);
            }
            return InValidHttpResponse.toInternalResponse(error.message).toResponse(res);
        }
    }
}

module.exports.imageController = new Controller();
