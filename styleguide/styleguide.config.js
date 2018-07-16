module.exports = {
  components: '../src/components/*/[A-Z]*.js',
  webpackConfig: {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            "presets": [
                "babel-preset-es2015",
                "babel-preset-es2017",
                "babel-preset-env",
                "babel-preset-react"
            ].map(require.resolve),
            "plugins": [
               [
                 require.resolve("babel-plugin-import"),
                 {
                   libraryName: "antd",
                   style: "css"
                }
              ],
              require.resolve("babel-plugin-dynamic-import-webpack"),
              require.resolve("babel-plugin-transform-class-properties"),
              require.resolve("babel-plugin-transform-object-rest-spread")
            ]
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
{
      test: /\.yaml$/,
        exclude: /node_modules/,
      loaders: ['yaml-loader'].map(require.resolve),
    },
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
  },
  template: {
    head: {
      links: [
        {
          rel: 'stylesheet',
          type: 'text/css',
          href: 'http://static.elisa.fi/components/pattern-library/6.1.0/release/css/elisa-styleguide-min.css'
        }
      ]
    }
  }
};
