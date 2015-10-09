define(function(require, module, exports) {
    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        Marionette = require('Marionette'),
        OrderList = require('OrderList'),
        OrdersView = require('OrdersView'),
        HeaderView = require('HeaderView'),
        OrdersCompView = require('OrdersCompView');


    var app = app || {};

    app.Controller = Marionette.Object.extend({

        initialize: function () {

            $.ajaxSetup({async: false});
            var profiles = new OrderList();
            profiles.fetch();

            this.header = new HeaderView({collection: profiles}).render();
            this.list = new OrdersCompView().render();
            this.allOrders = new OrdersView({collection: profiles}).render().init(); //.render().init()
        }
    });


    return app.Controller;

});