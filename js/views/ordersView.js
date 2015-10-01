define (
    ['jquery','underscore','backbone','Marionette', 'OrderList', "OrderView",'Books', "BooksView", "application","handlebars", 'hbs!templates/header'],
    function($,_,Backbone, Marionette, OrderList, OrderView,Books,BooksView, application, handlebars, headerTemplateHBS) {
        var app = app || {};
        app.OrdersView = Marionette.CollectionView.extend({
            template: headerTemplateHBS,
            el: '#ordersList',
            childView: OrderView,


            onRender: function () {
                this.collection.each(function(order) {
                    var allCollection = new Books();
                    allCollection.fetch();
                    var serializedCollection = allCollection.toJSON();
                    var filter = _.where(serializedCollection, {OrderId: order.get("id")});
                    var newCollection = new Books(filter);
                    var idCollection =  new BooksView({collection:newCollection});
                    idCollection.render();
                }, this);
                return this;
            }

        });

        return app.OrdersView;
    });

