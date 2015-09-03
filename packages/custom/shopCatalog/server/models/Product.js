'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ProductSchema = new Schema({
    info: {
        name: {
            type: String,
            required: true
        },
        shortDescription: String,
        fullDescription: String,
        sku: {
            type: String,
            required: true,
            unique: true
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
        },
        showOnHomePage: {
            type: Boolean,
            default: false
        },
        includeInTopMenu: {
            type: Boolean,
            default: false
        },
        allowToSelectPageSize: {
            type: Boolean,
            default: false
        },
        published: {
            type: Boolean,
            default: false
        },
        displayOrder: {
            type: Number,
            default: 1
        },
        isFeatured: {
            type: Boolean,
            default: false
        },
        publishDate:{
            type:Date,
            default: new Date()
        }
    },
    meta:{
        keywords:{
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
            required:true,
            unique: true
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
    brands:{
        type: [Schema.Types.ObjectId],
        default: []
    },
    categories:[{
        categoryId:{
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

ProductSchema.index({
    'info.name': 'text',
    'info.fullDescription': 'text'
}, {name: 'search'});

mongoose.model('Product', ProductSchema);