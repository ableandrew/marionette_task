define (
    ['jquery','underscore','backbone','Marionette','Books', "BookView"],
    function($,_,Backbone,Marionette, Books, BookView) {
        var app = app || {};
        app.BooksView = Marionette.CollectionView.extend({
            childView: BookView,

            initialize: function(){
                this.collection.forEach(function(order) {
                    var bookView = new BookView({model: order});
                    $("#bookOrders"+order.get("OrderId")).append(bookView.render().el)
                }, this);
                return this;
            }

        });
        return app.BooksView;
    });

