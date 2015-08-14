'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var manufacturerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    picture: {
        type:Schema.Types.ObjectId
    },
    isPublished: {
        type: Boolean,
        default: false
    },
    displayOrder: {
        type: Number
    },
    seo: {
        metaKeyword: {
            type: String,
            default: ''
        },
        metaDescription: {
            type: String,
            default: ''
        },
        metaTitle: {
            type: String,
            default: ''
        },
        SEFN: {
            type: String,
            default: ''
        }
    }
});

mongoose.model('Manufacturer', manufacturerSchema);