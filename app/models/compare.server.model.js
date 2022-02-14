'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CompareSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },

    items: [{
        product: {
            type: Schema.Types.ObjectId,
            ref: 'Product',
            required: true
        },
        _id: false
    }],

    createdOn: {
        type: Date,
        default: new Date()
    },
    updatedOn: {
        type: Date,
        default: new Date()
    }
});

mongoose.model('Compare', CompareSchema);
