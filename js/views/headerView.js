define(function(require, module, exports) {
    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        Marionette = require('Marionette'),
        handlebars = require('handlebars'),
        behaviors = require('behaviors'),
        headerTemplateHBS = require('hbs!templates/header');

    var app = app || {};

    app.HeaderView = Marionette.LayoutView.extend({
        template: headerTemplateHBS,
        el: '#wrapper',

        regions: {
            "orders": "#orders"
        },

        ui: {
            menuList: '.top-menu-link'
        },

        behaviors: {
            Filter: {

            }
        }


    });


    return app.HeaderView;

});