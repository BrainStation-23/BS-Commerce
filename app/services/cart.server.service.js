'use strict';

var mongoose = require('mongoose'),
    Cart = mongoose.model('Cart'),
    _ = require('lodash'),
    Q = require('q'),
    config = require('../../config/config');

exports.deleteCartById = function (cartId) {
    var deferred = Q.defer();
    Cart.findByIdAndRemove(cartId, function (err, doc) {
        if (err) {
            return deferred.reject(err);
        }
        return deferred.resolve(doc);
    });
    return deferred.promise;
};

exports.deleteCartByUserId = function (userId) {
    var deferred = Q.defer();
    Cart.findOneAndRemove({user:userId}, function (err, doc) {
        if (err) {
            return deferred.reject(err);
        }
        return deferred.resolve({msg: 'success'});
    });
    return deferred.promise;
};

/*------------------new-------------------------*/

var isExistCart = function (userId, callback) {
    Cart.findOne({user: userId}, function (error, cart) {
        if (error || !cart) {
            return callback(false);
        }
        return callback(cart);
    });
};

var createCart = function (userId, items, callback) {
    var newCart = new Cart({user: userId, items: items});
    newCart.save(function (error) {
        if (error) {
            return callback(false);
        }
        return callback(true);
    });
};

var isExistItem = function (userId, productId, callback) {
    Cart.findOne({user: userId, 'items.product': productId}, function (error, cart) {
        if (error || !cart) {
            return callback(false);
        }
        return callback(true);
    });
};

var addItem = function (userId, item, callback) {
    Cart.findOneAndUpdate({user: userId}, {$push: {items: item}}, function (error) {
        if (error) {
            return callback(false);
        }
        return callback(true);
    });
};

var incrementItem = function (userId, item, callback) {
    Cart.findOneAndUpdate({
        user: userId,
        'items.product': item.product
    }, {$inc: {'items.$.quantity': item.quantity}}, function (error) {
        if (error) {
            return callback(false);
        }
        return callback(true);
    });
};

var replaceCartAllItems = function (userId, items, callback) {
    Cart.findOneAndUpdate({user: userId}, {$set: {'items': items}}, function (error) {
        if (error) {
            return callback(false);
        }
        return callback(true);
    });
};

exports.addToCart = function (userId, item) {
    var deferred = Q.defer();
    isExistCart(userId, function (existCart) {
        if (existCart) {
            isExistItem(userId, item.product, function (exitItem) {
                if (exitItem) {
                    incrementItem(userId, item, function (updated) {
                        if (updated) {
                            return deferred.resolve({msg: 'success'});
                        }
                        return deferred.reject({msg: 'failed'});
                    });
                } else {
                    addItem(userId, item, function (added) {
                        if (added) {
                            return deferred.resolve({msg: 'success'});
                        }
                        return deferred.reject({msg: 'failed'});
                    });
                }
            });
        } else {
            createCart(userId, [item], function (created) {
                if (created) {
                    return deferred.resolve({msg: 'success'});
                }
                return deferred.reject({msg: 'failed'});
            });
        }
    });

    return deferred.promise;
};

exports.getCart = function (userId) {
    var deferred = Q.defer();

    Cart.findOne({user: userId})
        .populate('items.product', 'info photos')
        .exec(function (error, cart) {
            if (error) {
                return deferred.reject({msg: 'empty'});
            }
            if (!cart) {
                return deferred.resolve({});
            }
            return deferred.resolve(cart);
        });

    return deferred.promise;
};

exports.updateCartItem = function (userId, item) {
    var deferred = Q.defer();

    Cart.findOneAndUpdate({
            user: userId,
            'items.product': item.product
        }, {$set: {'items.$.quantity': item.quantity}}, {new: true})
        .populate('items.product', 'info photos')
        .exec(function (error, cart) {
            if (error) {
                return deferred.reject({msg: 'failed'});
            }
            return deferred.resolve(cart);
        });

    return deferred.promise;
};

exports.deleteCartItem = function (userId, item) {
    var deferred = Q.defer();

    Cart.findOneAndUpdate({user: userId}, {$pull: {items: {product: item.product}}}, {new: true})
        .populate('items.product', 'info photos')
        .exec(function (error, cart) {
            if (error) {
                return deferred.reject({msg: 'failed'});
            }
            return deferred.resolve(cart);
        });

    return deferred.promise;
};

exports.deleteAllCartItems = function (userId) {
    var deferred = Q.defer();

    Cart.findOneAndUpdate({user: userId}, {$set: {items: []}}, {new: true})
        .exec(function (error, cart) {
            if (error) {
                return deferred.reject({msg: 'failed'});
            }
            return deferred.resolve(cart);
        });

    return deferred.promise;
};

exports.getCartWithoutPopulate = function (userId) {
    var deferred = Q.defer();

    Cart.findOne({user: userId})
        .exec(function (error, cart) {
            if (error) {
                return deferred.reject({msg: 'empty'});
            }
            if (!cart) {
                return deferred.resolve({});
            }
            return deferred.resolve(cart);
        });

    return deferred.promise;
};


exports.mergeItemsForExistingUser = function (userId, items) {
    var deferred = Q.defer();

    isExistCart(userId, function (existCart) {
        if (!existCart) {
            createCart(userId, items, function (created) {
                if (created) {
                    return deferred.resolve({msg: 'success'});
                }
                return deferred.reject({msg: 'failed'});
            });
        } else {

            if (!existCart.items.length) {
                replaceCartAllItems(userId, items, function (updated) {
                    if (updated) {
                        return deferred.resolve({msg: 'success'});
                    }
                    return deferred.reject({msg: 'failed'});
                });
            } else {
                var existingItems = existCart.items;
                var newItems = items;

                var mergeItems = _.map(existingItems, function (item) {

                    var index = _.findIndex(newItems, {product: item.product.toString()});

                    if (index !== -1) {
                        item.quantity += newItems[index].quantity;
                        newItems.splice(index, 1);
                    }
                    return item;
                });
                mergeItems = _.concat(mergeItems, newItems);

                replaceCartAllItems(userId, mergeItems, function (updated) {
                    if (updated) {
                        return deferred.resolve({msg: 'success'});
                    }
                    return deferred.reject({msg: 'failed'});
                });
            }
        }
    });
    return deferred.promise;
};

exports.getStripePublishableKey = function () {
    var publishableKey = {publishableKey: config.stripe.publishableKey};

    return publishableKey;
};
