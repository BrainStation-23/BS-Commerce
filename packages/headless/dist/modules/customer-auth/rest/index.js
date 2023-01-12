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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerAuthController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const services_1 = require("../services");
const dto_1 = require("./dto");
const auth_1 = require("../../../config/auth");
const core_1 = require("../../../config/core");
const passport_1 = require("@nestjs/passport");
let CustomerAuthController = class CustomerAuthController {
    constructor(authService) {
        this.authService = authService;
    }
    async sendOtp(data, res) {
        const _a = await this.authService.registerSendOTP(data), { code } = _a, response = __rest(_a, ["code"]);
        res.status(code);
        return Object.assign({ code }, response);
    }
    async register(customer, res) {
        const _a = await this.authService.register(customer), { code } = _a, response = __rest(_a, ["code"]);
        res.status(code);
        return Object.assign({ code }, response);
    }
    handleLogin() {
        return { msg: 'Google Authentication' };
    }
    async googleAuthRedirect(req, res) {
        var _a, _b;
        const _c = await this.authService.socialLogin(req.user), { code } = _c, response = __rest(_c, ["code"]);
        res.status(code);
        ((_a = response.data) === null || _a === void 0 ? void 0 : _a.token) &&
            res.cookie('jwt', `Bearer ${(_b = response.data) === null || _b === void 0 ? void 0 : _b.token}`, {
                httpOnly: true,
                maxAge: auth_1.authConfig.cookiesMaxAge,
                secure: core_1.coreConfig.env === 'production',
                sameSite: 'none',
                path: '/',
            });
        return Object.assign({ code }, response);
    }
    async facebookLogin() {
        return common_1.HttpStatus.OK;
    }
    async facebookLoginRedirect(req, res) {
        var _a, _b;
        const _c = await this.authService.socialLogin(req.user), { code } = _c, response = __rest(_c, ["code"]);
        res.status(code);
        ((_a = response.data) === null || _a === void 0 ? void 0 : _a.token) &&
            res.cookie('jwt', `Bearer ${(_b = response.data) === null || _b === void 0 ? void 0 : _b.token}`, {
                httpOnly: true,
                maxAge: auth_1.authConfig.cookiesMaxAge,
                secure: core_1.coreConfig.env === 'production',
                sameSite: 'none',
                path: '/',
            });
        return Object.assign({ code }, response);
    }
    async signIn(data, res) {
        var _a, _b;
        const _c = await this.authService.signIn(data), { code } = _c, response = __rest(_c, ["code"]);
        res.status(code);
        ((_a = response.data) === null || _a === void 0 ? void 0 : _a.token) &&
            res.cookie('jwt', `Bearer ${(_b = response.data) === null || _b === void 0 ? void 0 : _b.token}`, {
                httpOnly: true,
                maxAge: auth_1.authConfig.cookiesMaxAge,
                secure: core_1.coreConfig.env === 'production',
                sameSite: 'none',
                path: '/',
            });
        return Object.assign({ code }, response);
    }
    async logout(res) {
        res.status(200).clearCookie('jwt', {
            path: '/',
        });
        return {
            code: 200,
            data: { message: 'Logout Successful' },
        };
    }
    async getCustomer(query, res) {
        const _a = await this.authService.getCustomer(query), { code } = _a, response = __rest(_a, ["code"]);
        res.status(code);
        return Object.assign({ code }, response);
    }
    async forgotPasswordSendOTP(data, res) {
        const _a = await this.authService.forgotPasswordSendOTP(data), { code } = _a, response = __rest(_a, ["code"]);
        res.status(code);
        return Object.assign({ code }, response);
    }
    async forgotPasswordVerifyOtp(data, res) {
        const _a = await this.authService.forgotPasswordVerifyOTP(data), { code } = _a, response = __rest(_a, ["code"]);
        res.status(code);
        return Object.assign({ code }, response);
    }
    async forgotPassword(data, res) {
        const _a = await this.authService.forgotPassword(data), { code } = _a, response = __rest(_a, ["code"]);
        res.status(code);
        return Object.assign({ code }, response);
    }
};
__decorate([
    (0, common_1.Post)('register/send-otp'),
    (0, swagger_1.ApiResponse)({
        description: 'Send Otp For Create Customer Success Response',
        type: dto_1.SendOtpSuccessResponseDto,
        status: common_1.HttpStatus.OK,
    }),
    (0, swagger_1.ApiResponse)({
        description: 'Send Otp For Create Customer Error Response',
        type: dto_1.SendOtpErrorResponseDto,
        status: common_1.HttpStatus.BAD_REQUEST,
    }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.SendOtpDto, Object]),
    __metadata("design:returntype", Promise)
], CustomerAuthController.prototype, "sendOtp", null);
__decorate([
    (0, common_1.Post)('register'),
    (0, swagger_1.ApiResponse)({
        description: 'Customer Register Success Response',
        type: dto_1.CreateCustomerSuccessResponseDto,
        status: common_1.HttpStatus.CREATED,
    }),
    (0, swagger_1.ApiResponse)({
        description: 'Customer Register Error Response',
        type: dto_1.CreateCustomerErrorResponseDto,
        status: common_1.HttpStatus.BAD_REQUEST,
    }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.CreateCustomerDto, Object]),
    __metadata("design:returntype", Promise)
], CustomerAuthController.prototype, "register", null);
__decorate([
    (0, common_1.Get)('google/login'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('google')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CustomerAuthController.prototype, "handleLogin", null);
__decorate([
    (0, common_1.Get)('google/redirect'),
    (0, swagger_1.ApiResponse)({
        description: 'Customer Log In With Google Success Response',
        type: dto_1.CustomerSignInSuccessResponseDto,
        status: common_1.HttpStatus.OK,
    }),
    (0, swagger_1.ApiResponse)({
        description: 'Customer  Log In With Google Error Response',
        type: dto_1.CustomerSignInErrorResponseDto,
        status: common_1.HttpStatus.BAD_REQUEST,
    }),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('google')),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], CustomerAuthController.prototype, "googleAuthRedirect", null);
__decorate([
    (0, common_1.Get)('/facebook/login'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('facebook')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CustomerAuthController.prototype, "facebookLogin", null);
__decorate([
    (0, common_1.Get)('/facebook/redirect'),
    (0, swagger_1.ApiResponse)({
        description: 'Customer Log In With Facebook Success Response',
        type: dto_1.CustomerSignInSuccessResponseDto,
        status: common_1.HttpStatus.OK,
    }),
    (0, swagger_1.ApiResponse)({
        description: 'Customer  Log In With Facebook Error Response',
        type: dto_1.CustomerSignInErrorResponseDto,
        status: common_1.HttpStatus.BAD_REQUEST,
    }),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('facebook')),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], CustomerAuthController.prototype, "facebookLoginRedirect", null);
__decorate([
    (0, common_1.Post)('sign-in'),
    (0, swagger_1.ApiResponse)({
        description: 'Customer Sign In Success Response',
        type: dto_1.CustomerSignInSuccessResponseDto,
        status: common_1.HttpStatus.OK,
    }),
    (0, swagger_1.ApiResponse)({
        description: 'Customer Sign In Error Response',
        type: dto_1.CustomerSignInErrorResponseDto,
        status: common_1.HttpStatus.BAD_REQUEST,
    }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.CustomerSignInDto, Object]),
    __metadata("design:returntype", Promise)
], CustomerAuthController.prototype, "signIn", null);
__decorate([
    (0, common_1.Delete)('logout'),
    (0, swagger_1.ApiResponse)({
        description: 'Customer Logout Success Response',
        type: dto_1.CustomerLogoutSuccessResponseDto,
        status: common_1.HttpStatus.OK,
    }),
    __param(0, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CustomerAuthController.prototype, "logout", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiResponse)({
        description: 'Get Customer Success Response',
        type: dto_1.GetCustomerSuccessResponseDto,
        status: common_1.HttpStatus.OK,
    }),
    (0, swagger_1.ApiResponse)({
        description: 'Get Customer Error Response',
        type: dto_1.GetCustomerErrorResponseDto,
        status: common_1.HttpStatus.BAD_REQUEST,
    }),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.GetCustomerQueryDto, Object]),
    __metadata("design:returntype", Promise)
], CustomerAuthController.prototype, "getCustomer", null);
__decorate([
    (0, common_1.Post)('forgot-password/send-otp'),
    (0, swagger_1.ApiResponse)({
        description: 'Send Otp For Forgot Password Success Response',
        type: dto_1.SendOtpSuccessResponseDto,
        status: common_1.HttpStatus.OK,
    }),
    (0, swagger_1.ApiResponse)({
        description: 'Send Otp For Forgot Password Error Response',
        type: dto_1.SendOtpErrorResponseDto,
        status: common_1.HttpStatus.BAD_REQUEST,
    }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.SendOtpDto, Object]),
    __metadata("design:returntype", Promise)
], CustomerAuthController.prototype, "forgotPasswordSendOTP", null);
__decorate([
    (0, common_1.Post)('forgot-password/verify-otp'),
    (0, swagger_1.ApiResponse)({
        description: 'Verify Otp For Forgot Password Success Response',
        type: dto_1.VerifyOtpSuccessResponseDto,
        status: common_1.HttpStatus.OK,
    }),
    (0, swagger_1.ApiResponse)({
        description: 'Verify Otp For Forgot Password Error Response',
        type: dto_1.VerifyOtpErrorResponseDto,
        status: common_1.HttpStatus.BAD_REQUEST,
    }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.VerifyOtpDto, Object]),
    __metadata("design:returntype", Promise)
], CustomerAuthController.prototype, "forgotPasswordVerifyOtp", null);
__decorate([
    (0, common_1.Post)('forgot-password'),
    (0, swagger_1.ApiResponse)({
        description: 'Forgot Password Success Response',
        type: dto_1.CustomerForgotPasswordSuccessResponseDto,
        status: common_1.HttpStatus.OK,
    }),
    (0, swagger_1.ApiResponse)({
        description: 'Forgot Password Error Response',
        type: dto_1.CustomerForgotPasswordErrorResponseDto,
        status: common_1.HttpStatus.BAD_REQUEST,
    }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.CustomerForgotPasswordDto, Object]),
    __metadata("design:returntype", Promise)
], CustomerAuthController.prototype, "forgotPassword", null);
CustomerAuthController = __decorate([
    (0, common_1.Controller)('customer/auth'),
    (0, swagger_1.ApiTags)('Customer Authentication API'),
    __metadata("design:paramtypes", [services_1.CustomerAuthService])
], CustomerAuthController);
exports.CustomerAuthController = CustomerAuthController;
//# sourceMappingURL=index.js.map