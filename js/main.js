
requirejs.config({
    paths: {
        jquery: '../lib/vendor/jquery/dist/jquery',
        underscore: '../lib/vendor/underscore/underscore',
        backbone: '../lib/vendor/backbone/backbone',
        handlebars: "../lib/vendor/require-handlebars-plugin/hbs/handlebars.runtime",
        hbs: '../lib/vendor/require-handlebars-plugin/hbs',
        Order: 'models/order',
        OrderList: 'collection/orders',
        OrderView: 'views/orderView',
        OrdersView: 'views/ordersView',
        application: "application",
        Book: 'models/book',
        Books: 'collection/books',
        BookView: 'views/bookView',
        BooksView: 'views/booksView',
        HeaderView: 'views/headerView',
        Marionette: '../lib/vendor/backbone.marionette/lib/backbone.marionette',
        OrdersCompView: 'views/ordersCompView',
        Const: 'const/const',
        behaviors: 'behavior/behaviorsLookup',
        filter: 'behavior/filter'
    }

});

require(
    ['jquery','underscore', 'backbone', 'application' ],
    function( $, _,Backbone, application, Marionette){

    }
);
