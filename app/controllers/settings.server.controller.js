'use strict';

var settingsService = require('../services/settings.server.service'),
    nodemailer = require('nodemailer'),
    _ = require('lodash');

exports.createSettings = function(req, res) {
    settingsService.createSettings(req)
        .then(function(settings) {
            return res.status(200).send(settings);
        })
        .catch(function(error) {
            return res.status(500).send(error);
        })
        .done();
};

exports. getSettings = function(req, res) {
    settingsService.getSettings(req)
        .then(function(settings) {
            return res.status(200).send(settings);
        })
        .catch(function(error) {
            return res.status(500).send(error);
        })
        .done();
};

exports.updateSettings = function(req, res) {
    settingsService.updateSettings(req)
        .then(function(settings) {
            return res.status(200).send({msg:'Successfully update'});
        })
        .catch(function(error) {
            return res.status(500).send(error);
        })
        .done();
};

exports. getEmailSettings = function(req, res) {
    settingsService.getSettings(req)
        .then(function(settings) {
            return res.status(200).send(settings);
        })
        .catch(function(error) {
            return res.status(500).send(error);
        })
        .done();
};

var emailSend = function(emailSettings, recipientEmail, subject, htmlBody, callback){

    var smtpTransport = nodemailer.createTransport('smtps://'+emailSettings.user+'%40gmail.com:'+emailSettings.password+'@smtp.gmail.com');

    var mailOptions = {
        from: emailSettings.emailDisplayName +'-<'+ emailSettings.emailAddress +'>',
        to: recipientEmail,
        subject: subject + ' ✔',
        html: htmlBody
    };

    smtpTransport.sendMail(mailOptions, function(error, response){
        if(error){
            callback(false);
        }else{
            callback(true);
        }
    });
};

var getDefaultEmailInfo = function(callback) {
    var emailCount = 0;
    var defaultEmailInfo = null;
    settingsService.getSettings()
        .then(function(settings) {
            _.forEach(settings.emails, function(email) {
                emailCount+=1;
                if(email.isDefault) {
                    defaultEmailInfo = email;
                }
            });
            if(emailCount === settings.emails.length) {
                callback(defaultEmailInfo);
            }
        })
        .catch(function(error) {
            callback(defaultEmailInfo);
        })
        .done();
};

exports.getDefaultEmailSettings = function(callback) {
    getDefaultEmailInfo(function(defaultEmailInfo) {
       if(defaultEmailInfo) {
           callback(defaultEmailInfo);
       }
        else {
           callback(null);
       }
    });
};

exports. testEmailSettingsBySendEmail = function(req, res) {
    getDefaultEmailInfo(function(defaultEmailInfo) {
        if(defaultEmailInfo) {
            emailSend(defaultEmailInfo, req.body.sendTo, 'Test email setting','<h2>BS-Commerce email settings is perfect </h2>', function(sent) {
               if(sent) {
                   return res.status(200).send({msg: 'Successfully send your mail'});
               }
                return res.status(500).send({msg: 'Not send your mail. Please check your settings'});
            });
        }

    });
};
