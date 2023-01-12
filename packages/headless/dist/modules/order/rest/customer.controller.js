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
exports.OrderCustomerController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const user_1 = require("../../../entity/user");
const auth_guard_1 = require("../../../guards/auth.guard");
const auth_decorator_1 = require("../../../decorators/auth.decorator");
const order_create_dto_1 = require("./dto/order.create.dto");
const customer_service_1 = require("../services/customer.service");
const sortQuery_dto_1 = require("./dto/sortQuery.dto");
const getOrderByUserId_dto_1 = require("./dto/getOrderByUserId.dto");
const order_dto_1 = require("./dto/order.dto");
const reOrder_dto_1 = require("./dto/reOrder.dto");
let OrderCustomerController = class OrderCustomerController {
    constructor(orderCustomerService) {
        this.orderCustomerService = orderCustomerService;
    }
    async createOrder(user, body, res) {
        const _a = await this.orderCustomerService.createOrder(user.id, body, body.products), { code } = _a, response = __rest(_a, ["code"]);
        res.status(code);
        return response;
    }
    async reOrder(user, body, res) {
        const _a = await this.orderCustomerService.reOrder(user.id, body), { code } = _a, response = __rest(_a, ["code"]);
        res.status(code);
        return response;
    }
    async getOrderListByUserId(user, sortObj, res) {
        const _a = await this.orderCustomerService.getOrderListByUserId(user.id, sortObj), { code } = _a, response = __rest(_a, ["code"]);
        res.status(code);
        return response;
    }
    async getOrderByOrderId(orderId, res) {
        const _a = await this.orderCustomerService.getOrderByOrderId(orderId), { code } = _a, response = __rest(_a, ["code"]);
        res.status(code);
        return response;
    }
};
__decorate([
    (0, swagger_1.ApiResponse)({
        type: order_dto_1.OrderDto,
        description: 'Create order response',
    }),
    (0, common_1.Post)(),
    __param(0, (0, auth_decorator_1.User)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_1.User,
        order_create_dto_1.CreateOrderDto, Object]),
    __metadata("design:returntype", Promise)
], OrderCustomerController.prototype, "createOrder", null);
__decorate([
    (0, swagger_1.ApiResponse)({
        type: order_dto_1.OrderDto,
        description: 'Re Order Response',
    }),
    (0, common_1.Post)('/reOrder'),
    __param(0, (0, auth_decorator_1.User)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_1.User,
        reOrder_dto_1.ReOrderDto, Object]),
    __metadata("design:returntype", Promise)
], OrderCustomerController.prototype, "reOrder", null);
__decorate([
    (0, swagger_1.ApiResponse)({
        type: getOrderByUserId_dto_1.OrderListByUserIdResponseDto,
        description: 'Response of get-order-list-by-user-id',
    }),
    (0, common_1.Get)(),
    __param(0, (0, auth_decorator_1.User)()),
    __param(1, (0, common_1.Query)()),
    __param(2, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_1.User,
        sortQuery_dto_1.OrderSortQueryDto, Object]),
    __metadata("design:returntype", Promise)
], OrderCustomerController.prototype, "getOrderListByUserId", null);
__decorate([
    (0, swagger_1.ApiResponse)({
        type: order_dto_1.OrderDto,
        description: 'Response of get-order-by-order-id',
    }),
    (0, common_1.Get)('/:orderId'),
    __param(0, (0, common_1.Param)('orderId')),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], OrderCustomerController.prototype, "getOrderByOrderId", null);
OrderCustomerController = __decorate([
    (0, swagger_1.ApiTags)('Order - Customer API'),
    (0, common_1.UseGuards)(new auth_guard_1.RolesGuard(['customer'])),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('customer/order'),
    __metadata("design:paramtypes", [customer_service_1.OrderCustomerService])
], OrderCustomerController);
exports.OrderCustomerController = OrderCustomerController;
//# sourceMappingURL=customer.controller.js.map