'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var emailSchema = new Schema ({
    emailAddress: {
        type: String,
        match: [/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Please enter a valid email']
    },
    emailDisplayName: {
        type: String
    },
    host: {
        type: String
    },
    port: {
        type: Number
    },
    user: {
        type: String,
        match: [/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Please enter a valid email']
    },
    password: {
        type: String
    },
    ssl: {
        type: Boolean,
        default: false
    },
    isDefault: {
        type: Boolean,
        default: false
    }
});

var settingsSchema = new Schema ({
    emails: {
        type: [emailSchema]
    }
});

mongoose.model('Settings', settingsSchema);