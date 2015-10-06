define(function(require, module, exports) {
    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        Marionette = require('Marionette'),
        handlebars = require('handlebars'),
        orderTemplateHBS = require('hbs!templates/orderview');

    var app = app || {};
    app.OrderView = Marionette.ItemView.extend({
        tagName: 'li',
        class: 'list',
        template: orderTemplateHBS

    });

    return app.OrderView;
});