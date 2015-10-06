define(function(require, module, exports) {
        var $ = require('jquery'),
            _ = require('underscore'),
            Backbone = require('backbone'),
            Marionette = require('Marionette'),
            behaviorFilter = require('filter');

        module.exports = Marionette.Behaviors.behaviorsLookup = function () {

            var behaviorStorage = {};
            _.extend(behaviorStorage, {Filter: behaviorFilter});

            return behaviorStorage;
        };

    });
