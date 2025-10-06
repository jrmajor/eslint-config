import { defineConfig } from 'eslint/config';
import ts from 'typescript-eslint';
import { jsConfig } from './js.js';

export const tsConfig = defineConfig({
	name: 'ts',
	extends: [
		ts.configs.recommended,
	],
	rules: {
		// eslint base rule now handles ts syntax
		'@typescript-eslint/no-unused-expressions': 'off',
		// @ts-expect-error
		'no-unused-expressions': jsConfig[1].rules['no-unused-expressions'],

		// disable some defaults
		'@typescript-eslint/ban-ts-comment': 'off',
		'@typescript-eslint/no-explicit-any': 'off',

		// custom
		'@typescript-eslint/array-type': ['warn', { default: 'array-simple', readonly: 'array-simple' }],
		'@typescript-eslint/consistent-generic-constructors': 'warn',
		'@typescript-eslint/consistent-indexed-object-style': 'warn',
		'@typescript-eslint/consistent-type-assertions': 'warn',
		'@typescript-eslint/prefer-for-of': 'warn',
		'@typescript-eslint/prefer-function-type': 'warn',
	},
});
