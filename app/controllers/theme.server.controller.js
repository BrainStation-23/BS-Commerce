'use strict';

var themeService = require('../services/theme.server.service');

exports.getThemes = function(req, res) {
    themeService.getThemes(req)
        .then(function(themes){
            return res.status(200).json(themes);
        })
        .catch(function(error){
            return res.status(400).json({msg: 'Error occurred during getting themes'});
        })
        .done();
};

exports.createTheme = function(req, res) {
    themeService.createTheme(req)
        .then(function(theme){
            return res.status(200).json('Theme created successfully');
        })
        .catch(function(error){
            return res.status(400).json({msg: 'Error occurred during create theme due to invalid parameter'});
        })
        .done();
};

exports.getThemeById = function(req, res) {
    themeService.getThemeById(req)
        .then(function(theme){
            return res.status(200).json(theme);
        })
        .catch(function(error){
            return res.status(400).json({msg: 'Error occurred during getting themes'});
        })
        .done();
};

exports.updateTheme = function(req, res) {
    themeService.updateTheme(req)
        .then(function(theme){
            return res.status(200).json('Successfully updated');
        })
        .catch(function(error){
            return res.status(400).json({msg: 'Error occurred during updating theme due to invalid information'});
        })
        .done();
};

exports.deleteTheme = function(req, res) {
    themeService.deleteTheme(req)
        .then(function(theme){
            return res.status(200).json('Successfully deleted');
        })
        .catch(function(error){
            return res.status(400).json({msg: 'Error occurred during deleting theme due to invalid information'});
        })
        .done();
};

exports.getDefaultTheme = function(req, res) {
    themeService.deleteTheme(req)
        .then(function(theme){
            return res.status(200).json(theme);
        })
        .catch(function(error){
            return res.status(400).json({msg: 'Error occurred during getting theme'});
        })
        .done();
};
