import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import scss from 'rollup-plugin-scss';
import pkg from './package.json';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

const name = 'RollupReact';

export default {
  input: './src/index.ts',

  // Specify here external modules which you don't want to include in your bundle (for instance: 'lodash', 'moment' etc.)
  // https://rollupjs.org/guide/en#external-e-external
  external: ['react'],

  plugins: [
    // Allows node_modules resolution
    resolve({ extensions }),

    // Allow bundling cjs modules. Rollup doesn't understand cjs
    commonjs(),

    // Compile TypeScript/JavaScript files
    babel({ extensions, include: ['src/**/*'] }),

    scss(),
  ],

  output: [
    {
      file: 'dist/' + pkg.main,
      format: 'cjs',
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
