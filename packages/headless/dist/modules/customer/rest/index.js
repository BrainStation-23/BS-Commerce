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
exports.CustomerController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const services_1 = require("../services");
const auth_decorator_1 = require("../../../decorators/auth.decorator");
const auth_guard_1 = require("../../../guards/auth.guard");
const customer_1 = require("../../../entity/customer");
const dto_1 = require("./dto");
let CustomerController = class CustomerController {
    constructor(customerService) {
        this.customerService = customerService;
    }
    async getCustomer(customer, res) {
        const _a = await this.customerService.getCustomer(customer.id), { code } = _a, response = __rest(_a, ["code"]);
        res.status(code);
        return Object.assign({ code }, response);
    }
    async updateCustomer(data, customer, res) {
        const _a = await this.customerService.updateCustomer(customer.id, data), { code } = _a, response = __rest(_a, ["code"]);
        res.status(code);
        return Object.assign({ code }, response);
    }
    async addCustomerNewAddress(address, customer, res) {
        const _a = await this.customerService.addCustomerNewAddress(customer.id, address), { code } = _a, response = __rest(_a, ["code"]);
        res.status(code);
        return Object.assign({ code }, response);
    }
    async updateCustomerAddress(params, address, customer, res) {
        const _a = await this.customerService.updateCustomerAddress(customer.id, params.addressId, Object.assign(Object.assign({}, address), { id: params.addressId })), { code } = _a, response = __rest(_a, ["code"]);
        res.status(code);
        return Object.assign({ code }, response);
    }
    async deleteCustomerAddress(params, customer, res) {
        const _a = await this.customerService.deleteCustomerAddress(customer.id, params.addressId), { code } = _a, response = __rest(_a, ["code"]);
        res.status(code);
        return Object.assign({ code }, response);
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiResponse)({
        description: 'Get Customer Success Response',
        type: dto_1.GetCustomerInformationSuccessResponseDto,
        status: common_1.HttpStatus.OK,
    }),
    (0, swagger_1.ApiResponse)({
        description: 'Get Customer Error Response',
        type: dto_1.GetCustomerInformationErrorResponseDto,
        status: common_1.HttpStatus.BAD_REQUEST,
    }),
    __param(0, (0, auth_decorator_1.User)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [customer_1.Customer, Object]),
    __metadata("design:returntype", Promise)
], CustomerController.prototype, "getCustomer", null);
__decorate([
    (0, common_1.Patch)(),
    (0, swagger_1.ApiResponse)({
        description: 'Update Customer Success Response',
        type: dto_1.UpdateCustomerSuccessResponseDto,
        status: common_1.HttpStatus.OK,
    }),
    (0, swagger_1.ApiResponse)({
        description: 'Update Customer Error Response',
        type: dto_1.UpdateCustomerErrorResponseDto,
        status: common_1.HttpStatus.BAD_REQUEST,
    }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, auth_decorator_1.User)()),
    __param(2, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.UpdateCustomerDto,
        customer_1.Customer, Object]),
    __metadata("design:returntype", Promise)
], CustomerController.prototype, "updateCustomer", null);
__decorate([
    (0, common_1.Put)('/add-address'),
    (0, swagger_1.ApiResponse)({
        description: 'Add Customer New Address Success Response',
        type: dto_1.AddCustomerNewAddressSuccessResponseDto,
        status: common_1.HttpStatus.OK,
    }),
    (0, swagger_1.ApiResponse)({
        description: 'Add Customer New Address Error Response',
        type: dto_1.AddCustomerNewAddressErrorResponseDto,
        status: common_1.HttpStatus.BAD_REQUEST,
    }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, auth_decorator_1.User)()),
    __param(2, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.CustomerAddressDto,
        customer_1.Customer, Object]),
    __metadata("design:returntype", Promise)
], CustomerController.prototype, "addCustomerNewAddress", null);
__decorate([
    (0, common_1.Patch)('/update-address/:addressId'),
    (0, swagger_1.ApiResponse)({
        description: 'Update Customer Address Success Response',
        type: dto_1.UpdateCustomerAddressSuccessResponseDto,
        status: common_1.HttpStatus.OK,
    }),
    (0, swagger_1.ApiResponse)({
        description: 'Update Customer Address Error Response',
        type: dto_1.UpdateCustomerAddressErrorResponseDto,
        status: common_1.HttpStatus.BAD_REQUEST,
    }),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, auth_decorator_1.User)()),
    __param(3, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.UpdateCustomerAddressParamsDto,
        dto_1.CustomerAddressDto,
        customer_1.Customer, Object]),
    __metadata("design:returntype", Promise)
], CustomerController.prototype, "updateCustomerAddress", null);
__decorate([
    (0, common_1.Delete)('/delete-address/:addressId'),
    (0, swagger_1.ApiResponse)({
        description: 'Delete Customer Address Success Response',
        type: dto_1.DeleteCustomerAddressSuccessResponseDto,
        status: common_1.HttpStatus.OK,
    }),
    (0, swagger_1.ApiResponse)({
        description: 'Delete Customer Address Error Response',
        type: dto_1.DeleteCustomerAddressErrorResponseDto,
        status: common_1.HttpStatus.BAD_REQUEST,
    }),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, auth_decorator_1.User)()),
    __param(2, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.DeleteCustomerAddressParamsDto,
        customer_1.Customer, Object]),
    __metadata("design:returntype", Promise)
], CustomerController.prototype, "deleteCustomerAddress", null);
CustomerController = __decorate([
    (0, common_1.Controller)('customer'),
    (0, swagger_1.ApiTags)('Customer Profile API'),
    (0, common_1.UseGuards)(new auth_guard_1.RolesGuard(['customer'])),
    (0, swagger_1.ApiBearerAuth)(),
    __metadata("design:paramtypes", [services_1.CustomerService])
], CustomerController);
exports.CustomerController = CustomerController;
//# sourceMappingURL=index.js.map