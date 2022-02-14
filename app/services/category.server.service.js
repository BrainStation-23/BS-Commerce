'use strict';

var  mongoose = require('mongoose'),
    Category = mongoose.model('Category'),
    _ = require('lodash'),
    Q = require('q');


var generateParentSubCategories = function(originalParent, listItems) {

    var generateSubCategories = function(parent) {
        _.forEach(listItems, function(item) {
            if(parent && item.parent && parent._id.toString() === item.parent.toString()) {
                item.subCategories = [];
                parent.subCategories.push(item);
                var lstIndex = parent.subCategories.length-1;
                generateSubCategories(parent.subCategories[lstIndex]);
            }
        });
    };
    generateSubCategories(originalParent);
};

var getSlug = function (name) {
    var slug = name.replace(/\s+/g, '-');
    return slug.toLowerCase();
};

exports.list = function () {
    var deferred = Q.defer();

    Category.find({})
        .select('name slug parent ancestors displayOrder')
        .lean()
        .exec(function (error, categories) {
            if (error) {
                return deferred.reject(error);
            }

            var list = _.map(_.filter(categories, {parent: null}), function (item) {
                item.subCategories = [];
                return item;
            });
            _.forEach(list, function (item) {
                generateParentSubCategories(item, categories);
            });

            deferred.resolve(list);
        });

    return deferred.promise;
};

exports.getById = function (id) {
    var deferred = Q.defer();

    Category.findOne({_id: id})
        .exec(function (err, category) {
            if (err) {
                return deferred.reject(err);
            }
            return deferred.resolve(category);
        });

    return deferred.promise;
};

exports.getBySlug = function (slug) {
    var deferred = Q.defer();

    Category.findOne({slug: slug})
        .exec(function (err, category) {
            if (err) {
                return deferred.reject(err);
            }
            return deferred.resolve(category);
        });

    return deferred.promise;
};

exports.addCategory = function (requestCategory, imageId) {

    var deferred = Q.defer();

    var newCategory = new Category(requestCategory);
    newCategory.slug = getSlug(requestCategory.name);
    newCategory.imageId = imageId;
    if(requestCategory.parent) {
        Category.findOne({_id:requestCategory.parent}, 'name slug ancestors')
            .lean()
            .exec(function(err, parentCategory) {
                var currentAncestors = [{
                    _id: parentCategory._id,
                    name: parentCategory.name,
                    slug: parentCategory.slug
                }];

                if(parentCategory.ancestors.length) {
                    currentAncestors.concat(parentCategory.ancestors);
                }
                newCategory.ancestors = currentAncestors;

                newCategory.save(function (error) {
                    if (error) {
                        deferred.reject(error);
                    } else {
                        deferred.resolve({msg: 'success'});
                    }
                });
            });
    } else {
        newCategory.save(function (error) {
            if (error) {
                deferred.reject(error);
            } else {
                deferred.resolve({msg: 'success'});
            }
        });
    }

    return deferred.promise;

};

exports.deleteById = function(id){
    var deferred = Q.defer();
    Category.findOne({_id: id}).remove().exec(function(err) {
        if (err) {
            return deferred.reject(err);
        }
        else {
            return deferred.resolve();
        }
    });
    return deferred.promise;
};

exports.update = function(req){
    var deferred = Q.defer();

    if(req.body.parent) {
        Category.findOne({_id:req.body.parent}, 'name slug ancestors')
            .lean()
            .exec(function(err, parentCategory) {

                var currentAncestors = [{
                    _id: parentCategory._id,
                    name: parentCategory.name,
                    slug: parentCategory.slug
                }];

                currentAncestors.concat(parentCategory.ancestors);
                req.body.ancestors = currentAncestors;

                Category.findByIdAndUpdate(req.body._id, req.body, function(error, category) {
                    if(error) {
                        return deferred.reject(error);
                    }
                    return deferred.resolve(category);
                });

            });
    } else {
        Category.findByIdAndUpdate(req.body._id, req.body, function(error, category) {
            if(error) {
                return deferred.reject(error);
            }
            return deferred.resolve(category);
        });
    }

    return deferred.promise;
};


