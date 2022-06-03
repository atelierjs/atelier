const getAliasMap = (prefix = `src`) => ({
  '@components': `${prefix}/components`,
  '@context': `${prefix}/context`,
  '@hooks': `${prefix}/hooks`,
  '@styles': `${prefix}/styles`,
  '@utils': `${prefix}/utils`,
  '@views': `${prefix}/views`,
});

module.exports.getAliasMap = getAliasMap;
