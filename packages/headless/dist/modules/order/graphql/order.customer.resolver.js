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
exports.CustomerOrderResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const common_1 = require("@nestjs/common");
const customer_service_1 = require("../services/customer.service");
const order_customer_model_1 = require("./order.customer.model");
const auth_decorator_1 = require("../../../decorators/auth.decorator");
const auth_guard_1 = require("../../../guards/auth.guard");
let CustomerOrderResolver = class CustomerOrderResolver {
    constructor(customerOrderService) {
        this.customerOrderService = customerOrderService;
    }
    async getOrderByOrderId(orderId) {
        return await this.customerOrderService.getOrderByOrderId(orderId);
    }
    async getOrderListByUserId(user, sortObj) {
        return await this.customerOrderService.getOrderListByUserId(user.id, sortObj);
    }
    async createOrder(user, order) {
        return await this.customerOrderService.createOrder(user.id, order, order.products);
    }
    async reOrder(user, reOrder) {
        return await this.customerOrderService.reOrder(user.id, reOrder);
    }
};
__decorate([
    (0, graphql_1.Query)(() => order_customer_model_1.SingleOrderResponse),
    __param(0, (0, graphql_1.Args)('orderId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CustomerOrderResolver.prototype, "getOrderByOrderId", null);
__decorate([
    (0, graphql_1.Query)(() => order_customer_model_1.SingleUserOrderList),
    __param(0, (0, auth_decorator_1.User)()),
    __param(1, (0, graphql_1.Args)('sortObj')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, order_customer_model_1.OrderSortingQueryModel]),
    __metadata("design:returntype", Promise)
], CustomerOrderResolver.prototype, "getOrderListByUserId", null);
__decorate([
    (0, graphql_1.Mutation)(() => order_customer_model_1.SingleOrderResponse),
    __param(0, (0, auth_decorator_1.User)()),
    __param(1, (0, graphql_1.Args)('order')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, order_customer_model_1.CreateOrderModel]),
    __metadata("design:returntype", Promise)
], CustomerOrderResolver.prototype, "createOrder", null);
__decorate([
    (0, graphql_1.Mutation)(() => order_customer_model_1.ReOrderResponse),
    __param(0, (0, auth_decorator_1.User)()),
    __param(1, (0, graphql_1.Args)('reOrder')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, order_customer_model_1.ReOrderRequestModel]),
    __metadata("design:returntype", Promise)
], CustomerOrderResolver.prototype, "reOrder", null);
CustomerOrderResolver = __decorate([
    (0, common_1.UseGuards)(new auth_guard_1.RolesGuard(['customer'])),
    (0, graphql_1.Resolver)(),
    __metadata("design:paramtypes", [customer_service_1.OrderCustomerService])
], CustomerOrderResolver);
exports.CustomerOrderResolver = CustomerOrderResolver;
//# sourceMappingURL=order.customer.resolver.js.map