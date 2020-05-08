//process.env.NODE_ENV="test"
import nodeResolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
//import peerDepsExternal from 'rollup-plugin-peer-deps-external';
//import postcss from 'rollup-plugin-postcss';
//import dts from 'rollup-plugin-dts';
//import { terser } from 'rollup-plugin-terser';

import css from 'rollup-plugin-css-porter';
//import svg from 'rollup-plugin-svg';
import uglify from 'rollup-plugin-uglify-es';
import html from 'rollup-plugin-bundle-html';
import cleaner from 'rollup-plugin-cleaner';
//import md from 'rollup-plugin-md';

import {createFilter} from "rollup-pluginutils";
function string(opts = {}) {
    const filter = createFilter(opts.include, opts.exclude);
    return {
        name: "string",
        transform(code, id) {
        if (filter(id))
            return { code:`export default ${JSON.stringify(code)};`, map:{ mappings:""} };
        }
    };
}

const namedExports= {'node_modules/react/index.js':['Component','useState',]}
const plugins = [
  //peerDepsExternal(),
  //postcss({ extract: false }),
  //terser()
  ///nodeResolve({ jsnext: true, main: true }), // Locate and bundle third-party dependencies in node_modules
  ///commonjs({ include: 'node_modules/**' }),  // Convert CommonJS modules to ES6

  replace({ 'process.env.NODE_ENV': JSON.stringify('production') }), //Replace strings in files while bundling
  babel({ runtimeHelpers: true, exclude: 'node_modules/**', presets:['@babel/env','@babel/preset-react']}),// Compile your files with Babel
  nodeResolve({ browser: true }),
  commonjs({namedExports}),

  cleaner({  targets: ['build/js/', 'build/css/'], }),
  css({ dest: 'build/css/bundle-[hash].css', raw:false, minified:true }),
  html({ template:'public/index.html', dest:'build', filename:'index.html', inject:'body', }),
  string({ include:"**/*.md", exclude:["**/index.md"] }),
];

import pkg from './package.json';
const dependencies = [...Object.keys(pkg.dependencies),...Object.keys(pkg.devDependencies)]||[];

export default {
    input: './docs/index.js',
    output:[
        { file: "public/index.js", format: 'cjs' },],
    external:dependencies,
    plugins,
};
