define (
    ['jquery','underscore',"backbone","Order", "OrderList", "OrderView", "OrdersView", "Book", "Books", "BookView", 'BooksView', "HeaderView"],
    function( $, _, Backbone, Order, OrderList,OrderView, OrdersView, Book, Books, BookView, BooksView, HeaderView ) {


        (function(){

            var header =  new HeaderView();
            header.render();


            $.ajaxSetup({async: false});

            var profiles = new OrderList();
            profiles.fetch();
            var allOrders =  new OrdersView({collection:profiles});
            allOrders.render();

            header.removeRegion("content");
            header.removeRegion("orders");

        })();
    });