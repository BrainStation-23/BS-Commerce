'use strict';

var _  = require('lodash'),
  errors = [];

var validation = {
  add: function(status, errorMessage, options){
    options = options || {};
    errorMessage = errorMessage || '';

    if(!status){
      errors.push({
        param: options.param ? options.param : null,
        msg: options.value ? errorMessage.replace(/({VALUE})/gi, options.value) : errorMessage,
        value: options.value ? options.value : null
      });
    }

    return this;
  },
  getErrors: function(){
    var errorList = _.clone(errors);
    errors = [];
    return errorList;
  }
};

module.exports = validation;