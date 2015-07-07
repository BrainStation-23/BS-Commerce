'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var ProductTagSchema = new Schema({
  name: {
    type: String,
    required: true
  }
});

mongoose.model('ProductTag', ProductTagSchema);