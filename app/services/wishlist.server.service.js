'use strict';

var mongoose = require('mongoose'),
    Wishlist = mongoose.model('Wishlist'),
    _ = require('lodash'),
    Q = require('q'),
    config = require('../../config/config');

exports.deleteWishlistById = function (wishlistId) {
    var deferred = Q.defer();
    Wishlist.findByIdAndRemove(wishlistId, function (err, wishlist) {
        if (err) {
            return deferred.reject(err);
        }
        return deferred.resolve(wishlist);
    });
    return deferred.promise;
};

exports.deleteWishlistByUserId = function (userId) {
    var deferred = Q.defer();
    Wishlist.findOneAndRemove({user:userId}, function (err, wishlist) {
        if (err) {
            return deferred.reject(err);
        }
        return deferred.resolve({msg: 'success'});
    });
    return deferred.promise;
};

var isExistWishlist = function (userId, callback) {
    Wishlist.findOne({user: userId}, function (error, wishlist) {
        if (error || !wishlist) {
            return callback(false);
        }
        return callback(wishlist);
    });
};

var createWishlist = function (userId, items, callback) {
    var newWishlist = new Wishlist({user: userId, items: items});
    newWishlist.save(function (error) {
        if (error) {
            return callback(false);
        }
        return callback(true);
    });
};

var isExistItem = function (userId, productId, callback) {
    Wishlist.findOne({user: userId, 'items.product': productId}, function (error, wishlist) {
        if (error || !wishlist) {
            return callback(false);
        }
        return callback(true);
    });
};

var addItem = function (userId, item, callback) {
    Wishlist.findOneAndUpdate({user: userId}, {$push: {items: item}}, function (error) {
        if (error) {
            return callback(false);
        }
        return callback(true);
    });
};

var incrementItem = function (userId, item, callback) {
    Wishlist.findOneAndUpdate({
        user: userId,
        'items.product': item.product
    }, {$inc: {'items.$.quantity': item.quantity}}, function (error) {
        if (error) {
            return callback(false);
        }
        return callback(true);
    });
};

var replaceWishlistAllItems = function (userId, items, callback) {
    Wishlist.findOneAndUpdate({user: userId}, {$set: {'items': items}}, function (error) {
        if (error) {
            return callback(false);
        }
        return callback(true);
    });
};

exports.addToWishlist = function (userId, item) {
    var deferred = Q.defer();
    isExistWishlist(userId, function (existWishlist) {
        if (existWishlist) {
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
            createWishlist(userId, [item], function (created) {
                if (created) {
                    return deferred.resolve({msg: 'success'});
                }
                return deferred.reject({msg: 'failed'});
            });
        }
    });

    return deferred.promise;
};

exports.getWishlist = function (userId) {
    var deferred = Q.defer();

    Wishlist.findOne({user: userId})
        .populate('items.product', 'info photos')
        .exec(function (error, wishlist) {
            if (error) {
                return deferred.reject({msg: 'empty'});
            }
            if (!wishlist) {
                return deferred.resolve({});
            }
            return deferred.resolve(wishlist);
        });

    return deferred.promise;
};

exports.getWishlistById = function (wishlistId) {
    var deferred = Q.defer();

    Wishlist.findOne({_id: wishlistId})
        .populate('items.product', 'info photos')
        .exec(function (error, wishlist) {
            if (error) {
                return deferred.reject({msg: 'empty'});
            }
            if (!wishlist) {
                return deferred.resolve({});
            }
            return deferred.resolve(wishlist);
        });

    return deferred.promise;
};

exports.updateWishlistItem = function (userId, item) {
    var deferred = Q.defer();

    Wishlist.findOneAndUpdate({
            user: userId,
            'items.product': item.product
        }, {$set: {'items.$.quantity': item.quantity}}, {new: true})
        .populate('items.product', 'info photos')
        .exec(function (error, wishlist) {
            if (error) {
                return deferred.reject({msg: 'failed'});
            }
            return deferred.resolve(wishlist);
        });

    return deferred.promise;
};

exports.deleteWishlistItem = function (userId, item) {
    var deferred = Q.defer();

    Wishlist.findOneAndUpdate({user: userId}, {$pull: {items: {product: item.product}}}, {new: true})
        .populate('items.product', 'info photos')
        .exec(function (error, wishlist) {
            if (error) {
                return deferred.reject({msg: 'failed'});
            }
            return deferred.resolve(wishlist);
        });

    return deferred.promise;
};

exports.deleteAllWishlistItems = function (userId) {
    var deferred = Q.defer();

    Wishlist.findOneAndUpdate({user: userId}, {$set: {items: []}}, {new: true})
        .exec(function (error, wishlist) {
            if (error) {
                return deferred.reject({msg: 'failed'});
            }
            return deferred.resolve(wishlist);
        });

    return deferred.promise;
};

exports.getWishlistWithoutPopulate = function (userId) {
    var deferred = Q.defer();

    Wishlist.findOne({user: userId})
        .exec(function (error, wishlist) {
            if (error) {
                return deferred.reject({msg: 'empty'});
            }
            if (!wishlist) {
                return deferred.resolve({});
            }
            return deferred.resolve(wishlist);
        });

    return deferred.promise;
};

exports.deleteGivenItems = function(userId, products) {
    var deferred = Q.defer();
    Wishlist.findOneAndUpdate({user: userId}, {$pull: {items: {product: {$in:products}}}}, {multi: true, new: true})
        .populate('items.product', 'info photos')
        .exec(function (error, wishlist) {
            if (error) {
                return deferred.reject({msg: 'failed'});
            }
            return deferred.resolve(wishlist);
        });

    return deferred.promise;
};
