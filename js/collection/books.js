define(function(require, module, exports){
    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        Book = require('Book');

    var app = app || {};
    app.Books = Backbone.Collection.extend({
        model: Book,
        url: 'http://localhost:63342/project%20backbone/json/books.json'

    });

    return app.Books;
});
