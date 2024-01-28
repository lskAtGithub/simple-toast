import { defineConfig } from 'vite'
import typescript from '@rollup/plugin-typescript'
import babel from '@rollup/plugin-babel'

export default defineConfig({
  plugins: [
    typescript({
      target: 'esnext',
      emitDeclarationOnly: true,
    }),
    babel({
      extensions: ['.es6', '.es', '.mjs'],
    }),
  ],
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'MyLib',
      fileName: 'my-lib',
      formats: ['es', 'umd', 'cjs'],
    },
    rollupOptions: {
      external: [/\.es\.js$/],
    },
  },
})
