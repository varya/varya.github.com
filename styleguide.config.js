var require = module.require('es6-require')(module);

module.exports = {
  webpackConfig: require('./src/config/webpack.babel.js'),
  components: 'src/templates/components/**/*.js'
};
