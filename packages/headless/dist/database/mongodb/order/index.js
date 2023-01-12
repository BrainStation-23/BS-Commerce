"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderDatabase = void 0;
const order_1 = require("../../../entity/order");
const product_model_1 = require("../product/product.model");
const order_model_1 = require("./order.model");
const cart_model_1 = require("../cart/cart.model");
class OrderDatabase {
    async populateItemsInCart(userId, products) {
        let addItems;
        try {
            addItems = await cart_model_1.CartModel.findOneAndUpdate({ userId }, { $set: { items: products } }, { new: true }).lean();
        }
        catch (error) {
            console.log(error);
            return null;
        }
        return addItems;
    }
    async getCart(userId) {
        return await cart_model_1.CartModel.findOne({ userId }).select('items -_id').lean();
    }
    async createOrder(userId, body) {
        return await order_model_1.OrderModel.create(Object.assign({ userId }, body));
    }
    async getAvailableProducts(productIds) {
        return await product_model_1.ProductModel.find({
            id: { $in: productIds },
            'info.published': { $eq: true, $exists: true },
        }).select('id -_id');
    }
    async clearCart(userId) {
        return cart_model_1.CartModel.findOneAndUpdate({ userId }, { $set: { items: [] } }, { new: true })
            .select('-_id')
            .lean()
            .exec();
    }
    async addPhotoDetails(products) {
        let newProductList = [];
        newProductList = await Promise.all(products.map(async (product) => {
            const photoDetails = await product_model_1.ProductModel.findOne({
                id: product.productId,
            }).lean();
            return Object.assign(Object.assign({}, product), { photos: photoDetails.photos });
        }));
        return newProductList;
    }
    async getOrderListByUserId(userId, sortObj) {
        const { sortField, sortType } = sortObj;
        let sortIndex = -1;
        const sort = {};
        if (sortField && sortType) {
            if (sortType === 'asc')
                sortIndex = 1;
            sort[sortField] = sortIndex;
        }
        else {
            sort['orderedDate'] = sortIndex;
        }
        return await order_model_1.OrderModel.find({ userId }).sort(sort);
    }
    async findOrder(query) {
        return await order_model_1.OrderModel.findOne(query).lean();
    }
    async getOrderStatistics() {
        try {
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            const thisWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - today.getDay());
            const thisMonth = new Date(today.getFullYear(), today.getMonth(), 1);
            const thisYear = new Date(today.getFullYear(), 0, 1);
            const orderStat = await order_model_1.OrderModel.aggregate([
                {
                    $group: {
                        _id: '$orderStatus',
                        todayTotal: {
                            $sum: {
                                $cond: [{ $gte: ['$orderedDate', today] }, '$totalCost', 0],
                            },
                        },
                        weekTotal: {
                            $sum: {
                                $cond: [{ $gte: ['$orderedDate', thisWeek] }, '$totalCost', 0],
                            },
                        },
                        monthTotal: {
                            $sum: {
                                $cond: [{ $gte: ['$orderedDate', thisMonth] }, '$totalCost', 0],
                            },
                        },
                        yearTotal: {
                            $sum: {
                                $cond: [{ $gte: ['$orderedDate', thisYear] }, '$totalCost', 0],
                            },
                        },
                        allTimeTotal: { $sum: '$totalCost' },
                    },
                },
            ]).exec();
            if (orderStat) {
                return orderStat[0];
            }
        }
        catch (err) {
            console.log(err);
            return null;
        }
    }
    async getIncompleteStatistics() {
        try {
            const orderStat = await order_model_1.OrderModel.aggregate([
                {
                    $group: {
                        _id: null,
                        orderPendingTotal: {
                            $sum: {
                                $cond: [
                                    { $eq: ['$orderStatus', order_1.OrderStatusEnum.Pending] },
                                    '$totalCost',
                                    0,
                                ],
                            },
                        },
                        orderPendingCount: {
                            $sum: {
                                $cond: [
                                    { $eq: ['$orderStatus', order_1.OrderStatusEnum.Pending] },
                                    1,
                                    0,
                                ],
                            },
                        },
                        paymentPendingTotal: {
                            $sum: {
                                $cond: [
                                    { $eq: ['$paymentStatus', order_1.OrderStatusEnum.Pending] },
                                    '$totalCost',
                                    0,
                                ],
                            },
                        },
                        paymentPendingCount: {
                            $sum: {
                                $cond: [
                                    { $eq: ['$paymentStatus', order_1.OrderStatusEnum.Pending] },
                                    1,
                                    0,
                                ],
                            },
                        },
                        shippingPendingTotal: {
                            $sum: {
                                $cond: [
                                    {
                                        $eq: ['$shippingStatus', order_1.ShippingStatusEnum.NotYetShipped],
                                    },
                                    '$totalCost',
                                    0,
                                ],
                            },
                        },
                        shippingPendingCount: {
                            $sum: {
                                $cond: [
                                    {
                                        $eq: ['$shippingStatus', order_1.ShippingStatusEnum.NotYetShipped],
                                    },
                                    1,
                                    0,
                                ],
                            },
                        },
                    },
                },
            ]).exec();
            if (orderStat) {
                return orderStat[0];
            }
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }
    async changeStatus(body) {
        try {
            const { orderId, statusType, statusValue } = body;
            let update = {};
            if (statusType === order_1.StatusTypeDto.orderStatusEnums) {
                update = { orderStatus: statusValue };
            }
            else if (statusType === order_1.StatusTypeDto.paymentStatusEnums) {
                update = { paymentStatus: statusValue };
            }
            else if (statusType === order_1.StatusTypeDto.shippingStatusEnums) {
                update = { shippingStatus: statusValue };
            }
            return await order_model_1.OrderModel.findOneAndUpdate({ orderId }, { $set: update }, { new: true }).lean();
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }
    async getOrderList(query, skip, limit) {
        const { shippingStatus, orderStatus, paymentStatus, startDate, endDate } = query;
        const sort = {
            orderedDate: -1
        };
        const queryParams = Object.assign(Object.assign(Object.assign({}, (shippingStatus && { shippingStatus })), (orderStatus && { orderStatus })), (paymentStatus && { paymentStatus }));
        if (startDate || endDate) {
            queryParams['orderedDate'] = Object.assign(Object.assign({}, (startDate && { $gte: new Date(startDate) })), (endDate && { $lte: new Date(endDate) }));
        }
        return await order_model_1.OrderModel.find(queryParams).skip(skip).limit(limit).sort(sort).lean();
    }
}
exports.OrderDatabase = OrderDatabase;
//# sourceMappingURL=index.js.map