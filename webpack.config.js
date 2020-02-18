const merge = require('webpack-merge');
const common = require('./webpack.common.js');

// const isDev = process.env.NODE_ENV === 'development';

module.exports = merge(common, {
  entry: 'src/index.js',
  devtool: 'source-map',
});
