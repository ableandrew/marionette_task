define(function(require, module, exports) {
    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        Marionette = require('Marionette'),
        Books = require('Books'),
        BookView = require('BookView');

    var app = app || {};
    app.BooksView = Marionette.CollectionView.extend({
        childView: BookView,


        initialize: function(){
            this.collection.forEach(function(order) {
                var bookView = new BookView({model: order});
                $('#book-orders'+order.get('OrderId')).append(bookView.render().el)
            }, this);
            return this;
        }

    });
    return app.BooksView;

});