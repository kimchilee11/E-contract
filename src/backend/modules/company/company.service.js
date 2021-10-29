const { UnAuthorizedException } = require('../../common/httpException');
const { JwtSign } = require('../auth/dto/jwtSign.dto');
const { JwtService } = require('../auth/service/jwt.service');
const { OAuthService } = require('../auth/service/oauth.service');
const { CreateCompanyDto } = require('../user/dto/createUser.dto');
const CompanyModel = require('./company.model');
const { CompanyRepository } = require('./company.repository');

class CompanyServiceImp {
    constructor() {
        this.repository = CompanyRepository;
        this.oauthService = OAuthService;
        this.jwtService = JwtService;
    }

    async companySignin(token) {
        let userInfo;
        try {
            userInfo = await this.oauthService.verify(token);
        } catch (error) {
            throw new UnAuthorizedException('Invalid token');
        }
        const isUserExist = await this.repository.findByEmail(userInfo.email);
        if (!isUserExist) await this.repository.createOne(CreateCompanyDto(userInfo));
        const idCreated = await this.repository.findByEmail(userInfo.email);
        const accessToken = this.jwtService.sign(JwtSign(idCreated.id));
        return {
            accessToken,
            id: idCreated.id,
        };
    }

    async updateOne(body, { id }) {
        await this.repository.updateById(id, new CompanyModel(body).toJSon());
        return this.repository.findById(id);
    }
}

module.exports.CompanyService = new CompanyServiceImp();
