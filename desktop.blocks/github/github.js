/** @requires BEM */
/** @requires BEM.DOM */

modules.define(
    'github',
    ['i-bem__dom', 'jquery', 'BEMHTML'],
    function(provide, BEMDOM, $, BEMHTML) {

provide(BEMDOM.decl({block: this.name}, {

    onSetMod : {

        'js' : {
            'inited' :function() {
                this._getRepos();
                /*this.elem('body').github({
                    user: this.params.user,
                    show_repos: 5,
                    show_extended_info: false,
                    show_follows: false,
                    oldest_first: false,
                    width: '100%'
                });*/
            }
        }

    },

    _getRepos: function() {
        var url = 'https://api.github.com/users/' + this.params.user + '/repos?sort=updated&callback=?';
        var _this = this;
        $.getJSON(url, function(data) {
            // Filter out the respos
            var filter = [
                'varya.github.com'
            ];
            _this.repos = data.data.filter(function(repo) {
                if(filter.indexOf(repo.name) === -1) {
                    return true;
                }
            }).slice(0, 10);
            _this._showRepos();
        });
    },

    _showRepos: function() {
        // Created needed BEMJSON

        var reposBEMJSON = this.repos.map(function(repo) {

            return {
                block: 'github',
                elem: 'repo',
                content: '1111',
                info: {
                    name: repo.name,
                    url: repo.html_url
                }
            }
        });

        var html = BEMHTML.apply(reposBEMJSON)
        console.log(html);
    }

}));

});
