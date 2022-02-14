'use strict';

var mongoose = require('mongoose');

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
  },
  postCode:{
    type: String,
    required: true
  }
});

mongoose.model('Address', AddressSchema);

require('./user.server.model.js'); //load user module

var User = mongoose.model('User');

User.schema.add({
  phoneNumber:{
    type: String,
    match:[/^(\(?\+?[0-9]*\)?)?[0-9_\- \(\)]*$/, 'Invalid phone number {VALUE}']
  },
  addresses:{
    type: [AddressSchema],
    default: []
  },
  status:{
    type: String,
    enum:['active', 'inactive', 'email-not-verified']
  },
  gender:{
    type: String
  },
  active:{
    type: Boolean,
    default: true
  }
});
