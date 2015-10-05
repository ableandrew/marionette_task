define (
    ['jquery','underscore',"backbone","Marionette"],
    function( $, _, Backbone,Marionette ) {
        var app = app || {};

        app.CONST = {
            redStatus: "Canceled",
            greenStatus: "Delivered",
            greyStatus: "Sent by courier"
        };

            return app.CONST;
    });