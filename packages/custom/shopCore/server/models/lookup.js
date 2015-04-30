'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var LookupSchema = new Schema({
  name:{
    type: String,
    required: true,
    index: true
  },
  items: {
    type: [{
      key: {
        type: String,
        required: true
      }
    }],
    default: []
  }
});

mongoose.model('Lookup', LookupSchema);