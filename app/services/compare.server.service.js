'use strict';

var mongoose = require('mongoose'),
    Compare = mongoose.model('Compare'),
    _ = require('lodash'),
    Q = require('q'),
    config = require('../../config/config');

exports.deleteCompareById = function (compareId) {
    var deferred = Q.defer();
    Compare.findByIdAndRemove(compareId, function (err, compare) {
        if (err) {
            return deferred.reject(err);
        }
        return deferred.resolve(compare);
    });
    return deferred.promise;
};

exports.deleteCompareByUserId = function (userId) {
    var deferred = Q.defer();
    Compare.findOneAndRemove({user: userId}, function (err, compare) {
        if (err) {
            return deferred.reject(err);
        }
        return deferred.resolve({msg: 'success'});
    });
    return deferred.promise;
};

var isExistCompare = function (userId, callback) {
    Compare.findOne({user: userId}, function (error, compare) {
        if (error || !compare) {
            return callback(false);
        }
        return callback(compare);
    });
};

var createCompare = function (userId, items, callback) {
    var newCompare = new Compare({user: userId, items: items});
    newCompare.save(function (error) {
        if (error) {
            return callback(false);
        }
        return callback(true);
    });
};

var isExistItem = function (userId, productId, callback) {
    Compare.findOne({user: userId, 'items.product': productId}, function (error, compare) {
        if (error || !compare) {
            return callback(false);
        }
        return callback(true);
    });
};

var addItem = function (userId, item, callback) {
    Compare.findOneAndUpdate({user: userId}, {$push: {items: item}}, function (error) {
        if (error) {
            return callback(false);
        }
        return callback(true);
    });
};

exports.addToCompare = function (userId, item) {
    var deferred = Q.defer();
    isExistCompare(userId, function (existCompare) {
        if (existCompare) {
            isExistItem(userId, item.product, function (exitItem) {
                if (exitItem) {
                    return deferred.resolve({msg: 'success'});
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
            createCompare(userId, [item], function (created) {
                if (created) {
                    return deferred.resolve({msg: 'success'});
                }
                return deferred.reject({msg: 'failed'});
            });
        }
    });

    return deferred.promise;
};

exports.getCompare = function (userId) {
    var deferred = Q.defer();

    Compare.findOne({user: userId})
        .populate('items.product', 'info photos')
        .exec(function (error, compare) {
            if (error) {
                return deferred.reject({msg: 'empty'});
            }
            if (!compare) {
                return deferred.resolve({});
            }
            return deferred.resolve(compare);
        });

    return deferred.promise;
};

exports.getCompareById = function (compareId) {
    var deferred = Q.defer();

    Compare.findOne({_id: compareId})
        .populate('items.product', 'info photos')
        .exec(function (error, compare) {
            if (error) {
                return deferred.reject({msg: 'empty'});
            }
            if (!compare) {
                return deferred.resolve({});
            }
            return deferred.resolve(compare);
        });

    return deferred.promise;
};

exports.deleteCompareItem = function (userId, item) {
    var deferred = Q.defer();

    Compare.findOneAndUpdate({user: userId}, {$pull: {items: {product: item.product}}}, {new: true})
        .populate('items.product', 'info photos')
        .exec(function (error, compare) {
            if (error) {
                return deferred.reject({msg: 'failed'});
            }
            return deferred.resolve(compare);
        });

    return deferred.promise;
};

exports.deleteAllCompareItems = function (userId) {
    var deferred = Q.defer();

    Compare.findOneAndUpdate({user: userId}, {$set: {items: []}}, {new: true})
        .exec(function (error, compare) {
            if (error) {
                return deferred.reject({msg: 'failed'});
            }
            return deferred.resolve(compare);
        });

    return deferred.promise;
};
