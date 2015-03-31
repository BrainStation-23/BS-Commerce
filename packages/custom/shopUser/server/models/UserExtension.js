'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var AddressSchema = mongoose.Schema({
  addressLine1: {
    type: String,
    required: true
  },
  addressLine2:{
    type: String
  },
  city:{
    type: String,
    required: true
  },
  country:{
    type: String,
    required: true
  }
});

mongoose.model('Address', AddressSchema);

var User = mongoose.model('User');

User.schema.add({
  gender:{
    type: String,
    required: true,
    enum: ['male', 'female']
  },
  phoneNumber:{
    type: String,
    match:[/^(\(?\+?[0-9]*\)?)?[0-9_\- \(\)]*$/, 'Invalid phone number {VALUE}']
  },
  addresses:{
    type: [AddressSchema],
    default: []
  }
});
