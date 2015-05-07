'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var Category_PreSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  slug:{
    type: String,
    required: true
  },
  parent: {
    type:Schema.Types.ObjectId,
    default: null
  },
  ancestors:{
    type:[Category_PreSchema],
    default: []
  }
});

mongoose.model('Category_Pre', Category_PreSchema);