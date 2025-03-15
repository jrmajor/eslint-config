import { defineConfig } from 'eslint/config';
import globals from 'globals';
import base from './src/base.js';

export default defineConfig([
	...base,
	{
		languageOptions: {
			globals: globals.node,
		},
		rules: {
			'import/extensions': 'off',
		},
	},
]);
