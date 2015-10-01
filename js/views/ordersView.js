define (
    ['jquery','underscore','backbone','Marionette', 'OrderList', "OrderView",'Books', "BooksView"],
    function($,_,Backbone, Marionette, OrderList, OrderView,Books,BooksView) {
        var app = app || {};
        app.OrdersView = Marionette.CollectionView.extend({
            el: '#ordersList',
            childView: OrderView,


            onRender: function () {
                this.collection.each(function(order) {
                    var orderView = new OrderView({model: order});
                    orderView.render();
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

