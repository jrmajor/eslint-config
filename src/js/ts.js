import { defineConfig } from 'eslint/config';
import ts from 'typescript-eslint';

export const tsConfig = defineConfig({
	name: 'ts',
	extends: [
		// @ts-expect-error
		ts.configs.recommended,
	],
	rules: {
		'@typescript-eslint/ban-ts-comment': 'off',
		'@typescript-eslint/no-explicit-any': 'off',

		'@typescript-eslint/array-type': ['warn', { default: 'array-simple', readonly: 'array-simple' }],
		'@typescript-eslint/consistent-generic-constructors': 'warn',
		'@typescript-eslint/consistent-indexed-object-style': 'warn',
		'@typescript-eslint/consistent-type-assertions': 'warn',
		'@typescript-eslint/prefer-for-of': 'warn',
		'@typescript-eslint/prefer-function-type': 'warn',
	},
});
