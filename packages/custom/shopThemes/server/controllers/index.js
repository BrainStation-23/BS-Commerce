'use strict';
require('../models/themeModel');

var mean = require('meanio'),
    mongoose = require('mongoose'),
    Theme = mongoose.model('Theme');

exports.render = function(req, res) {

    var modules = [];
    // Preparing angular modules list with dependencies
    for (var name in mean.modules) {
        modules.push({
            name: name,
            module: 'mean.' + name,
            angularDependencies: mean.modules[name].angularDependencies
        });
    }

    function isAdmin() {
        return req.user && req.user.roles.indexOf('admin') !== -1;
    }

    // Send some basic starting info to the view
    res.render('index', {
        user: req.user ? {
            name: req.user.name,
            _id: req.user._id,
            username: req.user.username,
            profile: req.user.profile,
            roles: req.user.roles
        } : {},
        modules: modules,
        isAdmin: isAdmin,
        adminEnabled: isAdmin() && mean.moduleEnabled('mean-admin')
    });
};

exports.getThemes = function(req, res) {
    Theme.find({}, function(error, themes) {
        if(error) {
            return res.status(400).send({msg: 'Error occurred during getting themes'});
        }

        return res.status(200).send(themes);
    });
};

exports.createTheme = function(req, res) {
    var newTheme = new Theme(req.body);

    newTheme.save(function(error, theme) {
        if(error) {
            return res.status(400).send({msg: 'Error occurred during create theme due to invalid parameter'});
        }

        return res.status(200).send('Theme created successfully');
    });
};

exports.getThemeById = function(req, res) {
    Theme.findOne({_id: req.params.themeId}, function(error, theme) {
        if(error) {
            return res.status(400).send({msg: 'Error occurred during getting themes'});
        }

        return res.status(200).send(theme);
    });
};

exports.updateTheme = function(req, res) {
    Theme.findOneAndUpdate({_id: req.body._id}, req.body, function(error, theme) {
        if(error) {
           return res.status(400).send({msg: 'Error occurred during updating theme due to invalid information'});
        }
        return res.status(200).send({msg: 'Successfully updated'});
    });
};

exports.deleteTheme = function(req, res) {
    Theme.findOneAndRemove({_id: req.params.themeId}, function(error, theme) {
        if(error) {
            return res.status(400).send({msg: 'Error occurred during deleting theme due to invalid information'});
        }
        return res.status(200).send({msg: 'Successfully deleted'});
    });
};

exports.getDefaultTheme = function(req, res) {
    Theme.findOne({isDefault: true}, function(error, theme) {
        if(error) {
            return res.status(400).send({msg: 'Error occurred during getting theme'});
        }

        return res.status(200).send({name: theme.name, displayName: theme.displayName});
    });
};
