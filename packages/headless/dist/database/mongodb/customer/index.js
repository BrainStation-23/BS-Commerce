"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerDatabase = void 0;
const common_1 = require("@nestjs/common");
const otp_model_1 = require("../otp/otp.model");
const customer_model_1 = require("./customer.model");
let CustomerDatabase = class CustomerDatabase {
    async sendOtp(data) {
        return await otp_model_1.OtpModel.create(data);
    }
    async verifyOtp(query) {
        const otp = await otp_model_1.OtpModel.findOne(query);
        if (otp)
            await this.updateOtp(query, {
                otpVerifiedAt: Date.now(),
                isVerified: true,
            });
        return otp;
    }
    async findOtp(query) {
        return await otp_model_1.OtpModel.findOne(query);
    }
    async updateOtp(query, data) {
        return await otp_model_1.OtpModel.findOneAndUpdate(query, { $set: data });
    }
    async deleteOtp(query) {
        return await otp_model_1.OtpModel.findOneAndDelete(query);
    }
    async createCustomer(customer) {
        const createdCUstomer = await customer_model_1.CustomerModel.create(customer);
        createdCUstomer &&
            customer.email &&
            (await this.deleteOtp({ email: customer.email }));
        createdCUstomer &&
            customer.phone &&
            (await this.deleteOtp({ phone: customer.phone }));
        const newCustomer = createdCUstomer === null || createdCUstomer === void 0 ? void 0 : createdCUstomer.toObject();
        newCustomer === null || newCustomer === void 0 ? true : delete newCustomer.password;
        return newCustomer;
    }
    async findCustomer(query) {
        return customer_model_1.CustomerModel.findOne(query).lean().select('-password -_id');
    }
    async getCustomerPassword(query) {
        return await customer_model_1.CustomerModel.findOne(query).lean();
    }
    async updateCustomer(customerId, customer) {
        return await customer_model_1.CustomerModel.findOneAndUpdate({ id: customerId }, { $set: customer }, { new: true })
            .lean()
            .select('-password -_id')
            .exec();
    }
    async addCustomerNewAddress(customerId, address) {
        return await customer_model_1.CustomerModel.findOneAndUpdate({ id: customerId }, { $push: { addresses: address } }, { new: true })
            .lean()
            .select('-password -_id')
            .exec();
    }
    async updateCustomerAddress(customerId, addressId, address) {
        return await customer_model_1.CustomerModel.findOneAndUpdate({ id: customerId, 'addresses.id': addressId }, { $set: { 'addresses.$': address } }, { new: true })
            .lean()
            .select('-password -_id')
            .exec();
    }
    async deleteCustomerAddress(customerId, addressId) {
        return await customer_model_1.CustomerModel.findOneAndUpdate({ id: customerId, 'addresses.id': addressId }, { $pull: { addresses: { id: addressId } } }, { new: true })
            .lean()
            .select('-password -_id')
            .exec();
    }
};
CustomerDatabase = __decorate([
    (0, common_1.Injectable)()
], CustomerDatabase);
exports.CustomerDatabase = CustomerDatabase;
//# sourceMappingURL=index.js.map