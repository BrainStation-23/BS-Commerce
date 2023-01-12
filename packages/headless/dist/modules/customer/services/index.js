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
exports.CustomerService = void 0;
const common_1 = require("@nestjs/common");
const helper_interface_1 = require("../../../helper/helper.interface");
const repositories_1 = require("../repositories");
let CustomerService = class CustomerService {
    constructor(customerRepo, helper) {
        this.customerRepo = customerRepo;
        this.helper = helper;
    }
    async getCustomer(customerId) {
        const customer = await this.customerRepo.findCustomer({ id: customerId });
        if (!customer)
            return this.helper.serviceResponse.errorResponse("CUSTOMER_NOT_FOUND", null, common_1.HttpStatus.BAD_REQUEST);
        return this.helper.serviceResponse.successResponse(customer, common_1.HttpStatus.OK);
    }
    async updateCustomer(customerId, data) {
        let customer = await this.customerRepo.findCustomer({ id: customerId });
        if (!customer)
            return this.helper.serviceResponse.errorResponse("CUSTOMER_NOT_FOUND", null, common_1.HttpStatus.BAD_REQUEST);
        if (customer && customer.phone && data.phone)
            return this.helper.serviceResponse.errorResponse("CAN_NOT_CHANGE_EXISTING_PHONE", null, common_1.HttpStatus.BAD_REQUEST);
        if (customer && customer.email && data.email)
            return this.helper.serviceResponse.errorResponse("CAN_NOT_CHANGE_EXISTING_EMAIL", null, common_1.HttpStatus.BAD_REQUEST);
        const emailMatch = data.email &&
            (await this.customerRepo.findCustomer({ email: data.email }));
        if (emailMatch)
            return this.helper.serviceResponse.errorResponse("CUSTOMER_EMAIL_MATCH", null, common_1.HttpStatus.BAD_REQUEST);
        const phoneMatch = data.phone &&
            (await this.customerRepo.findCustomer({ phone: data.phone }));
        if (phoneMatch)
            return this.helper.serviceResponse.errorResponse("CUSTOMER_PHONE_MATCH", null, common_1.HttpStatus.BAD_REQUEST);
        customer = Object.assign(customer, data);
        const updatedCustomer = await this.customerRepo.updateCustomer(customerId, customer);
        if (!updatedCustomer)
            return this.helper.serviceResponse.errorResponse("CAN_NOT_UPDATE_CUSTOMER_INFORMATION", null, common_1.HttpStatus.BAD_REQUEST);
        return this.helper.serviceResponse.successResponse(updatedCustomer, common_1.HttpStatus.OK);
    }
    async addCustomerNewAddress(customerId, address) {
        const updatedCustomer = await this.customerRepo.addCustomerNewAddress(customerId, address);
        if (!updatedCustomer)
            return this.helper.serviceResponse.errorResponse("CAN_NOT_ADD_CUSTOMER_NEW_ADDRESS", null, common_1.HttpStatus.BAD_REQUEST);
        if (address.isDefault &&
            updatedCustomer.addresses.length &&
            updatedCustomer.addresses.length > 1) {
            let check = false;
            updatedCustomer.addresses.forEach((address) => {
                if (address.isDefault &&
                    updatedCustomer.addresses[updatedCustomer.addresses.length - 1].id !==
                        address.id) {
                    address.isDefault = false;
                    check = true;
                }
            });
            check &&
                (await this.customerRepo.updateCustomer(customerId, updatedCustomer));
        }
        return this.helper.serviceResponse.successResponse(updatedCustomer, common_1.HttpStatus.OK);
    }
    async updateCustomerAddress(customerId, addressId, address) {
        const updatedCustomer = await this.customerRepo.updateCustomerAddress(customerId, addressId, address);
        if (!updatedCustomer)
            return this.helper.serviceResponse.errorResponse("CAN_NOT_UPDATE_CUSTOMER_ADDRESS", null, common_1.HttpStatus.BAD_REQUEST);
        if (address.isDefault &&
            updatedCustomer.addresses.length &&
            updatedCustomer.addresses.length > 1) {
            let check = false;
            updatedCustomer.addresses.forEach((address) => {
                if (address.isDefault && addressId !== address.id) {
                    address.isDefault = false;
                    check = true;
                }
            });
            check &&
                (await this.customerRepo.updateCustomer(customerId, updatedCustomer));
        }
        return this.helper.serviceResponse.successResponse(updatedCustomer, common_1.HttpStatus.OK);
    }
    async deleteCustomerAddress(customerId, addressId) {
        const customer = await this.customerRepo.findCustomer({ id: customerId });
        if (!customer)
            return this.helper.serviceResponse.errorResponse("CUSTOMER_NOT_FOUND", null, common_1.HttpStatus.BAD_REQUEST);
        const updatedCustomer = await this.customerRepo.deleteCustomerAddress(customerId, addressId);
        if (!updatedCustomer)
            return this.helper.serviceResponse.errorResponse("CAN_NOT_DELETE_CUSTOMER_ADDRESS", null, common_1.HttpStatus.BAD_REQUEST);
        return this.helper.serviceResponse.successResponse(updatedCustomer, common_1.HttpStatus.OK);
    }
};
CustomerService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [repositories_1.CustomerRepository,
        helper_interface_1.Helper])
], CustomerService);
exports.CustomerService = CustomerService;
//# sourceMappingURL=index.js.map