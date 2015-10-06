define(function(require, module, exports){
    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone');

    var app = app || {};
    app.Book = Backbone.Model.extend({
        defaults: {
        }
    });
    return app.Book;
});

