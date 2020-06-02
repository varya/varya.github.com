const path = require('path');

module.exports = {
  // components: './src/components/*/[A-Z]*.js',
  components: "./src/components/*/[A-Z]*.js",
  ignore: [
    "./src/components/Post/Share.js",
    "./src/components/Layout/Layout--base.js",
    "./src/components/Layout/Layout--page.js",
    "./src/components/Layout/Layout--post.js",
  ],
  webpackConfig: {
  resolve: {
    alias: {
      gatsby: path.join(__dirname, 'src/styleguide/gatsby-mock.js'),
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
            ].map(require.resolve),
            "plugins": [
              "babel-plugin-add-module-exports",
              "@babel/plugin-proposal-class-properties"
            ].map(require.resolve)
          }
        }
      },
	{
		test: /\.(jpe?g|png|gif|svg)$/i,
		use: [
			'url-loader?limit=10000',
			'img-loader'
		]
		},
// {
//     test: /\.yaml$/,
//     exclude: /node_modules/,
//     loaders: ['yaml-loader'].map(require.resolve),
//   },
{
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
{
  // Match woff2 in addition to patterns like .woff?v=1.1.1.
  test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
  use: {
    loader: "url-loader",
    options: {
      // Limit at 50k. Above that it emits separate files
      limit: 50000,

      // url-loader sets mimetype if it's passed.
      // Without this it derives it from the file extension
      mimetype: "application/font-woff",

      // Output below fonts directory
      name: "./fonts/[name].[ext]",
    }
  },
},
    ]
  }
  }
};
