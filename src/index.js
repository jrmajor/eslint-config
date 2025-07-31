/* eslint-disable import-x/no-mutable-exports */

export { default } from './base.js';

export { default as js } from './js/index.js';

/** @type {import('eslint').Linter.Config[]} */
let svelte;

// @ts-expect-error
svelte = 'eslint-plugin-svelte must be installed to import { svelte } from @jrmajor/eslint-config';
try {
	await import('eslint-plugin-svelte');
	svelte = (await import('./svelte.js')).default;
} catch {
}

export { svelte };
