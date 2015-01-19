/** @requires BEM */
/** @requires BEM.DOM */

modules.define(
    'github',
    ['i-bem__dom', 'github__jquery'],
    function(provide, BEMDOM) {

provide(BEMDOM.decl({block: this.name}, {

    onSetMod : {

        'js' : {
            'inited' :function() {
                this.elem('body').github({
                    user: this.params.user,
                    show_repos: 5,
                    show_extended_info: false,
                    show_follows: false,
                    oldest_first: false,
                    width: '100%'
                });
            }
        }

    }

}));

});
