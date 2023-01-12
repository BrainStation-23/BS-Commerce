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
exports.OrderAdminService = void 0;
const common_1 = require("@nestjs/common");
const order_1 = require("../../../entity/order");
const response_1 = require("../../../utils/response");
const repositories_1 = require("../repositories");
let OrderAdminService = class OrderAdminService {
    constructor(orderRepository) {
        this.orderRepository = orderRepository;
    }
    async getOrderById(orderId) {
        const orderData = await this.orderRepository.findOrder({ orderId });
        if (orderData) {
            return (0, response_1.successResponse)(order_1.OrderEntity, orderData);
        }
        return (0, response_1.errorResponse)('Error in order creation.', null, common_1.HttpStatus.BAD_REQUEST);
    }
    async getOrderEnums() {
        const enums = {
            orderStatusEnums: order_1.OrderStatusEnum,
            paymentStatusEnums: order_1.PaymentStatusEnum,
            shippingStatusEnum: order_1.ShippingStatusEnum,
        };
        return (0, response_1.successResponse)(null, enums);
    }
    async getOrderStatistics() {
        const orderStat = await this.orderRepository.getOrderStatistics();
        if (orderStat) {
            return (0, response_1.successResponse)(order_1.OrderStatEntity, orderStat);
        }
        return (0, response_1.errorResponse)('Error in order statistics', null, common_1.HttpStatus.BAD_REQUEST);
    }
    async getIncompleteStatistics() {
        const orderStat = await this.orderRepository.getIncompleteStatistics();
        if (orderStat) {
            return (0, response_1.successResponse)(order_1.OrderIncompleteStatEntity, orderStat);
        }
        return (0, response_1.errorResponse)('Error in order incomplete statistics', null, common_1.HttpStatus.BAD_REQUEST);
    }
    async changeStatus(body) {
        const orderStat = await this.orderRepository.changeStatus(body);
        if (orderStat) {
            return (0, response_1.successResponse)(order_1.OrderEntity, orderStat);
        }
        return (0, response_1.errorResponse)('Error in change status', null, common_1.HttpStatus.BAD_REQUEST);
    }
    async getOrderList(query, skip, limit) {
        const orderList = await this.orderRepository.getOrderList(query, skip, limit);
        const response = {
            orders: orderList,
        };
        if (orderList) {
            return (0, response_1.successResponse)(order_1.AllOrdersEntity, response);
        }
        return (0, response_1.errorResponse)('Error in getting order list', null, common_1.HttpStatus.BAD_REQUEST);
    }
};
OrderAdminService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [repositories_1.OrderRepository])
], OrderAdminService);
exports.OrderAdminService = OrderAdminService;
//# sourceMappingURL=admin.service.js.map