'use strict';

// Articles routes use articles controller
var articles = require('../controllers/articles');

var auth;
require('meanio').resolve(function(authorization) {
    console.log('authorization:', authorization);
    auth = authorization;
});

// Article authorization helpers
var hasAuthorization = function(req, res, next) {
    if (req.article.user.id !== req.user.id) {
        return res.send(401, 'User is not authorized');
    }
    next();
};

module.exports = function(app) {

    app.get('/articles', articles.all);
    app.post('/articles', auth.requiresLogin, articles.create);
    app.get('/articles/:articleId', articles.show);
    app.put('/articles/:articleId', auth.requiresLogin, hasAuthorization, articles.update);
    app.del('/articles/:articleId', auth.requiresLogin, hasAuthorization, articles.destroy);

    // Finish with setting up the articleId param
    app.param('articleId', articles.article);

};
