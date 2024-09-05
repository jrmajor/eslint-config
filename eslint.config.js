import globals from 'globals';
import base from './src/base.js';

/** @type {import('eslint').Linter.Config[]} */
export default [
	...base,
	{
		languageOptions: {
			globals: globals.node,
		},
		rules: {
			'import/extensions': 'off',
		},
	},
];
