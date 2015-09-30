
define (
    ['jquery','underscore','backbone','Marionette', 'OrdersView', "handlebars", 'hbs!templates/list'],
    function($,_,Backbone, Marionette, OrdersView, handlebars, listTemplateHBS) {
        var app = app || {};
        app.OrdersCompView = Marionette.CompositeView.extend({
            template: listTemplateHBS,
            el: '#order',
            childView: OrdersView

        });

        return app.OrdersCompView;
    });
