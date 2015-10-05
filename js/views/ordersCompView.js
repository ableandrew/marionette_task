
define (
    ['jquery','underscore','backbone','Marionette','OrderView', 'OrdersView', "handlebars", 'hbs!templates/list'],
    function($,_,Backbone, Marionette, OrderView, OrdersView, handlebars, listTemplateHBS) {
        var app = app || {};
        app.OrdersCompView = Marionette.CompositeView.extend({
            template: listTemplateHBS,
            el: '#order',
            childView: OrderView,

            events: {
                'click #ordersList': "accordion"
            },

            accordion: function (event) {
                var target = event.target;
                var element = $("#ordersList");
                while (target != element){
                    if (target.className == 'tableTR') {
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
