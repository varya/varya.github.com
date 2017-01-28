module.exports = {
  output: {
    libraryTarget: 'commonjs2'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: [
          'style-loader',
          'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
        ]
      },
      {
        test: /\.png$/,
        loader: 'file-loader'
      }
    ]
  }
};
