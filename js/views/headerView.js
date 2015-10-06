define(function(require, module, exports) {
    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        Marionette = require('Marionette'),
        handlebars = require('handlebars'),
        headerTemplateHBS = require('hbs!templates/header');

    var app = app || {};

    app.HeaderView = Marionette.LayoutView.extend({
        template: headerTemplateHBS,
        el: '#wrapper',

        ui: {
            menuList: '.top-menu-link'
        },

        behaviors: {
            Filter: {
                coll: 'Collection'
            }
        }

    });

    return app.HeaderView;

});