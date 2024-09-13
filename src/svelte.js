import svelte from 'eslint-plugin-svelte';
import ts from 'typescript-eslint';

/** @type {import('eslint').Linter.Config[]} */
export default [
	...svelte.configs['flat/recommended'],
	{
		name: 'jrmajor/svelte',
		rules: {
			'svelte/valid-compile': 'off',
			'svelte/block-lang': ['error', { script: 'ts', style: null }],
			'svelte/no-at-html-tags': 'off',
			'svelte/no-dupe-use-directives': 'error',
			'svelte/no-ignored-unsubscribe': 'error',
			'svelte/no-useless-mustaches': 'warn',
			'svelte/require-optimized-style-attribute': 'error',
			'svelte/valid-each-key': 'error',
			'svelte/valid-prop-names-in-kit-pages': 'error',

			// stylistic
			'svelte/derived-has-same-inputs-outputs': 'error',
			'svelte/first-attribute-linebreak': 'warn',
			'svelte/html-closing-bracket-spacing': ['warn', {
				startTag: 'never',
				endTag: 'never',
				selfClosingTag: 'never',
			}],
			'svelte/html-quotes': 'warn',
			'svelte/html-self-closing': ['warn', { void: 'never', normal: 'never' }],
			'svelte/max-attributes-per-line': ['warn', { singleline: 8 }],
			'svelte/mustache-spacing': 'off', // false positives
			'svelte/no-spaces-around-equal-signs-in-attribute': 'warn',
			'svelte/prefer-class-directive': 'error',
			'svelte/prefer-style-directive': 'error',
			'svelte/shorthand-attribute': 'off', // false positives
			'svelte/shorthand-directive': 'warn',
			'svelte/sort-attributes': ['warn', {
				order: [
					'this',
					'bind:this',
					'/^use:/u',
					{ match: ['!/^(?:this|bind:this|use:)$/u'], sort: 'ignore' },
					'/^transition:/u',
					'/^in:/u',
					'/^out:/u',
					'/^animate:/u',
					'class',
					'/^class:/u',
					'style',
					'/^style:/u',
					'/^--/u', // --style-props
				],
			}],
			'svelte/spaced-html-comment': 'warn',
		},
	},
	{
		name: 'jrmajor/svelte-specific',
		files: ['**/*.svelte'],
		languageOptions: {
			parserOptions: {
				parser: ts.parser,
				svelteFeatures: {
					experimentalGenerics: true,
				},
			},
		},
		rules: {
			'@stylistic/indent': 'off',
			'@stylistic/indent-binary-ops': 'off',
			'svelte/indent': ['warn', { indent: 'tab', alignAttributesVertically: true }],
			'@stylistic/no-trailing-spaces': 'off',
			'svelte/no-trailing-spaces': 'warn',
		},
	},
];
