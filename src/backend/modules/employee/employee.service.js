const { EmployeeRepository } = require('./employee.repository');
const { NotFoundException, UnAuthorizedException } = require('../../common/httpException');
const { OAuthService } = require('../auth/service/oauth.service');
const { CreateEmployeeDto } = require('../user/dto/createUser.dto');
const { JwtService } = require('../auth/service/jwt.service');
const { JwtSign } = require('../auth/dto/jwtSign.dto');
const EmployeeModel = require('./employee.model');

class EmployeeServiceImp {
    constructor() {
        this.repository = EmployeeRepository;
        this.oauthService = OAuthService;
        this.jwtService = JwtService;
    }

    async employeeSignin(token) {
        let userInfo;
        try {
            userInfo = await this.oauthService.verify(token);
        } catch (error) {
            throw new UnAuthorizedException('Invalid token');
        }
        const isUserExist = await this.repository.findByEmail(userInfo.email);
        if (!isUserExist) await this.repository.createOne(CreateEmployeeDto(userInfo));
        const idCreated = await this.repository.findByEmail(userInfo.email);
        const accessToken = this.jwtService.sign(JwtSign(idCreated.id));
        return {
            accessToken,
            id: idCreated.id,
        };
    }

    async updateOne(body, { id }) {
        await this.repository.updateById(id, new EmployeeModel(body).toJSon());
        return this.repository.findById(id);
    }

    async getOne({ id }) {
        const foundUser = await this.repository.findById(id);
        if (!foundUser) {
            throw new NotFoundException('Employee not found');
        }

        return foundUser;
    }
}

module.exports.EmployeeService = new EmployeeServiceImp();
