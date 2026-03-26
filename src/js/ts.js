import { defineConfig } from 'eslint/config';
import ts from 'typescript-eslint';

export const tsConfig = defineConfig({
	name: 'ts',
	extends: [
		ts.configs.recommended,
	],
	rules: {
		// disable some defaults
		'@typescript-eslint/ban-ts-comment': 'off',
		'@typescript-eslint/no-explicit-any': 'off',

		// custom
		'@typescript-eslint/array-type': ['warn', { default: 'array-simple', readonly: 'array-simple' }],
		'@typescript-eslint/consistent-generic-constructors': 'warn',
		'@typescript-eslint/consistent-indexed-object-style': 'warn',
		'@typescript-eslint/consistent-type-assertions': 'warn',
		'@typescript-eslint/no-unused-expressions': ['warn', { allowTernary: true }],
		'@typescript-eslint/prefer-for-of': 'warn',
		'@typescript-eslint/prefer-function-type': 'warn',

		'no-unused-private-class-members': 'off',
		'@typescript-eslint/no-unused-private-class-members': 'error',
	},
});
