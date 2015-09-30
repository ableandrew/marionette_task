define (
    ['jquery','underscore','backbone'],
    function($, _, Backbone) {

        var app = app || {};
        app.Order = Backbone.Model.extend({
            defaults: {

            }


        });

        return app.Order;

    });