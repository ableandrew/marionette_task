define(function(require, module, exports) {
    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        Marionette = require('Marionette'),
        handlebars = require('handlebars'),
        bookTemplate = require('hbs!templates/bookview');

    var app = app || {};
    app.BookView = Marionette.ItemView.extend({
        template: bookTemplate

    });

    return app.BookView;

});