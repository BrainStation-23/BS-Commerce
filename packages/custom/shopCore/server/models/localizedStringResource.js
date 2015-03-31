'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var LocalizedStringResourceSchema = new Schema({
  language:{
    required: true,
    type: Schema.Types.ObjectId,
    ref: 'Language'
  },
  name:{
    type: String,
    required: true
  },
  value:{
    type:String,
    required: true
  }
});

mongoose.model('LocalizedStringResource', LocalizedStringResourceSchema);