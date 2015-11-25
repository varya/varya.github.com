/** @requires BEM */
/** @requires BEM.DOM */

modules.define(
    'recent-posts',
    ['i-bem__dom', 'jquery', 'colors'],
    function(provide, BEMDOM, $, colors) {

provide(BEMDOM.decl({block: this.name}, {

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

}));

});
