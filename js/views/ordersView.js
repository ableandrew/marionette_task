define(function(require, module, exports) {
    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        Marionette = require('Marionette'),
        OrderList = require('OrderList'),
        OrderView = require('OrderView'),
        Books = require('Books'),
        BooksView = require('BooksView');


    var app = app || {};
    app.OrdersView = Marionette.CollectionView.extend({
        el: '#orders-list',
        childView: OrderView,

        filter: function (child) {
            return this;
        },

        init: function () {
            this.collection.each(function(order) {
                var orderView = new OrderView({model: order});
                orderView.render();
                var allCollection = new Books();
                allCollection.fetch();
                var serializedCollection = allCollection.toJSON();
                var filter = _.where(serializedCollection, {OrderId: order.get('id')});
                var newCollection = new Books(filter);
                var idCollection =  new BooksView({collection:newCollection});
                idCollection.render();

            }, this);
            return this;
        }

    });

    return app.OrdersView;

});
