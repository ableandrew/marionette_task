define (
    ['jquery','underscore','backbone',"Marionette","handlebars", 'hbs!templates/header', 'OrderList', 'OrdersView', 'OrderView', 'OrdersCompView'],
    function($,_,Backbone,Marionette, handlebars, headerTemplateHBS, OrderList, OrdersView, OrderView, OrdersCompView) {
        var app = app || {};
        app.HeaderView = Marionette.LayoutView.extend({
            template: headerTemplateHBS,
            el: '#wrapper',

            regions: {
                content: "#wrapper",
                orders: "#orders"
            },

            events: {
                'click #redStatus': "canceled",
                'click #greenStatus': "completed",
                'click #greyStatus': "current",
                'click #all': "all"

            },

            canceled: function(){
                    $("#orders").empty();
                    var coll = new OrderList();
                    coll.fetch();
                    var filter = coll.canceled();
                    var canceledOrderList = new OrderList(filter);
                    var list =  new OrdersCompView().render();
                    var orders2 =  new OrdersView({collection:canceledOrderList}).render();
                    this.listStyle("redStatus");
            },

            completed: function(){
                    $("#orders").empty();
                    var coll = new OrderList();
                    coll.fetch();
                    var filter = coll.completed();
                    var canceledOrderList = new OrderList(filter);
                    var list =  new OrdersCompView().render();
                    var orders2 =  new OrdersView({collection:canceledOrderList}).render();
                    this.listStyle("greenStatus");
            },

            current: function(){
                    $("#orders").empty();
                    var coll = new OrderList();
                    coll.fetch();
                    var filter = coll.current();
                    var canceledOrderList = new OrderList(filter);
                    var list =  new OrdersCompView().render();
                    var orders2 =  new OrdersView({collection:canceledOrderList}).render();
                    this.listStyle("greyStatus");
            },

            all: function(){
                    $("#orders").empty();
                    var coll = new OrderList();
                    coll.fetch();
                    var list =  new OrdersCompView().render();
                    var allOrders =  new OrdersView({collection:coll}).render();
                    this.listStyle("all");
            },

            listStyle: function(idButton){
                $(".topMenuA").each(function(index, el) {
                    $(el).css({color: "rgb(74, 212, 255)", borderBottom: "1px dashed rgb(74, 212, 255)"} );
                });
                $("#" + idButton).children().css({color: "black", border: "0"});
            }





        });

        return app.HeaderView;
    });
