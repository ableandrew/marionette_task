
define (
    ['jquery','underscore','backbone','Marionette', 'OrdersView', "handlebars", 'hbs!templates/list'],
    function($,_,Backbone, Marionette, OrdersView, handlebars, listTemplateHBS) {
        var app = app || {};
        app.OrdersCompView = Marionette.CompositeView.extend({
            template: listTemplateHBS,
            el: '#order',
            childView: OrdersView,

            events: {
                'click #ordersList': "can"
            },

            can: function (event) {
                var target = event.target;
                var element = $("#ordersList");
                while (target != element){
                    if (target.tagName == 'DIV') {
                        var number = target.getAttribute("id");
                        var elem = document.getElementById("acc"+number);
                        var sprite = target.getElementsByClassName("spriteOpenOrder");
                        if (elem.style.display == "none"){
                            elem.style.display = "";
                            sprite[0].style.background = "url('images/sprite.png') no-repeat -15px 0px";
                        }
                        else {
                            elem.style.display = "none";
                            sprite[0].style.background = "url('images/sprite.png') no-repeat";
                        }
                        return;
                    }
                    target = target.parentNode;
                }
            }
        });

        return app.OrdersCompView;
    });
