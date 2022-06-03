const path = require('path');
const { getAliasMap } = require('./config/alias');

const projectRoot = path.resolve(__dirname);

const alias = Object.fromEntries(
  Object.entries(getAliasMap()).map(([key, value]) => [
    key,
    path.resolve(projectRoot, value),
  ])
);

module.exports = {
  webpack: {
    alias,
    configure: {
      module: {
        exprContextCritical: false,
      },
    },
  },
};
