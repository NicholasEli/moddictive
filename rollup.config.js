import sourcemaps from 'rollup-plugin-sourcemaps';
import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
  input: './scripts/index.js',
  plugins: [sourcemaps()],
  output: [{ file: './assets/script.js', format: 'iife', sourcemap: true }],
  plugins: [nodeResolve()]
};
