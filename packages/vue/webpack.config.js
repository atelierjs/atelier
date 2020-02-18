const isDev = process.env.NODE_ENV === 'development';

const merge = require('webpack-merge');
const common = require('../../webpack.common.js');

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
        use: 'vue-loader',
      },
    ],
  },
});
