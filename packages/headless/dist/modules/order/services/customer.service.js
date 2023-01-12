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
exports.OrderCustomerService = void 0;
const common_1 = require("@nestjs/common");
const order_1 = require("../../../entity/order");
const response_1 = require("../../../utils/response");
const repositories_1 = require("../repositories");
let OrderCustomerService = class OrderCustomerService {
    constructor(orderRepository) {
        this.orderRepository = orderRepository;
    }
    async createOrder(userId, body, products) {
        const productListWithPhoto = await this.orderRepository.addPhotoDetails(products);
        const newOrder = Object.assign(Object.assign({}, body), { products: productListWithPhoto });
        const newBody = this.orderRepository.addCosts(newOrder);
        const createOrder = await this.orderRepository.createOrder(userId, newBody);
        if (createOrder) {
            return (0, response_1.successResponse)(order_1.OrderEntity, createOrder);
        }
        return (0, response_1.errorResponse)('Error in order creation.', null, common_1.HttpStatus.BAD_REQUEST);
    }
    async reOrder(userId, body) {
        let { ignoreInvalidItems = false, overWriteCart = false, orderId } = body;
        const prevOrder = await this.orderRepository.findOrder({ orderId, userId });
        if (!prevOrder)
            return {
                error: "INVALID ID",
                errors: null,
                code: common_1.HttpStatus.BAD_REQUEST,
            };
        const prevProducts = prevOrder.products;
        const productIds = prevProducts.map((item) => item.productId);
        let order = prevProducts.map((product) => {
            return { productId: product.productId, quantity: product.quantity };
        });
        const availableProductIds = await this.orderRepository.getAvailableProducts(productIds);
        if (availableProductIds.length === 0) {
            const response = {
                products: availableProductIds,
                reDirectHome: true,
                message: "THESE ITEMS ARE NOT AVAILABLE RIGHT NOW",
            };
            return { code: 200, data: response };
        }
        else {
            const unavailableProducts = prevProducts.filter((product) => !availableProductIds.find((item) => item.id === product.productId));
            if (availableProductIds.length < productIds.length &&
                !ignoreInvalidItems) {
                return {
                    code: 200,
                    data: {
                        products: unavailableProducts,
                        message: "SOME PRODUCTS ARE NOT AVAILABLE. DO YOU WISH TO CONTINUE?",
                    },
                };
            }
            order = order.filter((product) => availableProductIds.find((item) => item.id === product.productId));
        }
        const cart = await this.orderRepository.getCart(userId);
        if (!cart)
            return {
                error: "NO CART WITH USER ID",
                errors: null,
                code: common_1.HttpStatus.NOT_FOUND,
            };
        if (cart.items.length !== 0) {
            if (!overWriteCart)
                return {
                    code: 200,
                    data: { message: "YOUR ITEMS IN THE CART WILL BE REPLACED. DO YOU WANT TO CONTINUE?" },
                };
            const deleteCart = await this.orderRepository.clearCart(userId);
            if (!deleteCart)
                return {
                    error: "CANNOT CLEAR THE EXISTING ITEMS IN YOUR CART",
                    errors: null,
                    code: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
                };
        }
        const addCart = await this.orderRepository.populateItemsInCart(userId, order);
        const responseItems = prevProducts.filter((item) => order.find((product) => product.productId === item.productId));
        if (addCart)
            return { code: 200, data: { products: responseItems } };
        return {
            error: "CANNOT ADD ITEMS TO THE CART",
            errors: null,
            code: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
        };
    }
    async getOrderListByUserId(userId, sortObj) {
        const orderList = await this.orderRepository.getOrderListByUserId(userId, sortObj);
        if (orderList) {
            const orderInfo = orderList.map((e) => {
                delete e.userId;
                return e;
            });
            const response = {
                userId,
                orderInfo,
            };
            return (0, response_1.successResponse)(order_1.OrderListResponseEntity, response);
        }
        return (0, response_1.errorResponse)('No order found', null, common_1.HttpStatus.BAD_REQUEST);
    }
    async getOrderByOrderId(orderId) {
        const orderInfo = await this.orderRepository.findOrder({ orderId });
        if (orderInfo) {
            const response = orderInfo;
            return (0, response_1.successResponse)(order_1.OrderEntity, response);
        }
        return (0, response_1.errorResponse)('No order found', null, common_1.HttpStatus.BAD_REQUEST);
    }
};
OrderCustomerService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [repositories_1.OrderRepository])
], OrderCustomerService);
exports.OrderCustomerService = OrderCustomerService;
//# sourceMappingURL=customer.service.js.map