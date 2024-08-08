import swc from 'unplugin-swc';
/// <reference types="vitest" />
import { configDefaults, defineConfig } from 'vitest/config';

export default defineConfig({
	test: {
		environment: 'node', // Ambiente de teste definido como Node
		globals: true, // Ativar variáveis globais de teste
		include: ['**/*.e2e-spec.ts', '**/*.e2e-test.ts'],
		exclude: [...configDefaults.exclude, 'dist/**'], // Excluir a pasta dist e os padrões do Vitest
		root: './',
		alias: {
			'@src': './src',
			'@test': './test',
		},
	},
	resolve: {
		alias: {
			'@src': './src',
			'@test': './test',
		},
	},
	plugins: [swc.vite()],
});
