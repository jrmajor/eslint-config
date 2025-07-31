/** @type {import('eslint-plugin-import-x/rules/order').Options} */
export const orderConfig = {
	alphabetize: { order: 'asc' },
	named: { enabled: true, types: 'types-last' },
	'newlines-between': 'never',
	groups: [
		'builtin',
		'external',
		'internal',
		'unknown',
		'parent',
		'sibling',
		'index',
		'object',
	],
	pathGroups: [
		{ pattern: 'svelte', group: 'external', position: 'before' },
		{ pattern: 'svelte/**', group: 'external', position: 'before' },
		{ pattern: '@/types/**', group: 'internal', position: 'after' },
		{ pattern: '@/helpers/**', group: 'internal', position: 'after' },
		{ pattern: '@/Layouts/**', group: 'internal', position: 'after' },
		{ pattern: '@/Components/**', group: 'internal', position: 'after' },
	],
	pathGroupsExcludedImportTypes: ['builtin'],
	warnOnUnassignedImports: true,
};
