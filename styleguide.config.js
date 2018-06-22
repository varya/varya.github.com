var require = module.require('es6-require')(module);

module.exports = {
  components: './src/templates/**/*.js',
  webpackConfig: require('./src/config/webpack.js'),
};

