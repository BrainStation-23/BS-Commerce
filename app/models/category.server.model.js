'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var AncestorSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true
    }
});

var CategorySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true
    },
    parent: {
        type: Schema.Types.ObjectId,
        default: null
    },
    description: {
        type: String,
        default: null
    },
    imageId: {
        type: Schema.Types.ObjectId,
        default: null
    },
    showOnHomePage: {
        type: Boolean,
        default: false
    },
    includeInTopMenu: {
        type: Boolean,
        default: false
    },
    allowToSelectPageSize:{
        type: Boolean,
        default: true
    },
    published:{
        type: Boolean,
        default: true
    },
    displayOrder:{
        type: Number,
        default: 0
    },
    ancestors: {
        type: [AncestorSchema],
        default: []
    },
    meta:{
        keywords:{
            type: [String],
            default: []
        },
        description:{
            type: String,
            default: ''
        },
        title:{
            type: String,
            default: ''
        },
        SEFN:{
            type: String,
            default: ''
        }
    }
});

mongoose.model('Category', CategorySchema);
