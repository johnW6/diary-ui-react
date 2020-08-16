const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].bundle.js',
    chunkFilename: '[name].chunk.js',
    publicPath: '/',
  },
  devServer: {
    stats: 'errors-only',
    port: 3000,
    historyApiFallback: true,
    open: true,
    overlay: true,
    clientLogLevel: 'trace',
    onListening: (server) => {
      const { port } = server.listeningApp.address();
      console.log('Starting the development server on port: ', port, '\n');
    },
  },
  devtool: 'inline-source-map',
});
