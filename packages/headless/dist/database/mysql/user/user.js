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
const address_model_1 = require("./address.model");
const user_model_1 = require("./user.model");
let UserDatabase = class UserDatabase {
    async createUser(user) {
        const newUser = (await user_model_1.default.create(user)).get({ plain: true });
        newUser === null || newUser === void 0 ? true : delete newUser.password;
        return newUser;
    }
    async getUserPassword(query) {
        return await user_model_1.default.findOne({ where: query });
    }
    async findUser(query) {
        return await user_model_1.default.findOne({
            include: [address_model_1.default],
            where: query,
            raw: false,
            attributes: { exclude: ['password'] },
        });
    }
    async updateUser(userId, user) {
        await user_model_1.default.update(user, { where: { id: userId } });
        return await this.findUser({ id: userId });
    }
    async updateUserWithNewAddress(userId, user, address) {
        await address_model_1.default.create(Object.assign(Object.assign({}, address), { userId }));
        return await this.updateUser(userId, user);
    }
    async updateUserAndAddress(userId, user, address) {
        await address_model_1.default.update(address, { where: { id: address.id, userId } });
        return await this.updateUser(userId, user);
    }
};
UserDatabase = __decorate([
    (0, common_1.Injectable)()
], UserDatabase);
exports.UserDatabase = UserDatabase;
//# sourceMappingURL=user.js.map