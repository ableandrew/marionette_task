
define (
    ['jquery','underscore','backbone','Marionette', 'OrdersView', "handlebars", 'hbs!templates/header'],
    function($,_,Backbone, Marionette, OrdersView, handlebars, headerTemplateHBS) {
        var app = app || {};
        app.OrdersCompView = Marionette.CompositeView.extend({


        });

        return app.OrdersCompView;
    });
