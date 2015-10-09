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
            controller = require('controller'),
            behaviors = require('behaviors');


        var app = new Marionette.Application();




        app.on('before:start', function(){
           var controll = new controller();
        });


        module.exports = app.start();

});


