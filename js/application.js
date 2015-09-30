define (
    ['jquery','underscore',"backbone","Marionette","Order", "OrderList", "OrderView", "OrdersView", "Book", "Books", "BookView", 'BooksView', "HeaderView", 'OrdersCompView'],
    function( $, _, Backbone,Marionette, Order, OrderList,OrderView, OrdersView, Book, Books, BookView, BooksView, HeaderView, OrdersCompView ) {

        var app = new Marionette.Application();

        app.addRegions({
            content: "#wrapper",
            orders: "#orders"
        });

        app.on('before:start', function(){

            var header =  new HeaderView();
            header.render();

            var list =  new OrdersCompView();
           list.render();

            $.ajaxSetup({async: false});

            var profiles = new OrderList();
            profiles.fetch();
            var allOrders =  new OrdersView({collection:profiles});
            allOrders.render();

            app.removeRegion('orders');
            app.removeRegion('content');

        });
        app.start();


    });