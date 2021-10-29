const { HttpException } = require('../../common/httpException/HttpException');
const { InValidHttpResponse } = require('../../common/response/invalidHttp.response');
const { ValidHttpResponse } = require('../../common/response/validHttp.response');
const { CompanyService } = require('../../modules/company/company.service');
// const { AuthService } = require('../../modules/auth/service/auth.service');
const { EmployeeService } = require('../../modules/employee/employee.service');

class Controller {
    constructor() {
        this.employeeService = EmployeeService;
        this.companyService = CompanyService;
    }

    employeeSignIn = async (req, res) => {
        try {
            const data = await this.employeeService.employeeSignin(req.body.tokenId);
            return ValidHttpResponse.toCreatedResponse(data).toResponse(res);
        } catch (error) {
            if (error instanceof HttpException) {
                return new InValidHttpResponse(error.status, error.code, error.message)
                    .toResponse(res);
            }
            return InValidHttpResponse.toInternalResponse(error.message).toResponse(res);
        }
    }

    companySignIn = async (req, res) => {
        try {
            const data = await this.companyService.companySignin(req.body.tokenId);
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

module.exports.AuthController = new Controller();
