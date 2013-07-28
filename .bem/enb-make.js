module.exports = function(config) {

    config.node('s/desktop.pages/index', function(nodeConfig) {
    });

    config.nodeMask(/^s\/desktop.pages\/.*/, function(nodeConfig) {
        nodeConfig.addTechs([
            [ require('enb/techs/levels'), { levels: getLevels(config) } ],
            [ require('enb/techs/file-provider'), { target: '?.bemjson.js' } ],
            require('enb/techs/bemdecl-from-bemjson'),
            require('enb-modules/techs/deps-with-modules'),
            require('enb/techs/files'),
            require('bh/techs/bh-server'),
            require('enb/techs/html-from-bemjson'),
             [ require('enb/techs/js'), { sourceSuffixes: ['vanilla.js', 'js'], target: '?.pre.js'} ],
            [ require('enb-modules/techs/prepend-modules'), { target: '?.js', source: '?.pre.js' } ],
            require('enb/techs/css-stylus'),
            [ require('enb/techs/borschik'), { sourceTarget: '?.js', destTarget: '?.min.js', minify: true } ],
            [ require('enb/techs/borschik'), { sourceTarget: '?.css', destTarget: '?.min.css', minify: true } ]
            ])
        nodeConfig.addTargets(['?.min.js', '?.min.css', '?.html']);
    });

};

function getLevels(config) {
  return [
    {path: 's/libs/bem-core/common.blocks', check: false},
    {path: 's/libs/bem-core/desktop.blocks', check: false},
    {path: 's/libs/bouwdoos/desktop.blocks', check: false},
    's/desktop.blocks'
  ].map(function(levelPath) { return config.resolvePath(levelPath); });
}
