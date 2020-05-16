var path = require('path');
var SRC_DIR = path.join(__dirname, '/client/src');
var DIST_DIR = path.join(__dirname, '/client/dist');

const CompressionPlugin = require('compression-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  module: {

    rules: [
      {
        test: /\.jsx?/,
        include: SRC_DIR,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  },
  //  optimization: {
  //   splitChunks: {
  //     chunks: 'async',
  //     minSize: 30000,
  //     maxSize: 0,
  //     minChunks: 1,
  //     maxAsyncRequests: 6,
  //     maxInitialRequests: 4,
  //     automaticNameDelimiter: '~',
  //     cacheGroups: {
  //       defaultVendors: {
  //         test: /[\\/]node_modules[\\/]/,
  //         priority: -10
  //       },
  //       default: {
  //         minChunks: 2,
  //         priority: -20,
  //         reuseExistingChunk: true
  //       }
  //     }
  //   }
  // },
    plugins: [
  new webpack.DefinePlugin({ //<--key to reduce React's size
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    }
  }),
  new CompressionPlugin({
    algorithm: "gzip",
    test: /\.js$|\.css$|\.html$/,
    threshold: 10240,
    minRatio: 0.8
  })

//   new webpack.optimize.CommonsChunkPlugin('common'),
//   new webpack.optimize.DedupePlugin(),
//   new webpack.optimize.UglifyJsPlugin(),
//   new webpack.optimize.AggressiveMergingPlugin(),
//   new CompressionPlugin({
//     asset: "[path].gz[query]",
//     algorithm: "gzip",
//     test: /\.js$|\.css$|\.html$/,
//     threshold: 10240,
//     minRatio: 0.8
// })

 ],
};