'use strict';

var mean = require('meanio'),
  mongoose = require('mongoose'),
  language = require('../packages/custom/shopCore/server/models/language'),

  Language = mongoose.model('Language');

exports.up = function(next){
  mongoose.connection.collections['languages'].drop();

  var english = new Language({
    name: 'English',
    culture: 'en-US',
    uniqueSEOCode: 'en',
    flagImageFileName: 'us.png'
  });

  english.save(function(error, doc){
    next();
  });
};

exports.down = function(next){
  next();
};
