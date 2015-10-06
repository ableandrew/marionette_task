define(function(require, module, exports) {
    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        Marionette = require('Marionette'),
        OrderView = require('OrderView'),
        OrdersView = require('OrdersView'),
        handlebars = require('handlebars'),
        listTemplateHBS = require('hbs!templates/list');


    var app = app || {};
    app.OrdersCompView = Marionette.CompositeView.extend({
        template: listTemplateHBS,
        el: '#order',
        childView: OrderView,

        events: {
            'click #orders-list': 'accordion'
        },

        accordion: function (event) {
            var target = event.target;
            var element = $('#orders-list');
            while (target !== element){
                if (target.className === 'tableTR') {
                    var number = target.getAttribute('id');
                    var elem = document.getElementById('acc'+number);
                    var sprite = target.getElementsByClassName('sprite-open-order');
                    if (elem.style.display === 'none'){
                        elem.style.display = '';
                        sprite[0].style.background = 'url("images/sprite.png") no-repeat -15px 0px';
                    }
                    else {
                        elem.style.display = 'none';
                        sprite[0].style.background = 'url("images/sprite.png") no-repeat';
                    }
                    return;
                }
                target = target.parentNode;
            }
        }
    });

    return app.OrdersCompView;

});
