"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = require("bcrypt");
const helper_interface_1 = require("../../../helper/helper.interface");
const repositories_1 = require("../../../modules/user/repositories");
const crypto = require("crypto");
const ONE_HOUR = 3600000;
const token = crypto.randomBytes(20).toString('hex');
const auth_1 = require("../../../config/auth");
let AuthService = class AuthService {
    constructor(userRepo, helper, jwtService) {
        this.userRepo = userRepo;
        this.helper = helper;
        this.jwtService = jwtService;
    }
    async signUp(data) {
        const doesUserExist = await this.userRepo.findUser({ email: data.email });
        if (doesUserExist)
            return this.helper.serviceResponse.errorResponse("USER_ALREADY_EXITS", null, common_1.HttpStatus.BAD_REQUEST);
        const user = Object.assign({}, data);
        user.provider = 'local';
        user.displayName = data.firstName + ' ' + data.lastName;
        user.email = data.email.toLowerCase();
        user.username = data.email;
        user.password = await bcrypt.hash(data.password, auth_1.authConfig.salt);
        const registeredUser = await this.userRepo.createUser(user);
        if (!registeredUser)
            return this.helper.serviceResponse.errorResponse("CAN_NOT_CREATE_USER", null, common_1.HttpStatus.BAD_REQUEST);
        return this.helper.serviceResponse.successResponse({ message: "USER_CREATED_SUCCESSFUL" }, common_1.HttpStatus.CREATED);
    }
    async signIn(data) {
        const user = await this.userRepo.getUserPassword({
            username: data.username,
        });
        if (!user)
            return this.helper.serviceResponse.errorResponse("INVALID_CREDENTIALS", null, common_1.HttpStatus.BAD_REQUEST);
        const doesPasswordMatch = await bcrypt.compare(data.password, user.password);
        if (!doesPasswordMatch)
            return this.helper.serviceResponse.errorResponse("INVALID_CREDENTIALS", null, common_1.HttpStatus.BAD_REQUEST);
        const payload = {
            id: user.id,
            username: user.username,
            logInTime: Date.now(),
            role: 'admin',
        };
        const token = this.jwtService.sign(payload);
        return this.helper.serviceResponse.successResponse({ token }, common_1.HttpStatus.OK);
    }
    async forgotPassword(username, baseUrl) {
        const user = await this.userRepo.findUser({ username });
        if (!user)
            return this.helper.serviceResponse.errorResponse("CAN_NOT_GET_USER", null, common_1.HttpStatus.BAD_REQUEST);
        if (user.provider !== 'local')
            return this.helper.serviceResponse.errorResponse("SIGNED_UP_USING_YOUR_LOCAL_ACCOUNT", null, common_1.HttpStatus.BAD_REQUEST);
        user.resetPasswordToken = token;
        user.resetPasswordExpires = Date.now() + ONE_HOUR;
        const updatedUser = await this.userRepo.updateUser(user.id, user);
        if (!updatedUser)
            return this.helper.serviceResponse.errorResponse("CAN_NOT_UPDATE_USER_PASSWORD", null, common_1.HttpStatus.BAD_REQUEST);
        const resetUrl = baseUrl + process.env.AUTH_RESET_ORIGINAL_URL || '/auth/reset/' + token;
        await this.helper.mailService.sendMail(user.email, 'Password Reset Link', resetUrl);
        return this.helper.serviceResponse.successResponse({
            message: 'An email has been sent to ' +
                user.email +
                ' with further instructions.',
        }, common_1.HttpStatus.OK);
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [repositories_1.UserRepository,
        helper_interface_1.Helper,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=index.js.map