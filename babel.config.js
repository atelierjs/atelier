module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-typescript'],
  plugins: [
    // '@babel/proposal-class-properties',
    // '@babel/proposal-object-rest-spread',
  ],
};

module.exports.helpers = {
  getTransformPlugin: function(name) {
    return [
      'transform-rename-import',
      {
        replacements: [
          {
            original: '@atelier/core/src',
            replacement: '@atelier/' + name + '/core',
          },
        ],
      },
    ];
  },
};
