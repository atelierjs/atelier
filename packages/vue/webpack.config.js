const VueLoaderPlugin = require('vue-loader/lib/plugin');

const merge = require('webpack-merge');
const common = require('../../webpack.common.js');

const isDev = process.env.NODE_ENV === 'development';

module.exports = merge(common, {
  entry: {
    app: './src/index.ts',
  },
  resolve: {
    extensions: ['.js', '.ts', '.vue'],
    alias: {
      vue$: isDev ? 'vue/dist/vue.runtime.js' : 'vue/dist/vue.runtime.min.js',
    },
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        use: {
          loader: 'vue-loader',
          options: {
            presets: ['@vue/babel-preset-app'],
          },
        },
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-typescript'],
          },
        },
      },
    ],
  },
  plugins: [new VueLoaderPlugin()],
});
