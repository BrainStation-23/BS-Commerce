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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const auth_decorator_1 = require("../../../decorators/auth.decorator");
const common_1 = require("@nestjs/common");
const auth_guard_1 = require("../../../guards/auth.guard");
const services_1 = require("../services");
const customer_1 = require("../../../entity/customer");
const customer_model_1 = require("./customer.model");
const helper_interface_1 = require("../../../helper/helper.interface");
let CustomerResolver = class CustomerResolver {
    constructor(customerService, helper) {
        this.customerService = customerService;
        this.helper = helper;
    }
    async getCustomerInfo(customer) {
        const res = await this.customerService.getCustomer(customer.id);
        return this.helper.serviceResponse.graphqlResponse(res);
    }
    async updateCustomer(data, customer) {
        const res = await this.customerService.updateCustomer(customer.id, data);
        return this.helper.serviceResponse.graphqlResponse(res);
    }
    async addCustomerNewAddress(address, customer) {
        const res = await this.customerService.addCustomerNewAddress(customer.id, address);
        return this.helper.serviceResponse.graphqlResponse(res);
    }
    async updateCustomerAddress(address, addressId, customer) {
        const res = await this.customerService.updateCustomerAddress(customer.id, addressId, Object.assign(Object.assign({}, address), { id: addressId }));
        return this.helper.serviceResponse.graphqlResponse(res);
    }
    async deleteCustomerAddress(addressId, customer) {
        const res = await this.customerService.deleteCustomerAddress(customer.id, addressId);
        return this.helper.serviceResponse.graphqlResponse(res);
    }
};
__decorate([
    (0, graphql_1.Query)(() => customer_model_1.CustomerResponse),
    __param(0, (0, auth_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [customer_1.Customer]),
    __metadata("design:returntype", Promise)
], CustomerResolver.prototype, "getCustomerInfo", null);
__decorate([
    (0, graphql_1.Mutation)(() => customer_model_1.CustomerResponse),
    __param(0, (0, graphql_1.Args)('data')),
    __param(1, (0, auth_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [customer_model_1.UpdateCustomerInput,
        customer_1.Customer]),
    __metadata("design:returntype", Promise)
], CustomerResolver.prototype, "updateCustomer", null);
__decorate([
    (0, graphql_1.Mutation)(() => customer_model_1.CustomerResponse),
    __param(0, (0, graphql_1.Args)('address')),
    __param(1, (0, auth_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [customer_model_1.CustomerAddressInput,
        customer_1.Customer]),
    __metadata("design:returntype", Promise)
], CustomerResolver.prototype, "addCustomerNewAddress", null);
__decorate([
    (0, graphql_1.Mutation)(() => customer_model_1.CustomerResponse),
    __param(0, (0, graphql_1.Args)('address')),
    __param(1, (0, graphql_1.Args)('addressId')),
    __param(2, (0, auth_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [customer_model_1.CustomerAddressInput, String, customer_1.Customer]),
    __metadata("design:returntype", Promise)
], CustomerResolver.prototype, "updateCustomerAddress", null);
__decorate([
    (0, graphql_1.Mutation)(() => customer_model_1.CustomerResponse),
    __param(0, (0, graphql_1.Args)('addressId')),
    __param(1, (0, auth_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, customer_1.Customer]),
    __metadata("design:returntype", Promise)
], CustomerResolver.prototype, "deleteCustomerAddress", null);
CustomerResolver = __decorate([
    (0, common_1.UseGuards)(new auth_guard_1.RolesGuard(['customer'])),
    (0, graphql_1.Resolver)(),
    __metadata("design:paramtypes", [services_1.CustomerService,
        helper_interface_1.Helper])
], CustomerResolver);
exports.CustomerResolver = CustomerResolver;
//# sourceMappingURL=customer.resolver.js.map