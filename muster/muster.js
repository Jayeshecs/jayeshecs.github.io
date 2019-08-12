/*global define, window */

var console = window.console;

define(function () {
    "use strict";
    
    function Muster() {
        this.events = [];
        this.timesheet = [];
    }
    
    Muster.prototype = {
        
        constructor : Muster,
        
        readFile : function (file) {
            // TODO
            console.log(file);
        },
        
        timesheet : function () {
            // TODO
        }
    };
});