"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDatabase = void 0;
const common_1 = require("@nestjs/common");
const user_model_1 = require("./user.model");
let UserDatabase = class UserDatabase {
    async createUser(user) {
        const createdUser = await user_model_1.UserModel.create(user);
        const newUser = createdUser === null || createdUser === void 0 ? void 0 : createdUser.toJSON();
        newUser === null || newUser === void 0 ? true : delete newUser.password;
        return newUser;
    }
    async getUserPassword(query) {
        return await user_model_1.UserModel.findOne(query).lean();
    }
    async findUser(query) {
        return await user_model_1.UserModel.findOne(query).lean().select('-password -_id');
    }
    async updateUser(userId, user) {
        return await user_model_1.UserModel.findOneAndUpdate({ id: userId }, { $set: user }, { new: true })
            .lean()
            .select('-password -_id')
            .exec();
    }
    async updateUserWithNewAddress(userId, user, address) {
        return await user_model_1.UserModel.findOneAndUpdate({ id: userId }, { $set: user, $push: { addresses: address } }, { new: true })
            .lean()
            .select('-password -_id')
            .exec();
    }
    async updateUserAndAddress(userId, user, address) {
        return await user_model_1.UserModel.findOneAndUpdate({ id: userId, 'addresses.id': address.id }, { $set: Object.assign(Object.assign({}, user), { 'addresses.$': address }) }, { new: true })
            .lean()
            .select('-password -_id')
            .exec();
    }
};
UserDatabase = __decorate([
    (0, common_1.Injectable)()
], UserDatabase);
exports.UserDatabase = UserDatabase;
//# sourceMappingURL=index.js.map