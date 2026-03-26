import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
	{
		name: 'jrmajor/base',
		linterOptions: {
			reportUnusedInlineConfigs: 'warn',
			reportUnusedDisableDirectives: 'warn',
		},
		rules: {
			'@stylistic/eol-last': 'warn',
			'@stylistic/linebreak-style': 'warn',
			'@stylistic/no-trailing-spaces': 'warn',
		},
	},
	globalIgnores([
		'vendor',
		'rolldown.config.*.js',
		'vite.config.[jt]s.timestamp-*',
	], 'jrmajor/ignores'),
]);
