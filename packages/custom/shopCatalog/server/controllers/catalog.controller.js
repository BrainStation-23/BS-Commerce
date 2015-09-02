'use strict';

var service = require('../services/catalog.service');

exports.searchList = function(req, res){
    service.searchList(req)
        .then(function(list){
            return res.status(200).send(list);
        })
        .catch(function(error){
            return res.status(500).send({msg: 'Error occurred while loading products', error: error});
        })
        .done();
};
