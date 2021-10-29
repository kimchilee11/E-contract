const { UserService } = require('../../user/user.service');
const { OAuthService } = require('./oauth.service');
const { JwtService } = require('./jwt.service');
const { CreateUserDto } = require('../../user/dto/createUser.dto');
const { JwtSign } = require('../dto/jwtSign.dto');
const { UserRepository } = require('../../user/user.repository');
const { UnAuthorizedException } = require('../../../common/httpException');

class AuthServiceImp {
    constructor() {
        this.oauthService = OAuthService;
        this.userService = UserService;
        this.jwtService = JwtService;
        this.userRepository = UserRepository;
    }

    async signIn(token) {
        let userInfo;
        try {
            userInfo = await this.oauthService.verify(token);
            // console.log(userInfo);
        } catch (error) {
            throw new UnAuthorizedException('Invalid token');
        }
        const isUserExist = await this.userRepository.findByEmail(userInfo.email);
        if (!isUserExist) await this.userService.createOne(CreateUserDto(userInfo));
        const idCreated = await this.userRepository.findByEmail(userInfo.email);
        const accessToken = this.jwtService.sign(JwtSign(idCreated));
        return {
            // email: userInfo.email,
            accessToken,
            id: idCreated.id,
            // role: idCreated.role,
        };
    }
}

module.exports.AuthService = new AuthServiceImp();
