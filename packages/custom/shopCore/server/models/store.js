'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var StoreSchema = new Schema({
  name:{
    type: String,
    required: true
  },
  url:{
    type: String,
    required: true
  },
  sslEnabled:{
    type: Boolean,
    default: false
  },
  secureUrl:{
    type: String
  },
  hosts:[{
    type: String,
    index: true
  }],
  displayOrder:Number,
  companyName:String,
  companyAddress:String,
  companyPhoneNumber:String,
  settings:{
    user:{
      general: [{
        type: Schema.Types.ObjectId,
        ref: 'Setting'
      }],
      formFields: [{
        type: Schema.Types.ObjectId,
        ref: 'Setting'
      }],
      addressFields: [{
        type: Schema.Types.ObjectId,
        ref: 'Setting'
      }],
      dateTime: [{
        type: Schema.Types.ObjectId,
        ref: 'Setting'
      }],
      externalAuthentication: [{
        type: Schema.Types.ObjectId,
        ref: 'Setting'
      }]
    }
  }

});

mongoose.model('Store', StoreSchema);