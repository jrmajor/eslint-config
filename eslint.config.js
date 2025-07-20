import { defineConfig } from 'eslint/config';
import globals from 'globals';
import base from '@jrmajor/eslint-config';

export default defineConfig([
	base,
	{
		languageOptions: {
			globals: globals.node,
		},
		rules: {
			'import/extensions': 'off',
		},
	},
]);
