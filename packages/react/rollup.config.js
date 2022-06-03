import path from 'path';

import alias from '@rollup/plugin-alias';
import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

import pkg from './package.json';

const { getAliasMap } = require('./config/alias');
const projectRoot = path.resolve(__dirname);

const extensions = ['.ts', '.tsx'];
const externalDev = Object.keys(pkg.devDependencies);
const externalRuntime = Object.keys(pkg.dependencies);

const config = {
  input: ['src/index.ts'],
  output: {
    dir: 'dist',
    format: 'esm',
    preserveModules: true, // This one is important for treeshaking features of our library
    preserveModulesRoot: 'src',
    sourcemap: true,
  },
  plugins: [
    peerDepsExternal(), // https://rollupjs.org/guide/en/#peer-dependencies
    resolve({ extensions }),
    alias({
      entries: Object.entries(getAliasMap()).map(([find, replacement]) => ({
        find,
        replacement: path.resolve(projectRoot, replacement),
      })),
    }),
    babel({
      extensions, // Compile our TypeScript files
      babelHelpers: 'inline', // Place babel helper functions in the same file they were used
      include: extensions.map((ext) => `src/**/*${ext}`),
    }),
  ],
  external: [...externalDev, ...externalRuntime], // https://rollupjs.org/guide/en/#peer-dependencies
};

export default config;
