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
exports.CustomerChangePasswordResponse = exports.CustomerChangePasswordResponseMessage = exports.CustomerResponse = exports.CustomerChangePasswordInput = exports.UpdateCustomerInput = exports.GraphqlCustomer = exports.CustomerAddressInput = exports.GraphqlCustomerAddress = void 0;
const graphql_1 = require("@nestjs/graphql");
let GraphqlCustomerAddress = class GraphqlCustomerAddress {
};
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], GraphqlCustomerAddress.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], GraphqlCustomerAddress.prototype, "firstName", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], GraphqlCustomerAddress.prototype, "lastName", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], GraphqlCustomerAddress.prototype, "addressLine1", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], GraphqlCustomerAddress.prototype, "addressLine2", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    __metadata("design:type", Boolean)
], GraphqlCustomerAddress.prototype, "isDefault", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], GraphqlCustomerAddress.prototype, "company", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], GraphqlCustomerAddress.prototype, "state", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], GraphqlCustomerAddress.prototype, "country", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], GraphqlCustomerAddress.prototype, "postCode", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], GraphqlCustomerAddress.prototype, "phone", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], GraphqlCustomerAddress.prototype, "tag", void 0);
GraphqlCustomerAddress = __decorate([
    (0, graphql_1.ObjectType)('CustomerAddress')
], GraphqlCustomerAddress);
exports.GraphqlCustomerAddress = GraphqlCustomerAddress;
let CustomerAddressInput = class CustomerAddressInput {
};
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CustomerAddressInput.prototype, "firstName", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CustomerAddressInput.prototype, "lastName", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CustomerAddressInput.prototype, "addressLine1", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], CustomerAddressInput.prototype, "addressLine2", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    __metadata("design:type", Boolean)
], CustomerAddressInput.prototype, "isDefault", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], CustomerAddressInput.prototype, "company", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], CustomerAddressInput.prototype, "state", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], CustomerAddressInput.prototype, "country", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], CustomerAddressInput.prototype, "postCode", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CustomerAddressInput.prototype, "phone", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CustomerAddressInput.prototype, "tag", void 0);
CustomerAddressInput = __decorate([
    (0, graphql_1.InputType)()
], CustomerAddressInput);
exports.CustomerAddressInput = CustomerAddressInput;
let GraphqlCustomer = class GraphqlCustomer {
};
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], GraphqlCustomer.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], GraphqlCustomer.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], GraphqlCustomer.prototype, "phone", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], GraphqlCustomer.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => [GraphqlCustomerAddress], { nullable: true }),
    __metadata("design:type", Array)
], GraphqlCustomer.prototype, "addresses", void 0);
GraphqlCustomer = __decorate([
    (0, graphql_1.ObjectType)('Customer')
], GraphqlCustomer);
exports.GraphqlCustomer = GraphqlCustomer;
let UpdateCustomerInput = class UpdateCustomerInput {
};
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UpdateCustomerInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UpdateCustomerInput.prototype, "phone", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UpdateCustomerInput.prototype, "email", void 0);
UpdateCustomerInput = __decorate([
    (0, graphql_1.InputType)()
], UpdateCustomerInput);
exports.UpdateCustomerInput = UpdateCustomerInput;
let CustomerChangePasswordInput = class CustomerChangePasswordInput {
};
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CustomerChangePasswordInput.prototype, "currentPassword", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CustomerChangePasswordInput.prototype, "newPassword", void 0);
CustomerChangePasswordInput = __decorate([
    (0, graphql_1.InputType)()
], CustomerChangePasswordInput);
exports.CustomerChangePasswordInput = CustomerChangePasswordInput;
let CustomerResponse = class CustomerResponse {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], CustomerResponse.prototype, "code", void 0);
__decorate([
    (0, graphql_1.Field)(() => GraphqlCustomer, { nullable: true }),
    __metadata("design:type", GraphqlCustomer)
], CustomerResponse.prototype, "data", void 0);
CustomerResponse = __decorate([
    (0, graphql_1.ObjectType)()
], CustomerResponse);
exports.CustomerResponse = CustomerResponse;
let CustomerChangePasswordResponseMessage = class CustomerChangePasswordResponseMessage {
};
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CustomerChangePasswordResponseMessage.prototype, "message", void 0);
CustomerChangePasswordResponseMessage = __decorate([
    (0, graphql_1.ObjectType)()
], CustomerChangePasswordResponseMessage);
exports.CustomerChangePasswordResponseMessage = CustomerChangePasswordResponseMessage;
let CustomerChangePasswordResponse = class CustomerChangePasswordResponse {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], CustomerChangePasswordResponse.prototype, "code", void 0);
__decorate([
    (0, graphql_1.Field)(() => CustomerChangePasswordResponseMessage, { nullable: true }),
    __metadata("design:type", CustomerChangePasswordResponseMessage)
], CustomerChangePasswordResponse.prototype, "data", void 0);
CustomerChangePasswordResponse = __decorate([
    (0, graphql_1.ObjectType)()
], CustomerChangePasswordResponse);
exports.CustomerChangePasswordResponse = CustomerChangePasswordResponse;
//# sourceMappingURL=customer.model.js.map