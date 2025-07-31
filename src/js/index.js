import { defineConfig } from 'eslint/config';
import { importsConfig } from './imports.js';
import { jsConfig } from './js.js';
import { stylisticConfig } from './stylistic.js';
import { tsConfig } from './ts.js';

export default defineConfig([
	{
		name: 'jrmajor/js',
		files: [
			'**/*.js',
			'**/*.cjs',
			'**/*.mjs',
			'**/*.ts',
			'**/*.cts',
			'**/*.mts',
			'**/*.svelte',
		],
		extends: [
			jsConfig,
			tsConfig,
			importsConfig,
			stylisticConfig,
		],
	},
]);
