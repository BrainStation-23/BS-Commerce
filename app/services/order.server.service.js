'use strict';
require('../models/order.server.model');
var mongoose = require('mongoose'),
    Order = mongoose.model('Orders'),
    Q = require('q'),
    config = require('../../config/config'),
    stripe = require('stripe')(config.stripe.secretKey),
    paypal = require('paypal-rest-sdk');


exports.createOrder = function(req) {
    var deferred = Q.defer();
    var newOrder = new Order(req.body);
    var amount = req.body.totalCost || 0;
    var currency = req.body.currency || 'USD';

    if(req.body.stripeToken) {

        stripe.customers.create({
            source: req.body.stripeToken,
            description: 'user for '+req.user.email
        }).then(function (customer) {
            return stripe.charges.create({
                amount: amount * 100,
                currency: currency,
                customer: customer.id
            });
        }).then(function (charge) {

            newOrder.paymentStatus ='paid';
            newOrder.stripeCustomerId = charge.customer;
            newOrder.stripeChargeId = charge.id;

            newOrder.save(function(error, order) {
                if(error) {
                    return deferred.reject(error);
                }
                return deferred.resolve(order);
            });
        });
    } else if(req.body.stripeCustomerId) {

        stripe.charges.create({
            amount: amount * 100,
            currency: currency,
            customer: req.body.stripeCustomerId // Previously stored, then retrieved
        }).then(function(charge) {

            newOrder.paymentStatus ='paid';
            newOrder.stripeCustomerId = charge.customer;
            newOrder.stripeChargeId = charge.id;

            newOrder.save(function(error, order) {
                if(error) {
                    return deferred.reject(error);
                }
                return deferred.resolve(order);
            });
        });
    } else if(req.body.paymentMethod === 'paypal') {

        paypal.configure(config.paypal.clientInfo);

        var payment = {
            'intent': 'sale',
            'payer': {
                'payment_method': 'paypal'
            },
            'redirect_urls': {
                'return_url': config.paypal.successUrl + '/' + newOrder._id,
                'cancel_url': config.paypal.cancelUrl + '/' + newOrder._id
            },
            'transactions': [{
                'amount': {
                    'total':parseInt(amount),
                    'currency':  currency,
                    'details': {
                        'subtotal': parseInt(amount)
                    }
                },
                'description': 'Payment for order ID= '+ newOrder._id
            }]
        };

        paypal.payment.create(payment, function (error, payment) {
            if (error) {
                return deferred.reject(error);
            } else {
                if(payment.payer.payment_method === 'paypal') {

                    newOrder.paypalPaymentId = payment.id;
                    var redirectUrl;

                    for(var i=0; i < payment.links.length; i++) {
                        var link = payment.links[i];
                        if (link.method === 'REDIRECT') {
                            redirectUrl = link.href;
                        }
                    }

                    newOrder.save(function(orderError, order) {
                        if(orderError) {
                            return deferred.reject(orderError);
                        }
                        order.paypalRedirectUrl = redirectUrl;
                        return deferred.resolve(order);
                    });
                }
            }
        });

    } else {
        newOrder.save(function(error, order) {
            if(error) {
                return deferred.reject(error);
            }
            return deferred.resolve(order);
        });
    }


    return deferred.promise;
};

exports.getOrders = function(searchQuery, skipSize, limitSize) {
    var deferred = Q.defer();
    skipSize = parseInt(skipSize);
    limitSize = parseInt(limitSize);
    Order.find(searchQuery).skip(skipSize).limit(limitSize).populate('user', 'email firstName lastName')
        .exec(function(error, orders) {
            if(error) {
                return deferred.reject(error);
            }
            return deferred.resolve(orders);
        });
    return deferred.promise;
};

exports.getOrdersNumber = function(searchQuery, callback) {
    Order.find(searchQuery).count()
        .exec(function(error, total) {
            if(error) {
                callback(0);
            }
            callback(total);
        });
};

exports.getOrdersByCondition = function(condition, res) {
    var deferred = Q.defer();
    Order.find(condition)
        .exec(function(error, orders) {
            if(error) {
                return deferred.reject(error);
            }
            return deferred.resolve(orders);
        });
    return deferred.promise;
};

