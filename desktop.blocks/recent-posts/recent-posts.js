/** @requires BEM */
/** @requires BEM.DOM */

modules.define(
    { block: 'recent-posts' },
    ['jquery', 'colors'],
    function(provide, $, colors) {

provide({

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

});
