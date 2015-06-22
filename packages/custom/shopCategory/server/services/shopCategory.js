'use strict';

var mean = require('meanio'),
    mongoose = require('mongoose'),
    Category = mongoose.model('Category'),
    _ = require('lodash'),
    Q = require('q');


mean.loadConfig();

var includeSubCategories = function (category, list) {
    var subCategories = _.where(list, function (item) {
        return item.parent && (item.parent._id.equals(category._id));
    });

    subCategories = _.map(subCategories, function (item) {
        return {
            _id: item._id,
            name: item.name,
            slug: item.slug,
            subCategories: []
        };
    });

    category.subCategories = category.subCategories.concat(subCategories);
};

var getSlug = function (name) {
    var slug = name.replace(/\s+/g, '-');
    return slug.toLowerCase();
};

exports.list = function () {
    var deferred = Q.defer();

    Category.find({})
        .populate('parent')
        .select('name slug parent ancestors')
        .lean()
        .exec(function (error, categories) {
            if (error) {
                return deferred.reject(error);
            }


            var list = _.map(_.where(categories, {parent: null}), function (item) {
                return {
                    /*console.log(req.body.cat);
                     console.log(req.files);*/
                    _id: item._id,
                    name: item.name,
                    slug: item.slug,
                    subCategories: []
                };
            });
            console.log('after map: '+ list.length);
            _.forEach(list, function (item) {
                includeSubCategories(item, categories);
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
            console.log(error);
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
            console.log(err);
            return deferred.reject(err);
        }
        else {
            console.log('removed successfully');
            return deferred.resolve();
        }
    });
    return deferred.promise;
};


