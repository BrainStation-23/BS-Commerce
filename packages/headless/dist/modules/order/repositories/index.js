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
exports.OrderRepository = void 0;
const common_1 = require("@nestjs/common");
const crypto_1 = require("crypto");
const order_db_interface_1 = require("./order.db.interface");
let OrderRepository = class OrderRepository {
    constructor(db) {
        this.db = db;
    }
    async createOrder(userId, body) {
        const orderId = await this.generateUniqueId();
        const newBody = Object.assign(Object.assign({}, body), { orderId });
        return await this.db.createOrder(userId, newBody);
    }
    async getAvailableProducts(productIds) {
        return await this.db.getAvailableProducts(productIds);
    }
    async getCart(userId) {
        return await this.db.getCart(userId);
    }
    async populateItemsInCart(userId, items) {
        return await this.db.populateItemsInCart(userId, items);
    }
    async clearCart(userId) {
        return await this.db.clearCart(userId);
    }
    async addPhotoDetails(products) {
        return await this.db.addPhotoDetails(products);
    }
    addCosts(newOrder) {
        let newProductList = [];
        let totalProductsCost = 0;
        newProductList = newOrder.products.map((product) => {
            const productCost = product.price * product.quantity;
            totalProductsCost = totalProductsCost + productCost;
            return Object.assign(Object.assign({}, product), { totalPrice: productCost });
        });
        return Object.assign(Object.assign({}, newOrder), { products: newProductList, productCost: totalProductsCost, totalCost: newOrder.shippingCost + totalProductsCost });
    }
    async generateUniqueId() {
        let orderId = (0, crypto_1.randomInt)(281474976710655).toString();
        const len = orderId.length;
        if (len < 15)
            orderId = orderId.padStart(15, '0');
        const idExists = await this.db.findOrder({ orderId });
        if (!idExists)
            return orderId;
        else
            return this.generateUniqueId();
    }
    async getOrderListByUserId(userId, sortObj) {
        return await this.db.getOrderListByUserId(userId, sortObj);
    }
    async findOrder(query) {
        return await this.db.findOrder(query);
    }
    async getOrderStatistics() {
        return await this.db.getOrderStatistics();
    }
    async getIncompleteStatistics() {
        return await this.db.getIncompleteStatistics();
    }
    async changeStatus(body) {
        return await this.db.changeStatus(body);
    }
    async getOrderList(query, skip, limit) {
        return await this.db.getOrderList(query, skip, limit);
    }
};
OrderRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [order_db_interface_1.IOrderDatabase])
], OrderRepository);
exports.OrderRepository = OrderRepository;
//# sourceMappingURL=index.js.map