exports.getOrderById = function(req, res) {
    var deferred = Q.defer();
    Order.findOne({_id: req.params.orderId}).populate('user', 'firstName lastName email')
        .exec(function(error, order) {
            if(error) {
                return deferred.reject(error);
            }

            var options = { path: 'products.productId', select: 'photos' };
            Order.populate(order, options, function (err, nOrder) {
                if(err) {
                    return deferred.reject(err);
                }
                return deferred.resolve(nOrder);
            });
        });
    return deferred.promise;
};

exports.deleteOrderById = function(req, res) {
    var deferred = Q.defer();

    Order.findByIdAndRemove(req.query.orderId, function(error, doc) {
        if(error) {
            return deferred.reject(error);
        }
        return deferred.promise;
    });
    return deferred.promise;
};

exports.updateOrder = function(req) {
    var deferred = Q.defer();

    Order.findByIdAndUpdate(req.body._id, req.body, function(error, order) {
        if(error) {
            return deferred.reject(error);
        }
        return deferred.resolve(order);
    });
    return deferred.promise;
};

exports.updateOrderForPaypalPayment = function(req) {
    var deferred = Q.defer();

    paypal.configure(config.paypal.clientInfo);

    var executePaymentDetails = { 'payer_id': req.params.payerId };

    paypal.payment.execute(req.params.paymentId, executePaymentDetails, function(error, payment){
        if(error){
            return deferred.reject(error);
        } else {
            Order.findOneAndUpdate({_id:req.params.orderId, paypalPaymentId: req.params.paymentId}, {$set:{paymentStatus:'paid'}}, function(error, order) {
                if(error) {
                    return deferred.reject(error);
                }
                return deferred.resolve(order);
            });
        }
    });

    return deferred.promise;
};

exports.getOrdersStatistics = function(req) {
    var deferred = Q.defer();

    var today = new Date();
    today.setHours(0,0,0,0);
    var thisWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - today.getDay());
    var thisMonth = new Date(today.getFullYear(), today.getMonth(), 1);
    var thisYear = new Date(today.getFullYear(), 0, 1);

    Order.aggregate(
        [
            {
                $group : {
                    _id : '$orderStatus',
                    todayTotal: { $sum: {$cond: [ { $gte: [ '$orderedDate', today ] }, '$totalCost', 0 ] } },
                    weekTotal: { $sum: {$cond: [ { $gte: [ '$orderedDate', thisWeek ] }, '$totalCost', 0 ] } },
                    monthTotal: { $sum: {$cond: [ { $gte: [ '$orderedDate', thisMonth ] }, '$totalCost', 0 ] } },
                    yearTotal: { $sum: {$cond: [ { $gte: [ '$orderedDate', thisYear ] }, '$totalCost', 0 ] } },
                    allTimeTotal: { $sum: '$totalCost' }
                }
            }
        ]
    ).exec(function(error, order) {
            if(error) {
                return deferred.reject(error);
            }
            return deferred.resolve(order);
        });

    return deferred.promise;
};

exports.getIncompleteOrdersStatistics = function(req) {
    var deferred = Q.defer();

    Order.aggregate(
        [
            {
                $group : {
                    _id : null,
                    orderPendingTotal: { $sum: {$cond: [ { $eq: [ '$orderStatus', 'pending' ] }, '$totalCost', 0 ] } },
                    orderPendingCount: { $sum: {$cond: [ { $eq: [ '$orderStatus', 'pending' ] }, 1, 0 ] } },
                    paymentPendingTotal: { $sum: {$cond: [ { $eq: [ '$paymentStatus', 'pending' ] }, '$totalCost', 0 ] } },
                    paymentPendingCount: { $sum: {$cond: [ { $eq: [ '$paymentStatus', 'pending' ] }, 1, 0 ] } },
                    shippingPendingTotal: { $sum: {$cond: [ { $eq: [ '$shippingStatus', 'notYetShipped' ] }, '$totalCost', 0 ] } },
                    shippingPendingCount: { $sum: {$cond: [ { $eq: [ '$shippingStatus', 'notYetShipped' ] }, 1, 0 ] } }
                }
            }
        ]
    ).exec(function(error, orderStatus) {
            if(error) {
                return deferred.reject(error);
            }
            return deferred.resolve(orderStatus);
        });

    return deferred.promise;
};

