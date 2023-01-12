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
exports.CustomerAuthService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt = require("bcrypt");
const helper_interface_1 = require("../../../helper/helper.interface");
const auth_1 = require("../../../config/auth");
const repositories_1 = require("../../../modules/customer/repositories");
const jwt_1 = require("@nestjs/jwt");
const social_login_1 = require("../../../config/social-login");
const FIVE_MINUTES = 5 * 60 * 1000;
let CustomerAuthService = class CustomerAuthService {
    constructor(customerRepo, helper, jwtService) {
        this.customerRepo = customerRepo;
        this.helper = helper;
        this.jwtService = jwtService;
    }
    async register(data) {
        const doesCustomerEmailExist = data.email &&
            (await this.customerRepo.findCustomer({ email: data.email }));
        if (doesCustomerEmailExist)
            return this.helper.serviceResponse.errorResponse("CUSTOMER_EMAIL_ALREADY_EXITS", null, common_1.HttpStatus.BAD_REQUEST);
        const doesCustomerPhoneExist = data.phone &&
            (await this.customerRepo.findCustomer({ phone: data.phone }));
        if (doesCustomerPhoneExist)
            return this.helper.serviceResponse.errorResponse("CUSTOMER_PHONE_ALREADY_EXITS", null, common_1.HttpStatus.BAD_REQUEST);
        const verifyOtp = (data.email || data.phone) &&
            (await this.customerRepo.findOtp(Object.assign(Object.assign({}, data), { otpExpireTime: { $gt: Date.now() } })));
        if (!verifyOtp)
            return this.helper.serviceResponse.errorResponse("OTP_EXPIRED", null, common_1.HttpStatus.BAD_REQUEST);
        const customer = Object.assign({}, data);
        customer.email = data.email && data.email.toLowerCase();
        customer.password = await bcrypt.hash(data.password, auth_1.authConfig.salt);
        const registeredCustomer = await this.customerRepo.createCustomer(customer);
        if (!registeredCustomer)
            return this.helper.serviceResponse.errorResponse("CAN_NOT_CREATE_CUSTOMER", null, common_1.HttpStatus.BAD_REQUEST);
        return this.helper.serviceResponse.successResponse({ message: "CUSTOMER_CREATED_SUCCESSFUL" }, common_1.HttpStatus.CREATED);
    }
    async registerSendOTP(data) {
        const doesCustomerEmailExist = data.email &&
            (await this.customerRepo.findCustomer({ email: data.email }));
        if (doesCustomerEmailExist)
            return this.helper.serviceResponse.errorResponse("CUSTOMER_EMAIL_ALREADY_EXITS", null, common_1.HttpStatus.BAD_REQUEST);
        const doesCustomerPhoneExist = data.phone &&
            (await this.customerRepo.findCustomer({ phone: data.phone }));
        if (doesCustomerPhoneExist)
            return this.helper.serviceResponse.errorResponse("CUSTOMER_PHONE_ALREADY_EXITS", null, common_1.HttpStatus.BAD_REQUEST);
        return await this.sendOtp(data);
    }
    async sendOtp(data) {
        let otpExists = null;
        otpExists =
            data.email && (await this.customerRepo.findOtp({ email: data.email }));
        otpExists =
            !otpExists && data.phone
                ? await this.customerRepo.findOtp({ phone: data.phone })
                : otpExists;
        const randomOtp = 100000 + Math.floor(Math.random() * 900000);
        if (otpExists && (data.email || data.phone)) {
            let otpUpdated = null;
            otpUpdated =
                data.phone &&
                    (await this.customerRepo.updateOtp({ phone: data.phone }, {
                        otp: randomOtp,
                        otpExpireTime: Date.now() + FIVE_MINUTES,
                        isVerified: false,
                    }));
            otpUpdated =
                !otpUpdated && data.email
                    ? await this.customerRepo.updateOtp({ email: data.email }, {
                        otp: randomOtp,
                        otpExpireTime: Date.now() + FIVE_MINUTES,
                        isVerified: false,
                    })
                    : otpUpdated;
            if (!otpUpdated)
                return this.helper.serviceResponse.errorResponse("CAN_NOT_UPDATE_OTP", null, common_1.HttpStatus.BAD_REQUEST);
            return this.helper.serviceResponse.successResponse({ message: `Your Bs-Commerce OTP is ${randomOtp}` }, common_1.HttpStatus.OK);
        }
        const otpSend = (data.email || data.phone) &&
            (await this.customerRepo.sendOtp(Object.assign(Object.assign({}, data), { otp: randomOtp, otpExpireTime: Date.now() + FIVE_MINUTES })));
        if (!otpSend)
            return this.helper.serviceResponse.errorResponse("CAN_NOT_SEND_OTP", null, common_1.HttpStatus.BAD_REQUEST);
        return this.helper.serviceResponse.successResponse({ message: `Your Bs-Commerce OTP is ${randomOtp}` }, common_1.HttpStatus.OK);
    }
    async verifyOtp(data) {
        const verifyOtp = (data.email || data.phone) &&
            (await this.customerRepo.verifyOtp(Object.assign(Object.assign({}, data), { otpExpireTime: { $gt: Date.now() } })));
        if (!verifyOtp)
            return this.helper.serviceResponse.errorResponse("OTP_EXPIRED_OR_INVALID_OTP", null, common_1.HttpStatus.BAD_REQUEST);
        return this.helper.serviceResponse.successResponse({ message: "OTP_VERIFIED_SUCCESSFUL" }, common_1.HttpStatus.OK);
    }
    async getCustomer(data) {
        const doesCustomerEmailExist = data.email &&
            (await this.customerRepo.findCustomer({ email: data.email }));
        const doesCustomerPhoneExist = data.phone &&
            (await this.customerRepo.findCustomer({ phone: data.phone }));
        if (!doesCustomerEmailExist && !doesCustomerPhoneExist)
            return this.helper.serviceResponse.errorResponse("CAN_NOT_GET_CUSTOMER", null, common_1.HttpStatus.BAD_REQUEST);
        return this.helper.serviceResponse.successResponse(doesCustomerEmailExist || doesCustomerPhoneExist, common_1.HttpStatus.OK);
    }
    async socialLogin(user) {
        if (!user)
            return this.helper.serviceResponse.errorResponse("INVALID_CREDENTIALS", null, common_1.HttpStatus.BAD_REQUEST);
        const customer = await this.customerRepo.findCustomer({
            email: user.email,
        });
        if (customer) {
            const payload = {
                id: customer.id,
                email: customer.email,
                logInTime: Date.now(),
                role: 'customer',
            };
            const token = this.jwtService.sign(payload);
            return this.helper.serviceResponse.successResponse({ token }, common_1.HttpStatus.OK);
        }
        const password = user.email + social_login_1.socialLoginConfig.socialPassword;
        const hashPassword = await bcrypt.hash(password, 10);
        user.password = hashPassword;
        const googleCustomer = await this.customerRepo.createCustomer(user);
        const payload = {
            id: googleCustomer.id,
            email: googleCustomer.email,
            logInTime: Date.now(),
            role: 'customer',
        };
        const token = this.jwtService.sign(payload);
        return this.helper.serviceResponse.successResponse({ token }, common_1.HttpStatus.OK);
    }
    async signIn(data) {
        const doesCustomerEmailExist = data.email &&
            (await this.customerRepo.getCustomerPassword({ email: data.email }));
        const doesCustomerPhoneExist = data.phone &&
            (await this.customerRepo.getCustomerPassword({ phone: data.phone }));
        if (!doesCustomerEmailExist && !doesCustomerPhoneExist)
            return this.helper.serviceResponse.errorResponse("INVALID_CREDENTIALS", null, common_1.HttpStatus.BAD_REQUEST);
        const customer = doesCustomerEmailExist || doesCustomerPhoneExist;
        const doesCustomerPasswordMatch = await bcrypt.compare(data.password, customer.password);
        if (!doesCustomerPasswordMatch)
            return this.helper.serviceResponse.errorResponse("INVALID_CREDENTIALS", null, common_1.HttpStatus.BAD_REQUEST);
        const payload = {
            id: customer.id,
            email: customer.email,
            phone: customer.phone,
            logInTime: Date.now(),
            role: 'customer',
        };
        const token = this.jwtService.sign(payload);
        return this.helper.serviceResponse.successResponse({ token }, common_1.HttpStatus.OK);
    }
    async forgotPassword(data) {
        const doesCustomerEmailExist = data.email &&
            (await this.customerRepo.getCustomerPassword({ email: data.email }));
        const doesCustomerPhoneExist = data.phone &&
            (await this.customerRepo.getCustomerPassword({ phone: data.phone }));
        if (!doesCustomerEmailExist && !doesCustomerPhoneExist)
            return this.helper.serviceResponse.errorResponse("CAN_NOT_GET_CUSTOMER", null, common_1.HttpStatus.BAD_REQUEST);
        let otpVerified = null;
        otpVerified =
            data.phone &&
                (await this.customerRepo.findOtp({
                    isVerified: true,
                    phone: data.phone,
                }));
        otpVerified =
            !otpVerified && data.email
                ? await this.customerRepo.findOtp({
                    isVerified: true,
                    email: data.email,
                })
                : otpVerified;
        if (!otpVerified || otpVerified.otpVerifiedAt + FIVE_MINUTES < Date.now())
            return this.helper.serviceResponse.errorResponse("TIME_LIMIT_EXCEED_OR_UNVERIFIED_CUSTOMER", null, common_1.HttpStatus.BAD_REQUEST);
        const customer = doesCustomerEmailExist || doesCustomerPhoneExist;
        customer.password = await bcrypt.hash(data.password, auth_1.authConfig.salt);
        const updatedPassword = await this.customerRepo.updateCustomer(customer.id, customer);
        if (!updatedPassword)
            return this.helper.serviceResponse.errorResponse("CAN_NOT_UPDATE_CUSTOMER_PASSWORD", null, common_1.HttpStatus.BAD_REQUEST);
        customer.email &&
            (await this.customerRepo.deleteOtp({ email: customer.email }));
        customer.phone &&
            (await this.customerRepo.deleteOtp({ phone: customer.phone }));
        return this.helper.serviceResponse.successResponse({
            message: "FORGOT_PASSWORD_SUCCESSFUL",
        }, common_1.HttpStatus.OK);
    }
    async forgotPasswordSendOTP(data) {
        const doesCustomerEmailExist = data.email &&
            (await this.customerRepo.findCustomer({ email: data.email }));
        const doesCustomerPhoneExist = data.phone &&
            (await this.customerRepo.findCustomer({ phone: data.phone }));
        if (!doesCustomerEmailExist && !doesCustomerPhoneExist)
            return this.helper.serviceResponse.errorResponse("CAN_NOT_GET_CUSTOMER", null, common_1.HttpStatus.BAD_REQUEST);
        return this.sendOtp(data);
    }
    async forgotPasswordVerifyOTP(data) {
        const doesCustomerEmailExist = data.email &&
            (await this.customerRepo.findCustomer({ email: data.email }));
        const doesCustomerPhoneExist = data.phone &&
            (await this.customerRepo.findCustomer({ phone: data.phone }));
        if (!doesCustomerEmailExist && !doesCustomerPhoneExist)
            return this.helper.serviceResponse.errorResponse("CAN_NOT_GET_CUSTOMER", null, common_1.HttpStatus.BAD_REQUEST);
        return this.verifyOtp(data);
    }
};
CustomerAuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [repositories_1.CustomerRepository,
        helper_interface_1.Helper,
        jwt_1.JwtService])
], CustomerAuthService);
exports.CustomerAuthService = CustomerAuthService;
//# sourceMappingURL=index.js.map