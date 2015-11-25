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
            }).slice(0, 20);
            _this._showRepos();
        });
    },

    _showRepos: function() {
        // Created needed BEMJSON

        var reposBEMJSON = this.repos.map(function(repo) {

            return {
                block: 'github',
                elem: 'repo',
                info: {
                    name: repo.name,
                    url: repo.html_url
                }
            }
        });

        var html = BEMHTML.apply(reposBEMJSON);
        this.elem('body').append(html);
        this.delMod('not-ready');
    }

}));

});
