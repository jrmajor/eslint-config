import { defineConfig } from 'eslint/config';
import { createNextImportResolver } from 'eslint-import-resolver-next';
import importX from 'eslint-plugin-import-x';
import { orderConfig } from './order.js';

export const importsConfig = defineConfig({
	name: 'imports',
	extends: [
		importX.flatConfigs.typescript,
	],
	rules: {
		'import-x/export': 'error',
		'import-x/extensions': ['warn', 'ignorePackages', { ts: 'never' }],
		'import-x/first': 'warn',
		// considerComments handles comments after and between the same
		'import-x/newline-after-import': 'warn',
		'import-x/no-absolute-path': 'error',
		// causes parse errors in svelte plugin
		'import-x/no-cycle': 'off',
		// broken for svelte subpackages
		'import-x/no-duplicates': 'off',
		'import-x/no-empty-named-blocks': 'warn',
		'import-x/no-extraneous-dependencies': 'error',
		'import-x/no-mutable-exports': 'error',
		'import-x/no-self-import': 'error',
		'import-x/no-useless-path-segments': 'warn',
		'import-x/no-named-default': 'warn',
		'import-x/order': ['warn', orderConfig],
	},
	settings: {
		'import-x/resolver-next': [createNextImportResolver()],
	},
});
