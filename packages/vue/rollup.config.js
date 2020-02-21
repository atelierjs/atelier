import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import vue from 'rollup-plugin-vue';
import babel from 'rollup-plugin-babel';
import scss from 'rollup-plugin-scss';
import pkg from './package.json';

const extensions = ['.ts', '.tsx', '.vue'];

const name = 'RollupVue';

export default {
  input: './src/index.ts',

  // Specify here external modules which you don't want to include in your bundle (for instance: 'lodash', 'moment' etc.)
  // https://rollupjs.org/guide/en#external-e-external
  external: ['vue'],

  plugins: [
    // Allows node_modules resolution
    resolve({ extensions }),

    // Allow bundling cjs modules. Rollup doesn't understand cjs
    commonjs(),

    // Compile Vue files
    vue(),

    // Compile TypeScript/JavaScript files
    babel({ extensions, include: ['src/**/*'], runtimeHelpers: true }),

    scss(),
  ],

  output: [
    {
      file: 'dist/' + pkg.main,
      format: 'cjs',
      // format: 'esm',
    },
    // {
    //   file: pkg.module,
    //   format: 'es',
    // },
    // {
    //   file: pkg.browser,
    //   format: 'iife',
    //   name,

    //   // https://rollupjs.org/guide/en#output-globals-g-globals
    //   globals: {},
    // },
  ],
};
