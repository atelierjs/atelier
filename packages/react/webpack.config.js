const path = require('path');

const merge = require('webpack-merge');
const common = require('../../webpack.common.js');

const isDev = process.env.NODE_ENV === 'development';

module.exports = merge(common, {
  entry: {
    app: './src/index.ts',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-typescript',
              '@babel/preset-react',
            ],
          },
        },
      },
    ],
  },
});
