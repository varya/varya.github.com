/** @requires BEM */
/** @requires BEM.DOM */

modules.define(
    { block: 'github' },
    function(provide) {

provide({

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

});

});
