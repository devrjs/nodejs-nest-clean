import { defineConfig } from 'vitest/config';
import { resolve } from 'node:path';

export default defineConfig({
  test: {
    globals: true,
    root: './',
    include: ['**/*.spec.ts'],
  },
  esbuild: {
    tsconfigRaw: {
      tsconfigFile: resolve(__dirname, 'tsconfig.json'),
    },
  },
});
