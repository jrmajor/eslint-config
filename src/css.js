import css from '@eslint/css';
import { defineConfig } from 'eslint/config';
import { tailwind4 } from 'tailwind-csstree';

export default defineConfig([
	{
		name: 'jrmajor/css',
		files: ['**/*.css'],
		language: 'css/css',
		plugins: { css },
		languageOptions: {
			syntax: tailwind4,
		},
		extends: [css.configs.recommended],
		rules: {
			'css/no-invalid-properties': ['error', { allowUnknownVariables: true }],
		},
	},
]);
