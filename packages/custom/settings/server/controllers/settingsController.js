'use strict';

var settingsService = require('../services/settingsService');

exports.createSettings = function(req, res) {
    settingsService.createSettings(req)
        .then(function(settings) {
            return res.status(200).send(settings);
        })
        .catch(function(error) {
            return res.status(200).send(error);
        })
        .done();
};

exports. getSettings = function(req, res) {
    settingsService.getSettings(req)
        .then(function(settings) {
            return res.status(200).send(settings);
        })
        .catch(function(error) {
            return res.status(200).send(error);
        })
        .done();
};

exports.updateSettings = function(req, res) {
    settingsService.updateSettings(req)
        .then(function(settings) {
            return res.status(200).send({msg:'Successfully update'});
        })
        .catch(function(error) {
            return res.status(200).send(error);
        })
        .done();
};

exports. getEmailSettings = function(req, res) {
    settingsService.getSettings(req)
        .then(function(settings) {
            return res.status(200).send({_id: settings._id, emails: settings.emails});
        })
        .catch(function(error) {
            return res.status(200).send(error);
        })
        .done();
};