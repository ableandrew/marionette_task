define (
    ['jquery','underscore','backbone','Marionette', "handlebars", 'hbs!templates/bookview'],
    function($, _,Backbone,Marionette, handlebars, bookTemplate) {

        var app = app || {};
        app.BookView = Marionette.ItemView.extend({
            tagName: 'div',
            template: bookTemplate
        });

        return app.BookView;

    });