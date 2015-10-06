define(function(require, module, exports){
        var $ = require('jquery'),
            _ = require('underscore'),
            Backbone = require('backbone'),
            Marionette = require("Marionette"),
            Order = require('Order'),
            OrderList = require('OrderList'),
            OrderView = require('OrderView'),
            OrdersView = require('OrdersView'),
            Book = require('Book'),
            Books = require('Books'),
            BookView = require('BookView'),
            BooksView = require('BooksView'),
            HeaderView = require('HeaderView'),
            OrdersCompView = require('OrdersCompView'),
            behaviors = require('behaviors');


        var app = new Marionette.Application();


        app.on('before:start', function(){

            $.ajaxSetup({async: false});

            var profiles = new OrderList();
            profiles.fetch();

            var header =  new HeaderView({collection:profiles});
            header.render();

            var list =  new OrdersCompView();
            list.render();


            var allOrders =  new OrdersView({collection:profiles});
            allOrders.render().init();


        });
        module.exports = app.start();

});


