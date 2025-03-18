import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import json from '@rollup/plugin-json';

export default {
    input: 'src/index.ts',
    output: [
      {
        file: 'dist/index.js', 
        format: 'esm',
        sourcemap: true
      },
      {
        file: 'dist/index.cjs', 
        format: 'cjs',
        sourcemap: true
      }
    ],
    plugins: [
      resolve(),
      commonjs(),
      json({ include: '**/*.json', exclude: '**/*.geojson' }),
      typescript({ tsconfig: './tsconfig.json' })
    ],
    external: ['leaflet']
  };