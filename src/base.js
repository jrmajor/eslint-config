import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
	{
		name: 'jrmajor/base',
		linterOptions: {
			reportUnusedInlineConfigs: 'warn',
			reportUnusedDisableDirectives: 'warn',
		},
	},
	globalIgnores([
		'vendor',
		'rolldown.config.*.js',
		'vite.config.[jt]s.timestamp-*',
	], 'jrmajor/ignores'),
]);
