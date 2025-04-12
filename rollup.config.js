import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import dts from 'rollup-plugin-dts';

const packageJson = require('./package.json');
const isProduction = process.env.NODE_ENV === 'production';

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: !isProduction,
        name: '@marshal604/react-game-dialogue'
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: !isProduction
      }
    ],
    plugins: [
      external(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: './tsconfig.json' }),
      postcss({
        config: {
          path: './postcss.config.js'
        },
        extensions: ['.css'],
        modules: true,
        extract: 'index.css',
        minimize: true,
        inject: {
          insertAt: 'top'
        },
        gzipSize: true,
        brotliSize: true,  
      }),
      terser(),
    ]
  },
  {
    input: 'src/index.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts()],
    external: [/\.css$/]
  }
]; 