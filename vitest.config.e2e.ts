import { resolve } from 'node:path'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    root: './',
    include: ['**/*.e2e-spec.ts'],
  },
  esbuild: {
    tsconfigRaw: {
      tsconfigFile: resolve(__dirname, 'tsconfig.json'),
    },
  },
})
