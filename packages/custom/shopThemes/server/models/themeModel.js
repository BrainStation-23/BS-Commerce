'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var themeSchema = new Schema ({
    name: {
        type: String,
        required: true,
        trim: true
    },
    displayName: {
        type: String,
        required: true
    },
    isDefault: {
        type: Boolean,
        default: false
    }
});

mongoose.model('Theme', themeSchema);
