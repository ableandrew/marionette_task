
requirejs.config({
    paths: {
        jquery: '../lib/vendor/jquery/dist/jquery',
        underscore: '../lib/vendor/underscore/underscore',
        backbone: '../lib/vendor/backbone/backbone',
        behaviors: 'behavior/behaviorsLookup',
        handlebars: "../lib/vendor/require-handlebars-plugin/hbs/handlebars.runtime",
        hbs: '../lib/vendor/require-handlebars-plugin/hbs',
        Order: 'models/order',
        OrderList: 'collection/orders',
        OrderView: 'views/orderView',
        OrdersView: 'views/ordersView',
        application: "application",
        Book: 'models/book',
        Books: 'collection/books',
        BookView: 'views/bookView',
        BooksView: 'views/booksView',
        HeaderView: 'views/headerView',
        Marionette: '../lib/vendor/backbone.marionette/lib/backbone.marionette',
        OrdersCompView: 'views/ordersCompView',
        Const: 'const/const',
        filter: 'behavior/filter',
        controller: 'controller'

    }

});

require(
    ['jquery','underscore', 'backbone' , 'Order', 'OrderList', 'Book', 'Books', 'Const', 'filter','handlebars',
        'hbs!templates/header','hbs!templates/bookview','hbs!templates/list','hbs!templates/orderview', 'BookView', 'OrderView', 'BooksView',
        'OrdersView','HeaderView','OrdersCompView'],
    function( $, _,Backbone,Order, OrderList, Book, Books, Const, filter,handlebars,
              headerTemplateHBS,bookTemplate,listTemplateHBS,orderTemplateHBS, BookView, OrderView, BooksView,OrdersView,HeaderView,OrdersCompView){


        mocha.setup('bdd');

        $.ajaxSetup({async: false});

        var assert = (chai.assert);
        var expect = (chai.expect);


        describe("Checking constants", function() {
            it("Check the type of constants", function() {
                assert.equal(typeof(Const), 'object', "warning, not a object!");
            });
            it("Check for a constant", function() {
                assert.notEqual((Object.keys(Const).length), '0', "Error!");
            });
        });



        describe("Test models", function() {

            describe("Model Order", function() {
                it("Check the type", function() {
                    assert.equal(typeof(Order), 'function', "warning, not a function!");
                });
                it("Checking the instance of the class", function() {
                    assert.equal(function(){
                        var a = new Order;
                        return typeof (a);
                    }(), 'object', 'warning, not an object!');
                });
            });

            describe("Model Book", function() {

                it("Check the type", function() {
                    assert.equal(typeof(Book), 'function', "warning, not a function!");
                });

                it("Checking the instance of the class", function() {
                    assert.equal(function(){
                        var a = new Book;
                        return typeof (a);
                    }(), 'object', 'warning, not an object!');
                });
            });
        });

        describe("Test collections", function() {

            describe("Collection OrderList", function() {
                it("Check the type", function() {
                    assert.isFunction(OrderList, "warning, not a function!");
                });
                it("Checking the instance of the class", function() {
                    assert.equal(function(){
                        var a = new OrderList;
                        return typeof (a);
                    }(), 'object', 'warning, not an object!');
                });
                it("Receiving data from server", function() {
                    assert.notEqual(function(){
                        var profiles = new OrderList();
                        profiles.fetch();
                        return (profiles.length);
                    }(), '0', 'The collection is empty!');
                });
            });
            describe("Collection Books", function() {
                it("Check the type", function() {
                    assert.isFunction(Books, "warning, not a function!");
                });
                it("Checking the instance of the class", function() {
                    assert.equal(function(){
                        var a = new Books;
                        return typeof (a);
                    }(), 'object', 'warning, not an object!');
                });
                it("Receiving data from server", function() {
                    assert.notEqual(function(){
                        var profiles = new Books();
                        profiles.fetch();
                        return (profiles.length);
                    }(), '0', 'The collection is empty');
                });
            });
        });

        describe("Checking Behaviors", function() {
            it("Checking Behavior filter", function() {
                assert.isFunction(filter, "warning, not a function!");
            });
            describe("Checking methods Behavior filter", function() {
                it("Checking method filter", function() {
                    assert.isFunction(filter.prototype.filter, "warning, not a function!");
                });
                it("Checking method listStyle", function() {
                    assert.isFunction(filter.prototype.listStyle, "warning, not a function!");
                });
            });
        });

        describe("Checking templates", function() {
            it("Checking header template", function() {
                assert.isString(headerTemplateHBS(), 'Not ok with template!');
            });
            it("Checking book template", function() {
                assert.isString(bookTemplate(), 'Not ok with template!');
            });
            it("Checking list template", function() {
                assert.isString(listTemplateHBS(), 'Not ok with template!');
            });
            it("Checking order template", function() {
                assert.isString(orderTemplateHBS(), 'Not ok with template!');
            });
        });

        function view (){
            var obj = new BookView();
            obj.render();

            var obj2 = new BooksView();
            obj2.render();

            var obj1 = new OrderView();
            obj1.render();

            var obj3 = new OrdersView();
            obj3.render();

            var obj4 = new HeaderView();
            obj4.render();

            var obj5 = new OrdersCompView();
            obj5.render();

        }

        describe("View", function() {
            it("View", function() {
                expect(view).not.to.throw(Error);
            });
        });


        mocha.run();

    }
);
