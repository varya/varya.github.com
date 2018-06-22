var require = module.require('es6-require')(module);

module.exports = {
  components: './src/templates/**/[A-Z]*.js',
  webpackConfig: require('./src/config/webpack.js'),
};

