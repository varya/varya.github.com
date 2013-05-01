module.exports = function(config) {

    config.node('s/pages/index', function(nodeConfig) {
    });

    config.nodeMask(/^s\/pages\/.*/, function(nodeConfig) {
        nodeConfig.addTechs([
            [ require('enb/techs/levels'), { levels: getLevels(config) } ],
            [ require('enb/techs/file-provider'), { target: '?.bemjson.js' } ],
            require('enb/techs/bemdecl-from-bemjson'),
            require('enb/techs/deps-old'),
            require('enb/techs/files'),
            require('enb/techs/bemhtml'),
            require('enb/techs/html-from-bemjson'),
            require('enb/techs/js'),
            require('enb/techs/css'),
            [ require('enb/techs/borschik'), { sourceTarget: '?.js', destTarget: '?.min.js', minify: true } ],
            [ require('enb/techs/borschik'), { sourceTarget: '?.css', destTarget: '?.min.css', minify: true } ]
            ])
        nodeConfig.addTargets(['?.min.js', '?.min.css', '?.html']);
    });

};

function getLevels(config) {
  return [
    {path: 's/bem-bl/blocks-common', check: false},
    {path: 's/bem-bl/blocks-desktop', check: false},
    's/desktop.blocks'
  ].map(function(levelPath) { return config.resolvePath(levelPath); });
}
