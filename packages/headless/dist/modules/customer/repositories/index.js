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
exports.CustomerRepository = void 0;
const common_1 = require("@nestjs/common");
const crypto_1 = require("crypto");
const customer_database_interface_1 = require("./customer.database.interface");
let CustomerRepository = class CustomerRepository {
    constructor(db) {
        this.db = db;
    }
    async createCustomer(customer) {
        customer.id = (0, crypto_1.randomUUID)();
        return await this.db.createCustomer(customer);
    }
    async sendOtp(data) {
        return await this.db.sendOtp(data);
    }
    async verifyOtp(query) {
        return await this.db.verifyOtp(query);
    }
    async findOtp(query) {
        return await this.db.findOtp(query);
    }
    async deleteOtp(query) {
        return await this.db.deleteOtp(query);
    }
    async updateOtp(query, data) {
        return await this.db.updateOtp(query, data);
    }
    async findCustomer(query) {
        return await this.db.findCustomer(query);
    }
    async updateCustomer(customerId, customer) {
        return await this.db.updateCustomer(customerId, customer);
    }
    async addCustomerNewAddress(customerId, address) {
        return await this.db.addCustomerNewAddress(customerId, address);
    }
    async updateCustomerAddress(customerId, addressId, address) {
        return await this.db.updateCustomerAddress(customerId, addressId, address);
    }
    async deleteCustomerAddress(customerId, addressId) {
        return await this.db.deleteCustomerAddress(customerId, addressId);
    }
    async getCustomerPassword(query) {
        return await this.db.getCustomerPassword(query);
    }
};
CustomerRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [customer_database_interface_1.ICustomerDatabase])
], CustomerRepository);
exports.CustomerRepository = CustomerRepository;
//# sourceMappingURL=index.js.map