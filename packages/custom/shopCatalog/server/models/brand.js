'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;



var BrandSchema = new Schema({
    info:{
        name: {
            type: String,
            required: true
        },
        slug: {
            type: String,
            required: true
        },
        description: {
            type: String,
            default: null
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
        pageSizeOptions: [ {type: Number} ]
    }
});

mongoose.model('Brand', BrandSchema);