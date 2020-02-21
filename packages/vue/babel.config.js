const rootConfig = require('../../babel.config');

module.exports = {
  presets: [...rootConfig.presets, '@vue/babel-preset-app'],
  plugins: [
    ...rootConfig.plugins,
    rootConfig.helpers.getTransformPlugin('vue'),
  ],
};
