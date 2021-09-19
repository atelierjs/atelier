import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
// import scss from 'rollup-plugin-scss';
// import postcss from 'postcss';
// import autoprefixer from 'autoprefixer';
// import { writeFileSync } from 'fs';

import pkg from './package.json';

const extensions = ['.ts', '.tsx'];

const external = Object.keys(pkg.devDependencies);

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
    resolve({
      extensions,
    }),
    babel({
      extensions, // Compile our TypeScript files
      babelHelpers: 'inline', // Place babel helper functions in the same file they were used
      include: extensions.map((ext) => `src/**/*${ext}`),
    }),
    // scss({
    //   failOnError: true,
    //   // include: ['src/**/*.scss'],
    //   // include: ['src/**/*.tsx'],
    //   output: 'dist/bundle.css',
    //   // output: function (styles, styleNodes) {
    //   //   console.log(styles);
    //   //   console.log(styleNodes);
    //   //   writeFileSync('bundle.css', styles);
    //   // },
    //   extract: false,
    //   outputStyle: 'compressed',
    //   processor: () => postcss([autoprefixer()]),
    //   sourceMap: true,
    // }),
  ],
  external, // https://rollupjs.org/guide/en/#peer-dependencies
};

export default config;
