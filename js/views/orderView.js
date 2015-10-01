define (
    ['jquery','underscore',  'backbone', 'Marionette', "handlebars", 'hbs!templates/orderview'],
    function($, _,Backbone,Marionette,handlebars, orderTemplateHBS) {

        var app = app || {};
        app.OrderView = Marionette.ItemView.extend({
            tagName: 'li',
            class: "list",
            template: orderTemplateHBS


        });

        return app.OrderView;

    });

