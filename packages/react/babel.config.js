const rootConfig = require('../../babel.config');

module.exports = {
  presets: [...rootConfig.presets, '@babel/preset-react'],
  plugins: [
    ...rootConfig.plugins,
    rootConfig.helpers.getTransformPlugin('react'),
  ],
};
