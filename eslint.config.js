import { defineConfig } from 'eslint/config';
import globals from 'globals';
import base, { js } from '@jrmajor/eslint-config';

export default defineConfig([
	base,
	js,
	{
		languageOptions: {
			globals: globals.node,
		},
		rules: {
			'import/extensions': 'off',
		},
	},
]);
