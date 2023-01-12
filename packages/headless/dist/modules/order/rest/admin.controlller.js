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
exports.OrderAdminController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const auth_guard_1 = require("../../../guards/auth.guard");
const admin_response_dto_1 = require("./dto/admin.response.dto");
const admin_service_1 = require("../services/admin.service");
const allOrderList_dto_1 = require("./dto/allOrderList.dto");
const order_dto_1 = require("./dto/order.dto");
let OrderAdminController = class OrderAdminController {
    constructor(orderAdminService) {
        this.orderAdminService = orderAdminService;
    }
    async getOrderEnums(res) {
        const _a = await this.orderAdminService.getOrderEnums(), { code } = _a, response = __rest(_a, ["code"]);
        res.status(code);
        return response;
    }
    async getOrderStatistics(res) {
        const _a = await this.orderAdminService.getOrderStatistics(), { code } = _a, response = __rest(_a, ["code"]);
        res.status(code);
        return response;
    }
    async getIncompleteStatistics(res) {
        const _a = await this.orderAdminService.getIncompleteStatistics(), { code } = _a, response = __rest(_a, ["code"]);
        res.status(code);
        return response;
    }
    async getOrderList(query, res) {
        const { skip, limit } = query;
        const _a = await this.orderAdminService.getOrderList(query, skip, limit), { code } = _a, response = __rest(_a, ["code"]);
        res.status(code);
        return response;
    }
    async getOrderById(orderId, res) {
        const _a = await this.orderAdminService.getOrderById(orderId), { code } = _a, response = __rest(_a, ["code"]);
        res.status(code);
        return response;
    }
    async changeStatus(body, res) {
        const _a = await this.orderAdminService.changeStatus(body), { code } = _a, response = __rest(_a, ["code"]);
        res.status(code);
        return response;
    }
};
__decorate([
    (0, swagger_1.ApiResponse)({
        type: admin_response_dto_1.OrderStatusEnumDto,
        description: 'Order status, payment, shipment status enums',
    }),
    (0, common_1.Get)('enums'),
    __param(0, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], OrderAdminController.prototype, "getOrderEnums", null);
__decorate([
    (0, swagger_1.ApiResponse)({ type: admin_response_dto_1.OrderStatDto, description: 'Order statistics' }),
    (0, common_1.Get)('statistics'),
    __param(0, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], OrderAdminController.prototype, "getOrderStatistics", null);
__decorate([
    (0, swagger_1.ApiResponse)({
        type: admin_response_dto_1.OrderIncompleteStatDto,
        description: 'Order incomplete statistics',
    }),
    (0, common_1.Get)('incomplete/statistics'),
    __param(0, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], OrderAdminController.prototype, "getIncompleteStatistics", null);
__decorate([
    (0, swagger_1.ApiResponse)({ type: allOrderList_dto_1.AllOrderResponseDto, description: 'All Orders' }),
    (0, common_1.Get)('orderList'),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [allOrderList_dto_1.GetAllOrderQueryDto, Object]),
    __metadata("design:returntype", Promise)
], OrderAdminController.prototype, "getOrderList", null);
__decorate([
    (0, swagger_1.ApiResponse)({ type: order_dto_1.OrderDto, description: 'Order details by order id' }),
    (0, swagger_1.ApiParam)({
        name: 'orderId',
        example: '84dab8b9-8461-4f2f-9863-b6934ed9cc27',
    }),
    (0, common_1.Get)(':orderId'),
    __param(0, (0, common_1.Param)('orderId')),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], OrderAdminController.prototype, "getOrderById", null);
__decorate([
    (0, swagger_1.ApiBody)({ type: admin_response_dto_1.ChangeStatusDto }),
    (0, common_1.Patch)('change-status'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [admin_response_dto_1.ChangeStatusDto, Object]),
    __metadata("design:returntype", Promise)
], OrderAdminController.prototype, "changeStatus", null);
OrderAdminController = __decorate([
    (0, swagger_1.ApiTags)('Order - Admin API'),
    (0, common_1.UseGuards)(new auth_guard_1.RolesGuard(['admin'])),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('admin/order'),
    __metadata("design:paramtypes", [admin_service_1.OrderAdminService])
], OrderAdminController);
exports.OrderAdminController = OrderAdminController;
//# sourceMappingURL=admin.controlller.js.map