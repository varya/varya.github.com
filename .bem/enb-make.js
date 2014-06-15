module.exports = function(config) {
    config.node('desktop.bundles/index', function(nodeConfig) {
    });
    config.nodeMask(/^desktop.bundles\/.*/, function(nodeConfig) {
    nodeConfig.addTechs([
        [ require('enb/techs/levels'), { levels: getLevels(config) } ],
        [ require('enb/techs/file-provider'), { target: '?.bemjson.js' } ],
        require('enb/techs/bemdecl-from-bemjson'),
        /*require('enb-modules/techs/deps-with-modules'),*/
        require('enb/techs/deps-old'),
        require('enb/techs/files'),
        require('enb-bemxjst/techs/bemhtml-old'),
        require('enb-bemxjst/techs/html-from-bemjson'),
        require('enb/techs/js'),
        require('enb/techs/css'),
        [ require('enb/techs/file-copy'), { sourceTarget: '?.js', destTarget: '?.min.js' } ],
        [ require('enb/techs/file-copy'), { sourceTarget: '?.css', destTarget: '?.min.css' } ]
    ]);

    nodeConfig.addTargets(['?.min.js', '?.min.css', '?.html']);
    });
};

function getLevels(config) {
    return [
    {path: 'libs/bem-core/common.blocks', check: false},
    {path: 'libs/bem-core/desktop.blocks', check: false},
    {path: 'libs/bem-components/common.blocks', check: false},
    {path: 'libs/bem-components/desktop.blocks', check: false},
    {path: 'libs/bem-components/design/common.blocks', check: false},
    {path: 'libs/bem-components/design/desktop.blocks', check: false},
    {path: 'libs/bouwdoos/desktop.blocks', check: false},
    {path: 'libs/bem-highlight.js/blocks', check: false},
    /*'common.blocks',*/
    'desktop.blocks'
    ].map(function(levelPath) { return config.resolvePath(levelPath); });
}

