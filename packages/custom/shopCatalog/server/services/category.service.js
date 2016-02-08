'use strict';

var mean = require('meanio'),
    mongoose = require('mongoose'),
    Category = mongoose.model('Category'),
    _ = require('lodash'),
    Q = require('q');


mean.loadConfig();

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

            var list = _.map(_.where(categories, {parent: null}), function (item) {
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

exports.addCategory = function (cat, imageId) {

    var deferred = Q.defer();

    var newCategory = new Category({
        name: cat.name,
        slug: getSlug(cat.name),
        parent: cat.parent,
        description: cat.description,
        imageId: imageId,
        showOnHomePage: cat.showOnHomePage,
        includeInTopMenu: cat.includeInTopMenu,
        allowToSelectPageSize: cat.allowToSelectPageSize,
        published: cat.published,
        displayOrder: cat.displayOrder,
        ancestors: []
    });

    newCategory.save(function (error) {
        if (error) {
            deferred.reject();
        } else {
            deferred.resolve();
        }
    });

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
    Category.findByIdAndUpdate(req.body._id, req.body, function(error, category) {
        if(error) {
            return deferred.reject(error);
        }
        return deferred.resolve(category);
    });
    return deferred.promise;
};


