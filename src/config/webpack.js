import { join } from 'path'

import Webpack from 'webpack'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import AssetsPlugin from 'assets-webpack-plugin'
import WriteFilePlugin from 'write-file-webpack-plugin'
import CopyWebpackPlugin from 'copy-webpack-plugin'

import paths from './paths'

const __DEV__ = process.env.NODE_ENV !== 'production'
const __PROD__ = process.env.NODE_ENV === 'production'

const config = {
  entry: {
    head: join(paths.webpackSource, 'js', 'head.js'),
    page: join(paths.webpackSource, 'js', 'page.js'),
    styles: join(paths.webpackSource, 'css', 'page.css'),
    index: join(paths.projectRoot, 'src', 'templates', 'Index.js'),
    post: join(paths.projectRoot, 'src', 'templates', 'Post.js')
  },
  devtool: __DEV__ ? '#cheap-module-eval-source-map' : false,
  output: {
    path: paths.webpackDestination,
    publicPath: paths.webpackPublicPath,
    filename: '[name]-[hash].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          babelrc: false,
          presets: ['es2015-node6', 'react', 'stage-0'],
        }
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
        })
      },
      {
        test: /\.png$/,
        loader: 'file-loader'
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'page-[hash].css',
      allChunks: true
    }),
    new AssetsPlugin({
      path: paths.webpackDestination,
      prettyPrint: __DEV__
    }),
    // Make sure everything is written to disk in dev, otherwise metalsmith would fail
    new WriteFilePlugin({
      test: /\.json$/,
      log: false
    }),
    new Webpack.LoaderOptionsPlugin({
      debug: true
    }),
    new CopyWebpackPlugin([
      {
        from: join(paths.projectRoot, 'src', 'data', 'font.css'),
        to: paths.webpackDestination
      },
      {
        from: join(paths.projectRoot, 'src', 'assets',  'favicon.ico'),
        to: paths.webpackDestination
      }
    ])
  ]
}

if (__DEV__) {
  config.plugins.push(new Webpack.optimize.CommonsChunkPlugin({
    name: 'loader',
    chunks: ['head', 'page', 'styles']
  }))
}

if (__PROD__) {
  config.plugins.push(new Webpack.LoaderOptionsPlugin({
    minimize: true
  }))
  config.plugins.push(new Webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    }
  }))
  config.plugins.push(new Webpack.optimize.AggressiveMergingPlugin())
  config.plugins.push(new Webpack.optimize.UglifyJsPlugin())
}

export default config
