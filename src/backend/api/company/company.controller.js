const { HttpException } = require('../../common/httpException/HttpException');
const { InValidHttpResponse } = require('../../common/response/invalidHttp.response');
const { ValidHttpResponse } = require('../../common/response/validHttp.response');
const { CompanyService } = require('../../modules/company/company.service');

class Controller {
    constructor() {
        this.service = CompanyService;
    }

    // companySignIn = async (req, res) => {
    //     try {
    //         const data = await this.service.companySignin(req.body.tokenId);
    //         return ValidHttpResponse.toCreatedResponse(data).toResponse(res);
    //     } catch (error) {
    //         if (error instanceof HttpException) {
    //             return new InValidHttpResponse(error.status, error.code, error.message)
    //                 .toResponse(res);
    //         }
    //         return InValidHttpResponse.toInternalResponse(error.message).toResponse(res);
    //     }
    // }

    updateOne = async (req, res) => {
        try {
            const data = await this.service.updateOne(req.body, req.params);
            return ValidHttpResponse.toCreatedResponse(data).toResponse(res);
        } catch (error) {
            if (error instanceof HttpException) {
                return new InValidHttpResponse(error.status, error.code, error.message)
                    .toResponse(res);
            }
            return InValidHttpResponse.toInternalResponse(error.message).toResponse(res);
        }
    }

    getOne = async (req, res) => {
        try {
            const data = await this.service.getOne(req.params);
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

module.exports.CompanyController = new Controller();
