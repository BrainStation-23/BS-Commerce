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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt = require("bcrypt");
const helper_interface_1 = require("../../../helper/helper.interface");
const repositories_1 = require("../repositories");
const auth_1 = require("../../../config/auth");
let UserService = class UserService {
    constructor(userRepo, helper) {
        this.userRepo = userRepo;
        this.helper = helper;
    }
    async getUser(userId) {
        const user = await this.userRepo.findUser({ id: userId });
        if (!user)
            return this.helper.serviceResponse.errorResponse("CAN_NOT_GET_USER", null, common_1.HttpStatus.BAD_REQUEST);
        return this.helper.serviceResponse.successResponse(user, common_1.HttpStatus.OK);
    }
    async updateUser(userId, data) {
        let user = await this.userRepo.findUser({ id: userId });
        if (!user)
            return this.helper.serviceResponse.errorResponse("CAN_NOT_GET_USER", null, common_1.HttpStatus.BAD_REQUEST);
        user = Object.assign(user, data);
        user.displayName = user.firstName + ' ' + user.lastName;
        const { addresses } = user, rest = __rest(user, ["addresses"]);
        if (data.address && data.address.id) {
            const updatedUser = await this.userRepo.updateUserAndAddress(userId, rest, data.address);
            if (!updatedUser)
                return this.helper.serviceResponse.errorResponse("CAN_NOT_UPDATE_USER_ADDRESS", null, common_1.HttpStatus.BAD_REQUEST);
            return this.helper.serviceResponse.successResponse(updatedUser, common_1.HttpStatus.OK);
        }
        if (data.address && !data.address.id) {
            const updatedUser = await this.userRepo.updateUserWithNewAddress(userId, rest, data.address);
            if (!updatedUser)
                return this.helper.serviceResponse.errorResponse("CAN_NOT_ADD_USER_NEW_ADDRESS", null, common_1.HttpStatus.BAD_REQUEST);
            return this.helper.serviceResponse.successResponse(updatedUser, common_1.HttpStatus.OK);
        }
        const updatedUser = await this.userRepo.updateUser(userId, user);
        if (!updatedUser)
            return this.helper.serviceResponse.errorResponse("CAN_NOT_UPDATE_USER", null, common_1.HttpStatus.BAD_REQUEST);
        return this.helper.serviceResponse.successResponse(updatedUser, common_1.HttpStatus.OK);
    }
    async changePassword(userId, passwordDetails) {
        const user = await this.userRepo.getUserPassword({ id: userId });
        if (!user)
            return this.helper.serviceResponse.errorResponse("CAN_NOT_GET_USER", null, common_1.HttpStatus.BAD_REQUEST);
        const doesPasswordMatch = await bcrypt.compare(passwordDetails.currentPassword, user.password);
        if (!doesPasswordMatch)
            return this.helper.serviceResponse.errorResponse("CURRENT_PASSWORD_IS_INCORRECT", null, common_1.HttpStatus.BAD_REQUEST);
        user.password = await bcrypt.hash(passwordDetails.newPassword, auth_1.authConfig.salt);
        const updatedUser = await this.userRepo.updateUser(userId, user);
        if (!updatedUser)
            return this.helper.serviceResponse.errorResponse("CAN_NOT_CHANGE_PASSWORD", null, common_1.HttpStatus.BAD_REQUEST);
        return this.helper.serviceResponse.successResponse({ message: "CHANGE_PASSWORD_SUCCESSFUL" }, common_1.HttpStatus.OK);
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [repositories_1.UserRepository, helper_interface_1.Helper])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=index.js.map