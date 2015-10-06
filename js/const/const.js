define(function(require, module, exports) {
    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        Marionette = require('Marionette');

    var app = app || {};

    app.CONST = {
        redStatus: 'Canceled',
        greenStatus: 'Delivered',
        greyStatus: 'Sent by courier'
    };

    return app.CONST;

});
