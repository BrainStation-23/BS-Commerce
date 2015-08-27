'use strict';

var mean = require('meanio');
var fs = require('fs');

exports.render = function (req, res) {
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

    //function getAdminScripts() {

        function walk(dir, done) {
            var results = [];
            fs.readdir(dir, function(err, list) {
                if (err) return done(err);
                var i = 0;
                (function next() {
                    var file = list[i];
                    i = i+1;
                    if (!file) return done(null, results);
                    file = dir + '/' + file;
                    fs.stat(file, function(err, stat) {
                        if (stat && stat.isDirectory()) {
                            walk(file, function(err, res) {
                                results = results.concat(res);
                                next();
                            });
                        } else {
                            results.push(file);
                            next();
                        }
                    });
                })();
            });
        }

        walk('./packages/custom/shopAdmin/public/assets', function(err, results) {
            if (err) throw err;
            var javascriptFiles = [];
            for(var i in results){
                var extension = results[i].split('.').pop();
                if(extension === 'js'){
                    var linkUrl = '/shopAdmin/' + results[i].split('./packages/custom/shopAdmin/public/').pop();
                    javascriptFiles.push(linkUrl);
                }
            }

            res.render('index-admin', {
                user: req.user ? {
                    name: req.user.name,
                    _id: req.user._id,
                    username: req.user.username,
                    profile: req.user.profile,
                    roles: req.user.roles
                } : {},
                adminScripts: javascriptFiles,
                modules: modules,
                isAdmin: isAdmin,
                adminEnabled: isAdmin() && mean.moduleEnabled('mean-admin')
            });
            //return javascriptFiles;
        });
    //}

    // Send some basic starting info to the view

};
