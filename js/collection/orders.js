define (
    ['jquery','underscore','backbone', 'Order'],
    function($, _ , Backbone, Order) {

        var app = app || {};
        app.OrderList = Backbone.Collection.extend({
            model: Order,
            url: 'http://localhost:63342/project%20backbone/json/orders.json',

            canceled: function(){
                return this.filter(function(cancel){
                    return cancel.get('state')==="Canceled";
                })
            },

            completed: function(){
                return this.filter(function(done){
                    return done.get('state')==="Delivered";
                })
            },

            current:function(){
                return this.filter(function(current){
                    return current.get('state')==="Sent by courier";
                })
            }

        });

        return app.OrderList;
    });
