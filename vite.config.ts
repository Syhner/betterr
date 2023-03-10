import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    coverage: {
      reporter: process.env.CI ? ['text', 'json-summary'] : ['text', 'html'],
    },
  },
});
