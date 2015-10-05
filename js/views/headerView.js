define (
    ['jquery','underscore','backbone',"Marionette","handlebars", 'hbs!templates/header', 'OrderList', 'OrdersView', "Const"],
    function($,_,Backbone,Marionette, handlebars, headerTemplateHBS, OrderList, OrdersView, Const) {
        var app = app || {};
        app.HeaderView = Marionette.LayoutView.extend({
            template: headerTemplateHBS,
            el: '#wrapper',

            regions: {
                content: "#wrapper",
                orders: "#orders"
            },

            events: {
                'click nav': 'filter'
            },

            filter: function(event){
                var target = event.target;
                while (target != $("nav")){
                    if (target.className == 'filter') {
                        var number = target.getAttribute("id");

                        if (number === "all"){
                            $("#ordersList").empty();
                            var allOrders =  new OrdersView({collection:this.collection}).render();
                            this.listStyle("all");
                        }
                        else{
                            $("#ordersList").empty();
                            var orders =  new OrdersView({filter: function(child){
                                return child.get('state')  ===  Const[number];
                            }, collection:this.collection}).render();
                            this.listStyle(number);
                        }
                        return;
                    }
                    target = target.parentNode;
                }
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
