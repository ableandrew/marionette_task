define (
    ['jquery','underscore','backbone', 'Order'],
    function($, _ , Backbone, Order) {

        var app = app || {};
        app.OrderList = Backbone.Collection.extend({
            model: Order,
            url: 'http://localhost:63342/project%20backbone/json/orders.json'


        });

        return app.OrderList;
    });
