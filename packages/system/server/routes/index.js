'use strict';

var index = require('../controllers/index');

module.exports = function(System, app) {
    app.get('/', index.render);
};
