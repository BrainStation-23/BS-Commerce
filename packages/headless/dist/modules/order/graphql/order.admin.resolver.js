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
exports.AdminOrderResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const common_1 = require("@nestjs/common");
const order_admin_model_1 = require("./order.admin.model");
const auth_guard_1 = require("../../../guards/auth.guard");
const admin_service_1 = require("./../services/admin.service");
const order_customer_model_1 = require("./order.customer.model");
let AdminOrderResolver = class AdminOrderResolver {
    constructor(orderAdminService) {
        this.orderAdminService = orderAdminService;
    }
    async getOrderEnums() {
        return await this.orderAdminService.getOrderEnums();
    }
    async getOrderStatistics() {
        return await this.orderAdminService.getOrderStatistics();
    }
    async getIncompleteStatistics() {
        return await this.orderAdminService.getIncompleteStatistics();
    }
    async getOrderList(query) {
        return await this.orderAdminService.getOrderList(query, query.skip, query.limit);
    }
    async getOrderByOrderId(orderId) {
        return await this.orderAdminService.getOrderById(orderId);
    }
    async changeStatus(body) {
        return await this.orderAdminService.changeStatus(body);
    }
};
__decorate([
    (0, graphql_1.Query)(() => order_admin_model_1.StatusTypesResponse),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AdminOrderResolver.prototype, "getOrderEnums", null);
__decorate([
    (0, graphql_1.Query)(() => order_admin_model_1.OrderStatResponse),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AdminOrderResolver.prototype, "getOrderStatistics", null);
__decorate([
    (0, graphql_1.Query)(() => order_admin_model_1.OrderIncompleteStatResponse),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AdminOrderResolver.prototype, "getIncompleteStatistics", null);
__decorate([
    (0, graphql_1.Query)(() => order_admin_model_1.OrderListResponse),
    __param(0, (0, graphql_1.Args)('query')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [order_admin_model_1.GetAllOrderQueryModel]),
    __metadata("design:returntype", Promise)
], AdminOrderResolver.prototype, "getOrderList", null);
__decorate([
    (0, graphql_1.Query)(() => order_customer_model_1.SingleOrderResponse),
    __param(0, (0, graphql_1.Args)('orderId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AdminOrderResolver.prototype, "getOrderByOrderId", null);
__decorate([
    (0, graphql_1.Mutation)(() => order_customer_model_1.SingleOrderResponse),
    __param(0, (0, graphql_1.Args)('body')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [order_admin_model_1.ChangeStatus]),
    __metadata("design:returntype", Promise)
], AdminOrderResolver.prototype, "changeStatus", null);
AdminOrderResolver = __decorate([
    (0, common_1.UseGuards)(new auth_guard_1.RolesGuard(['admin'])),
    (0, graphql_1.Resolver)(),
    __metadata("design:paramtypes", [admin_service_1.OrderAdminService])
], AdminOrderResolver);
exports.AdminOrderResolver = AdminOrderResolver;
//# sourceMappingURL=order.admin.resolver.js.map