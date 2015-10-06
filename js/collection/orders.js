define(function(require, module, exports){
    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        Order = require('Order');

    var app = app || {};
    app.OrderList = Backbone.Collection.extend({
        model: Order,
        url: 'http://localhost:63342/project%20backbone/json/orders.json'
    });

    return app.OrderList;
});
