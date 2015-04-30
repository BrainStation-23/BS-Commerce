'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var SettingSchema = new Schema({
  name: {
    type: String,
    required: true,
    index: true
  },
  value: {
    type: String,
    required: true
  },
  displayOrder: {
    type: Number,
    default: 9999
  },
  fieldType:{
    type: String,
    required: true,
    enum: ['string', 'number', 'boolean']
  },
  displayType:{
    type: String,
    required: true,
    enum: ['text-box', 'check-box', 'text-area', 'drop-down', 'radio-group']
  },
  lookup:{
    type: Schema.Types.ObjectId,
    ref: 'Lookup'
  }
});

mongoose.model('Setting', SettingSchema);