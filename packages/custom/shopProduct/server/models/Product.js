'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var ProductSchema = new Schema({
  info: {
    name: {
      type: String,
      required: true
    },
    shortDescription: {
      type: String,
      required: true
    },
    fullDescription: {
      type: String,
      required: true
    },
    sku: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      default: 0
    },
    oldPrice: {
      type: Number,
      default: 0
    },
    cost: {
      type: Number,
      default: 0
    }
  },
  meta:{
    keyword:{
      type: [String],
      default: []
    },
    title:{
      type: String,
      default: ''
    },
    description:{
      type: String,
      default: ''
    },
    friendlyPageName:{
      type: String,
      required: true
    }
  },
  tags:[{
    type: Schema.Types.ObjectId,
    ref: 'ProductTag'
  }],
  photos:[{
    type: Schema.Types.ObjectId,
    ref: 'fs.files'
  }],
  categories:[{
    id:{
      type: Schema.Types.ObjectId,
      required: true
    },
    isFeatured:{
      type: Boolean,
      default: false
    },
    displayOrder:{
      type: Number,
      default: 0
    }
  }]
});

mongoose.model('Product', ProductSchema);