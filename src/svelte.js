import ts from 'typescript-eslint';
import svelte from 'eslint-plugin-svelte';

/** @type {import('eslint').Linter.Config[]} */
export default [
	...svelte.configs['flat/recommended'],
	{
		rules: {
			'svelte/valid-compile': 'off',
			'svelte/block-lang': ['error', { script: 'ts', style: 'postcss' }],
			'svelte/no-at-html-tags': 'off',
			'svelte/no-dupe-use-directives': 'error',
			'svelte/no-ignored-unsubscribe': 'error',
			'svelte/no-useless-mustaches': 'error',
			'svelte/require-optimized-style-attribute': 'error',
			'svelte/valid-each-key': 'error',
			'svelte/valid-prop-names-in-kit-pages': 'error',

			// stylistic
			'svelte/derived-has-same-inputs-outputs': 'error',
			'svelte/first-attribute-linebreak': 'error',
			'svelte/html-closing-bracket-spacing': ['error', {
				startTag: 'never',
				endTag: 'never',
				selfClosingTag: 'never',
			}],
			'svelte/html-quotes': 'error',
			// todo: https://github.com/sveltejs/eslint-plugin-svelte/issues/837
			// 'svelte/html-self-closing': ['error', { void: 'never', normal: 'never' }],
			'svelte/max-attributes-per-line': ['error', { singleline: 8 }],
			'svelte/mustache-spacing': 'off', // false positives
			'svelte/no-spaces-around-equal-signs-in-attribute': 'error',
			'svelte/prefer-class-directive': 'error',
			'svelte/prefer-style-directive': 'error',
			'svelte/shorthand-attribute': 'off', // false positives
			'svelte/shorthand-directive': 'error',
			'svelte/sort-attributes': ['error', {
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
			'svelte/spaced-html-comment': 'error',
		},
	},
	{
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
			'svelte/indent': ['error', { indent: 'tab', alignAttributesVertically: true }],
			'@stylistic/no-trailing-spaces': 'off',
			'svelte/no-trailing-spaces': 'error',
		},
	},
];
