define (
    ['jquery','underscore',  'backbone', 'Marionette', "handlebars", 'hbs!templates/orderview', 'Books', 'BooksView'],
    function($, _,Backbone,Marionette,handlebars, orderTemplateHBS, Books, BooksView) {

        var app = app || {};
        app.OrderView = Marionette.ItemView.extend({
            tagName: 'li',
            class: "list",
            template: orderTemplateHBS,




            /*initialize: function () {


                var allCollection = new Books();
                allCollection.fetch();
                var serializedCollection = allCollection.toJSON();
                var filter = _.where(serializedCollection, {OrderId: this.model.get("id")});


                console.log(filter);


                var newCollection = new Books(filter);
                var idCollection =  new BooksView({collection:newCollection});
                idCollection.render();

                return this;
            }*/

        });





        return app.OrderView;

    });

