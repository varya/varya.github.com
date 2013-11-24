/** @requires BEM */
/* http://stackoverflow.com/questions/16253429/saving-a-css-web-font-in-html5-local-storage */

modules.define('fonts', ['jquery'], function(provide, $) {

$(function(){

    /* For storage only */
    if (typeof(Storage) === 'undefined') {
        return;
    }
    if (localStorage.getItem('varya.me.fonts') === null) {

        $.ajax({
            url: '/*borschik:link:../../data/fonts.css',
            success: function(response){
                localStorage.setItem('varya.me.fonts', response);
            },
            dataType: 'text'
        });

    }

});

});

modules.require(['fonts'], function(){});
