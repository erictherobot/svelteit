import svelte from 'rollup-plugin-svelte'
import resolve from '@rollup/plugin-node-resolve'
import css from 'rollup-plugin-css-porter'
import autoPreprocess from 'svelte-preprocess'

import pkg from './package.json'

const name = pkg.name
  .replace(/^(@\S+\/)?(svelte-)?(\S+)/, '$3')
  .replace(/^\w/, m => m.toUpperCase())
  .replace(/-\w/g, m => m[1].toUpperCase())

export default {
  input: 'src/index.js',
  output: [
    { file: pkg.module, format: 'es' },
    { file: pkg.main, format: 'umd', name },
  ],
  plugins: [
    svelte({
      preprocess: autoPreprocess(),
    }),
    resolve(),
    css({
      raw: 'dist/css/svelteit.css',
      minified: 'dist/css/svelteit.min.css',
    }),
  ],
}
