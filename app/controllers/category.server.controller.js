'use strict';

var service = require('../services/category.server.service'),
    mediaService = require('../services/media.server.service');

exports.list = function(req, res){
    service.list()
        .then(function(list){
            return res.status(200).send(list);
        })
        .catch(function(error){
            return res.status(500).send({msg: 'Error occurred while loading categories', error: error});
        })
        .done();
};

exports.getById = function(req, res){
    service.getById(req.params.id)
        .then(function(category){
            return res.status(200).send(category);
        })
        .catch(function(error){
            return res.status(500).json([{msg: 'Internal server error!'}]);
        })
        .done();
};

exports.getBySlug = function(req, res){
    service.getBySlug(req.params.slug)
        .then(function(category){
            return res.status(200).send(category);
        })
        .catch(function(error){
            return res.status(500).json([{msg: 'Internal server error!'}]);
        })
        .done();
};

exports.deleteById = function(req, res){
    service.deleteById(req.params.id)
        .then(function(){
            return res.status(200).json({msg: 'success'});
        })
        .catch(function(error){
            return res.status(500).json({msg: error});
        })
        .done();

};

exports.update = function(req, res) {
    service.update(req)
        .then(function(){
            return res.status(200).json({msg: 'success'});
        })
        .catch(function(error){
            return res.status(500).json(error);
        })
        .done();
};

exports.addCategory = function(req, res) {
    if(req.file){
        mediaService.create(req.file)
            .then(function (file) {
                service.addCategory(req.body.category, file._id)
                    .then(function(category) {
                        return res.status(200).json(category);
                    })
                    .catch(function(error){
                        return res.status(400).json(error);
                    })
                    .done();
            })
            .catch(function (error) {
                service.addCategory(req.body.category)
                    .then(function(category) {
                        return res.status(200).json(category);
                    })
                    .catch(function(error){
                        return res.status(400).json(error);
                    })
                    .done();
            })
            .done();
    }else{
        service.addCategory(req.body.category)
            .then(function(category) {
                return res.status(200).json({msg: 'success'});
            })
            .catch(function(error){
                return res.status(400).json(error);
            })
            .done();
    }
};
