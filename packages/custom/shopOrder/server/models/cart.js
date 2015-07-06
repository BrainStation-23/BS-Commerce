'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var CartSchema = new Schema({
  user:{
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },

  items:[{
    product:{
      type: Schema.Types.ObjectId,
      ref: 'Product',
      required: true
    },
    quantity:{
      type: Number,
      required:true,
      default: 1
    }
  }],

  createdOn:{
    type: Date,
    default: new Date()
  },
  updatedOn:{
    type: Date,
    default: new Date()
  }
});

mongoose.model('Cart', CartSchema);