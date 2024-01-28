import { defineConfig } from 'vite'
import typescript from '@rollup/plugin-typescript'

export default defineConfig({
  plugins: [typescript()],
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'MyLib',
      fileName: 'my-lib',
      formats: ['es', 'cjs'],
    },
  },
})
