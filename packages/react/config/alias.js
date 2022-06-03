const getAliasMap = (prefix = `src`) => ({
  '@components': `${prefix}/components`,
  '@hooks': `${prefix}/hooks`,
});

module.exports.getAliasMap = getAliasMap;
