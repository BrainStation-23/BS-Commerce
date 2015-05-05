'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CategorySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    slug:{
        type: String,
        required: true
    },
    parent: {
        type:Schema.Types.ObjectId,
        default: null
    },
    ancestors:{
        type:[CategorySchema],
        default: []
    }
});

mongoose.model('Category2', CategorySchema);