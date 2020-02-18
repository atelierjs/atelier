const path = require('path');

const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  mode: isDev ? 'development' : 'production',
  output: {
    path: path.resolve('dist'),
    filename: '[name].[chunkhash:8].js',
  },
  resolve: {
    // alias: {
    //   '@': path.resolve(__dirname, './src'),
    // },
    alias: {
      '@': path.resolve('src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
};
