/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

BEM.DOM.decl('github', {

    onSetMod : {

        'js' : function() {
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

});

})();
