/// <reference types="vitest" />
import { configDefaults, defineConfig } from 'vitest/config';

export default defineConfig({
	test: {
		environment: 'node',
		globals: true,
		include: ['**/*.{test,spec}.?(c|m)[jt]s?(x)', 'test/**/*.e2e-spec.ts'],
		exclude: [...configDefaults.exclude, 'dist/**'],
		dir: '.',
	},
});