define (function(require, module, exports){

    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        Marionette = require('Marionette'),
        OrdersView = require('OrdersView'),
        Const = require('Const'),
        HeaderView = require('HeaderView'),
        OrderList = require('OrderList');

    var app = app || {};

    app.Filter = Marionette.Behavior.extend({

        onRender:function(){
            this.collection=this.view.collection;
            },

        events: {
            "click @ui.menuList": 'filter'
        },


        filter: function(event){
            var target = event.target;
            while (target != $('nav')){
                if (target.className === 'filter') {
                    var number = target.getAttribute('id');
                    if (number === 'all'){
                        $('#orders-list').empty();
                        var allOrders =  new OrdersView({collection:this.collection}).render().init();
                        this.listStyle('all');
                    }
                    else{
                        $('#orders-list').empty();
                        var orders =  new OrdersView({
                            filter: function(child){
                                return child.get('state')  ===  Const[number];
                            },
                            collection:this.collection}).render().init();
                        this.listStyle(number);
                    }
                    return;
                }
                target = target.parentNode;
            }
        },

        listStyle: function(idButton){
            $(this.ui.menuList).each(function(index, el) {
                $(el).css({color: 'rgb(74, 212, 255)', borderBottom: '1px dashed rgb(74, 212, 255)'} );
            });
            $('#' + idButton).children().css({color: 'black', border: '0'});
        }
    });

    return app.Filter;

});
