import { defineConfig } from 'eslint/config';
import { importsConfig } from './imports.js';
import { jsConfig } from './js.js';
import { stylisticConfig } from './stylistic.js';
import { tsConfig } from './ts.js';

export default defineConfig([
	{
		name: 'jrmajor/js',
		extends: [
			jsConfig,
			tsConfig,
			importsConfig,
			stylisticConfig,
		],
	},
]);
