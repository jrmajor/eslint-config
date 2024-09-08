/** @import { ESLint, Linter } from 'eslint' */
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { fixupPluginRules } from '@eslint/compat';
import { FlatCompat } from '@eslint/eslintrc';
// eslint-disable-next-line import/no-extraneous-dependencies
import js from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import ts from 'typescript-eslint';

const compat = new FlatCompat({
	baseDirectory: dirname(fileURLToPath(import.meta.url)),
	recommendedConfig: js.configs.recommended,
});

/**
 * @param {string} name
 * @param {string} alias
 * @returns {ESLint.Plugin}
 */
function legacyPlugin(name, alias) {
	const plugin = compat.plugins(name)[0]?.plugins?.[alias];

	return fixupPluginRules(/** @type {ESLint.Plugin} */ (plugin));
}

/** @type {Linter.Config[]} */
export default [
	js.configs.recommended,
	...(/** @type {Linter.Config[]}} */ (ts.configs.recommended)),
	...compat.extends('plugin:import/typescript'),
	{
		name: 'jrmajor/js',
		plugins: {
			'@stylistic': stylistic,
			import: legacyPlugin('eslint-plugin-import', 'import'),
		},
		rules: {
			'arrow-body-style': 'warn',
			'block-scoped-var': 'error',
			'default-case-last': 'error',
			'default-param-last': 'error',
			'dot-notation': 'warn',
			'func-names': ['warn', 'as-needed'],
			'func-style': ['warn', 'declaration'],
			'grouped-accessor-pairs': 'warn',
			'no-await-in-loop': 'error',
			'no-console': 'warn',
			'no-constructor-return': 'error',
			'no-else-return': 'warn',
			'no-implicit-coercion': ['error', { boolean: false }],
			'no-implied-eval': 'error',
			'no-lone-blocks': 'warn',
			'no-lonely-if': 'warn',
			'no-multi-str': 'warn',
			'no-negated-condition': 'warn',
			'no-nested-ternary': 'error',
			'no-throw-literal': 'error',
			'no-undefined': 'error',
			'no-underscore-dangle': 'error',
			'no-unneeded-ternary': 'warn',
			'no-useless-concat': 'warn',
			'no-useless-rename': 'error',
			'no-useless-return': 'warn',
			'no-var': 'error',
			'object-shorthand': 'warn',
			'operator-assignment': 'warn',
			'prefer-arrow-callback': 'warn',
			'prefer-destructuring': ['warn', {
				VariableDeclarator: { array: true, object: true },
				AssignmentExpression: { array: false, object: false },
			}],
			'prefer-exponentiation-operator': 'warn',
			'prefer-template': 'warn',
			curly: ['warn', 'multi-line'],
			eqeqeq: 'error',
			yoda: 'warn',

			// stylistic
			'@stylistic/array-bracket-newline': ['warn', 'consistent'],
			'@stylistic/array-bracket-spacing': 'warn',
			'@stylistic/array-element-newline': ['warn', 'consistent'],
			'@stylistic/arrow-parens': 'warn',
			'@stylistic/arrow-spacing': 'warn',
			'@stylistic/block-spacing': 'warn',
			'@stylistic/brace-style': 'warn',
			'@stylistic/comma-dangle': ['warn', 'always-multiline'],
			'@stylistic/comma-spacing': 'warn',
			'@stylistic/comma-style': 'warn',
			'@stylistic/computed-property-spacing': 'warn',
			'@stylistic/dot-location': ['warn', 'property'],
			'@stylistic/eol-last': 'warn',
			'@stylistic/func-call-spacing': 'warn',
			'@stylistic/function-call-argument-newline': ['warn', 'consistent'],
			'@stylistic/function-call-spacing': 'warn',
			'@stylistic/function-paren-newline': ['warn', 'consistent'],
			'@stylistic/generator-star-spacing': 'warn',
			'@stylistic/implicit-arrow-linebreak': 'warn',
			'@stylistic/indent': ['warn', 'tab'],
			'@stylistic/indent-binary-ops': ['warn', 'tab'],
			'@stylistic/key-spacing': 'warn',
			'@stylistic/keyword-spacing': 'warn',
			'@stylistic/linebreak-style': 'warn',
			'@stylistic/lines-around-comment': 'warn',
			'@stylistic/lines-between-class-members': 'warn',
			'@stylistic/max-statements-per-line': 'warn',
			'@stylistic/member-delimiter-style': 'warn',
			'@stylistic/multiline-comment-style': ['warn', 'separate-lines'],
			'@stylistic/multiline-ternary': ['warn', 'always-multiline'],
			'@stylistic/new-parens': 'warn',
			'@stylistic/no-extra-semi': 'warn',
			'@stylistic/no-floating-decimal': 'warn',
			'@stylistic/no-mixed-operators': 'warn',
			'@stylistic/no-mixed-spaces-and-tabs': 'warn',
			'@stylistic/no-multi-spaces': 'warn',
			'@stylistic/no-multiple-empty-lines': 'warn',
			'@stylistic/no-trailing-spaces': 'warn',
			'@stylistic/no-whitespace-before-property': 'warn',
			'@stylistic/nonblock-statement-body-position': 'warn',
			'@stylistic/object-curly-newline': ['warn', { consistent: true }],
			'@stylistic/object-curly-spacing': ['warn', 'always'],
			'@stylistic/object-property-newline': ['warn', { allowAllPropertiesOnSameLine: true }],
			'@stylistic/operator-linebreak': ['warn', 'before'],
			'@stylistic/padded-blocks': ['warn', 'never'],
			'@stylistic/quote-props': ['warn', 'as-needed'],
			'@stylistic/quotes': ['warn', 'single'],
			'@stylistic/rest-spread-spacing': 'warn',
			'@stylistic/semi': 'warn',
			'@stylistic/semi-spacing': 'warn',
			'@stylistic/semi-style': 'warn',
			'@stylistic/space-before-blocks': 'warn',
			'@stylistic/space-before-function-paren': ['warn', { named: 'never' }],
			'@stylistic/space-in-parens': 'warn',
			'@stylistic/space-infix-ops': 'warn',
			'@stylistic/space-unary-ops': 'warn',
			'@stylistic/spaced-comment': 'warn',
			'@stylistic/switch-colon-spacing': 'warn',
			'@stylistic/template-curly-spacing': 'warn',
			'@stylistic/template-tag-spacing': 'warn',
			'@stylistic/type-annotation-spacing': 'warn',
			'@stylistic/type-generic-spacing': 'warn',
			'@stylistic/type-named-tuple-spacing': 'warn',
			'@stylistic/yield-star-spacing': 'warn',

			// imports
			'import/export': 'error',
			'import/extensions': ['warn', 'ignorePackages', { ts: 'never' }],
			'import/first': 'warn',
			// considerComments handles comments after and between the same
			'import/newline-after-import': 'warn',
			'import/no-absolute-path': 'error',
			'import/no-cycle': 'error',
			'import/no-duplicates': 'warn',
			'import/no-empty-named-blocks': 'warn',
			'import/no-extraneous-dependencies': 'error',
			'import/no-mutable-exports': 'error',
			'import/no-self-import': 'error',
			'import/no-useless-path-segments': 'warn',
			'import/no-named-default': 'warn',
			'import/order': ['warn', {
				alphabetize: { order: 'asc' },
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
			}],
		},
		settings: {
			'import/resolver': {
				typescript: {},
			},
		},
	},
	{
		name: 'jrmajor/ts',
		rules: {
			// seems broken, causes parse errors
			'@typescript-eslint/no-unused-expressions': 'off',

			// disable some defaults
			'@typescript-eslint/no-explicit-any': 'off',
			'@typescript-eslint/ban-ts-comment': 'off',

			// stylistic
			'@typescript-eslint/array-type': ['warn', { default: 'array-simple', readonly: 'array-simple' }],
			'@typescript-eslint/consistent-generic-constructors': 'warn',
			'@typescript-eslint/consistent-indexed-object-style': 'warn',
			'@typescript-eslint/consistent-type-assertions': 'warn',
			'@typescript-eslint/prefer-for-of': 'warn',
			'@typescript-eslint/prefer-function-type': 'warn',
		},
	},
	{
		name: 'jrmajor/ignores',
		ignores: [
			'vendor',
			'vite.config.[jt]s.timestamp-*',
		],
	},
];
