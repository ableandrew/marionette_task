define (
    ['jquery','underscore','backbone', 'Book'],
    function($, _ , Backbone, Book) {

        var app = app || {};
        app.Books = Backbone.Collection.extend({
            model: Book,
            url: 'http://localhost:63342/project%20backbone/json/books.json'

        });

        return app.Books;
    });

