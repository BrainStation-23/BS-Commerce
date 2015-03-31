'use strict';

var mean = require('meanio'),
  mongoose = require('mongoose'),
  Q = require('q'),
  async = require('async'),
  _ = require('lodash');

  require('../packages/custom/shopCore/server/models/language');
  require('../packages/custom/shopCore/server/models/lookup');
  require('../packages/custom/shopCore/server/models/setting');
  require('../packages/custom/shopCore/server/models/localizedStringResource');
  require('../packages/custom/shopCore/server/models/store');

  var Language = mongoose.model('Language'),
  Lookup = mongoose.model('Lookup'),
  Setting = mongoose.model('Setting'),
  LocalizedStringResource = mongoose.model('LocalizedStringResource'),
  Store = mongoose.model('Store');

var clearLookups = function(){
  var deferred = Q.defer();

  Lookup.remove({name: new RegExp('^admin.configuration.settings.user.general', 'i')}, function(error, cont){
    if(error){
      deferred.reject(error);
    }else{
      deferred.resolve();
    }
  });

  return deferred.promise;
};

var clearSettings = function(){
  var deferred = Q.defer();

  Setting.remove({name: new RegExp(('^admin.configuration.settings.user') , 'i')}, function(error, count){
    if(error){
      deferred.reject(error);
    }else{
      deferred.resolve();
    }
  });

  return deferred.promise;
};

var clearStore = function(){
  var deferred = Q.defer();

  Store.remove({},function(error, count){
    if(error){
      deferred.reject(error);
    }else{
      deferred.resolve();
    }
  });

  return deferred.promise;
};

var getDefaultLanguage = function(){
  var deferred = Q.defer();

  Language.findOne({name: 'English'}, function(error, doc){
    if(error){
      deferred.reject(error);
    }else{
      deferred.resolve(doc);
    }
  });

  return deferred.promise;
};

var createLookupItem = function(item){
  var deferred = Q.defer();

  item.save(function(error, doc){
    if(error){
      deferred.reject(error);
    }else{
      deferred.resolve(doc);
    }
  });

  return deferred.promise;
};

var createLookups = function(language){
  var deferred = Q.defer(),
    lookups = [],
    lookupPromises = [];

  var prefix = 'admin.configuration.settings.user.general';

  lookups.push(new Lookup({
    name: prefix + '.' + 'userRegistrationType.options',
    items: [{
      key: 'standard',
      value: 'Standard'
    },{
      key: 'email-validation',
      value: 'Email Validation'
    },{
      key: 'admin-approval',
      value: 'Admin Approval'
    },{
      key: 'disabled',
      value: 'Disabled'
    }]
  }));

  lookupPromises = _.map(lookups,function(item){
    return createLookupItem(item);
  });

  Q.all(lookupPromises)
    .then(function(items){
      var lookupHash = _.reduce(items,function(res, item){
        res[item.name] = item._id;
        return res;
      },{});

      deferred.resolve([language, lookupHash]);
    },function(error){
      deferred.reject(error);
    });

  return deferred.promise;
};

var createSettingItem = function(item){
  var deferred = Q.defer();

  item.save(function(error, doc){
    if(error){
      deferred.reject(error);
    }else{
      deferred.resolve(doc._id);
    }
  });

  return deferred.promise;
};

var createSettingsForUserGeneral = function(language, lookupHash){
  var deferred = Q.defer(),
    settings = [],
    settingsPromises = [];

  var prefix = 'admin.configuration.settings.user.general';

  settings.push(new Setting({
    name: prefix + '.' + 'userNameEnabled',
    value: 'false',
    displayOrder: 0,
    fieldType: 'boolean',
    displayType:'check-box'
  }));

  settings.push(new Setting({
    name: prefix + '.' + 'allowUsersToChangeUserName',
    value: 'false',
    displayOrder: 1,
    fieldType: 'boolean',
    displayType:'check-box'
  }));

  settings.push(new Setting({
    name: prefix + '.' + 'checkUserNameAvailabilityEnabled',
    value: 'false',
    displayOrder: 1,
    fieldType: 'boolean',
    displayType:'check-box'
  }));

  settings.push(new Setting({
    name: prefix + '.' + 'userRegistrationType',
    value: 'false',
    displayOrder: 1,
    fieldType: 'boolean',
    displayType:'drop-down',
    lookup: lookupHash[prefix + '.userRegistrationType.options']
  }));

  settingsPromises = _.map(settings, function(data){
    return createSettingItem(data);
  });

  Q.all(settingsPromises)
    .then(function(items){
      deferred.resolve(items);
    })
    .catch(function(error){
      deferred.reject(error);
    });

  return deferred.promise;
};

var createSettings = function(language, lookupHash){
  var deferred = Q.defer();

  Q.all(createSettingsForUserGeneral(language, lookupHash))
    .then(function(general){
      var settings = {
        general: general
      };
      deferred.resolve([language, settings])
    }, function(error){
      deferred.reject(error);
    });

  return deferred.promise;
};

var createShop = function(language, settings){
  var deferred = Q.defer();

  var store = new Store({
    name: 'Your store name',
    url: 'http://localhost:3000',
    sslEnabled: false,
    hosts: ['www.yourstore.com', 'yourstore.com'],
    displayOrder: 1,
    companyName: 'Your company name',
    companyAddress: 'Your company country, state, zip, street, etc',
    companyPhoneNumber: '(123) 456-78901',
    settings:{
      user:{
        general: settings.general
      }
    }
  });

  store.save(function(error, doc){
    if(error){
      deferred.reject(error);
    }else{
      deferred.resolve(doc)
    }
  });

  return deferred.promise;
};

exports.up = function(next){
  clearLookups()
    .then(clearSettings)
    .then(clearStore)
    .then(getDefaultLanguage)
    .spread(createLookups)
    .spread(createSettings)
    .spread(createShop)
    .catch(console.log)
    .finally(function(){
      next();
    })
    .done();
};

exports.down = function(next){
  next();
};
