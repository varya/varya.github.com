/** @requires BEM */
/** @requires BEM.DOM */

modules.define('i-bem__dom', ['jquery', 'colors'], function(provide, $, colors, DOM) {

DOM.decl('recent-posts', {

    onSetMod : {

        'js' : {

            'inited' : function() {

                this.elem('date').each(function(i, elem){
                    var clr = colors.getNextColor();
                    $(elem).css('background-color', '#' + clr);
                });

            }
        }

    }

});

provide(DOM);

});
