const path = require('path');
const { getAliasMap } = require('./config/alias');

const projectRoot = path.resolve(__dirname);

const alias = Object.fromEntries(
  Object.entries(getAliasMap()).map(([key, value]) => [
    key,
    path.resolve(projectRoot, value),
  ])
);

exports.onCreateWebpackConfig = ({
  stage,
  rules,
  loaders,
  plugins,
  actions,
}) => {
  actions.setWebpackConfig({
    resolve: {
      alias,
    },
  });
};
