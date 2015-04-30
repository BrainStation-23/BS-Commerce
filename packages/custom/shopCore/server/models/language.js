'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var LanguageSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  culture:{
    type: String,
    required: true
  },
  uniqueSEOCode: String,
  flagImageFileName: String,
  rtl: {
    type: Boolean,
    default: false
  },
  limitedToStores: {
    type: Boolean,
    default: false
  },
  published: {
    type: Boolean,
    default: false
  },
  displayOrder:{
    type: Number,
    default: 0
  }
});

mongoose.model('Language', LanguageSchema);