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
exports.UserRepository = void 0;
const common_1 = require("@nestjs/common");
const crypto_1 = require("crypto");
const user_database_interface_1 = require("./user.database.interface");
let UserRepository = class UserRepository {
    constructor(db) {
        this.db = db;
    }
    async createUser(user) {
        user.id = (0, crypto_1.randomUUID)();
        return await this.db.createUser(user);
    }
    async findUser(query) {
        return await this.db.findUser(query);
    }
    async getUserPassword(query) {
        return await this.db.getUserPassword(query);
    }
    async updateUser(userId, user) {
        return await this.db.updateUser(userId, user);
    }
    async updateUserWithNewAddress(userId, user, address) {
        return await this.db.updateUserWithNewAddress(userId, user, address);
    }
    async updateUserAndAddress(userId, user, address) {
        return await this.db.updateUserAndAddress(userId, user, address);
    }
};
UserRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_database_interface_1.IUserDatabase])
], UserRepository);
exports.UserRepository = UserRepository;
//# sourceMappingURL=index.js.map