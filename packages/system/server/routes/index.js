'use strict';

module.exports = function(System, app) {
    app.get('/', System.render);
};
