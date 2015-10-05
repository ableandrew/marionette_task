define (
    ['jquery','underscore',"backbone","Marionette","Order", "OrderList", "OrderView", "OrdersView",
        "Book", "Books", "BookView", 'BooksView', "HeaderView", 'OrdersCompView', 'Regions'],
    function( $, _, Backbone,Marionette, Order, OrderList,OrderView,
              OrdersView, Book, Books, BookView, BooksView, HeaderView, OrdersCompView, Regions ) {

        var app = new Marionette.Application();

        app.addRegions({
            content: "#wrapper",
            orders: "#orders"
        });

        app.on('before:start', function(){

            $.ajaxSetup({async: false});

            var profiles = new OrderList();
            profiles.fetch();

            var header =  new HeaderView({collection:profiles});
            header.render();

            var list =  new OrdersCompView();
            list.render();


            var allOrders =  new OrdersView({collection:profiles});
            allOrders.render();

            //var region = new Regions;



        });
        app.start();


    });