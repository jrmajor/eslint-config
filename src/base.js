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
			'arrow-body-style': 'error',
			'block-scoped-var': 'error',
			'default-case-last': 'error',
			'default-param-last': 'error',
			'dot-notation': 'error',
			'func-names': ['error', 'as-needed'],
			'func-style': ['error', 'declaration'],
			'grouped-accessor-pairs': 'error',
			'no-await-in-loop': 'error',
			'no-console': 'error',
			'no-constructor-return': 'error',
			'no-else-return': 'error',
			'no-implicit-coercion': ['error', { boolean: false }],
			'no-implied-eval': 'error',
			'no-lone-blocks': 'error',
			'no-lonely-if': 'error',
			'no-multi-str': 'error',
			'no-negated-condition': 'error',
			'no-nested-ternary': 'error',
			'no-throw-literal': 'error',
			'no-undefined': 'error',
			'no-underscore-dangle': 'error',
			'no-unneeded-ternary': 'error',
			'no-useless-concat': 'error',
			'no-useless-rename': 'error',
			'no-useless-return': 'error',
			'no-var': 'error',
			'object-shorthand': 'error',
			'operator-assignment': 'error',
			'prefer-arrow-callback': 'error',
			'prefer-destructuring': ['error', {
				VariableDeclarator: { array: true, object: true },
				AssignmentExpression: { array: false, object: false },
			}],
			'prefer-exponentiation-operator': 'error',
			'prefer-template': 'error',
			curly: ['error', 'multi-line'],
			eqeqeq: 'error',
			yoda: 'error',

			// stylistic
			'@stylistic/array-bracket-newline': ['error', 'consistent'],
			'@stylistic/array-bracket-spacing': 'error',
			'@stylistic/array-element-newline': ['error', 'consistent'],
			'@stylistic/arrow-parens': 'error',
			'@stylistic/arrow-spacing': 'error',
			'@stylistic/block-spacing': 'error',
			'@stylistic/brace-style': 'error',
			'@stylistic/comma-dangle': ['error', 'always-multiline'],
			'@stylistic/comma-spacing': 'error',
			'@stylistic/comma-style': 'error',
			'@stylistic/computed-property-spacing': 'error',
			'@stylistic/dot-location': ['error', 'property'],
			'@stylistic/eol-last': 'error',
			'@stylistic/func-call-spacing': 'error',
			'@stylistic/function-call-argument-newline': ['error', 'consistent'],
			'@stylistic/function-call-spacing': 'error',
			'@stylistic/function-paren-newline': ['error', 'consistent'],
			'@stylistic/generator-star-spacing': 'error',
			'@stylistic/implicit-arrow-linebreak': 'error',
			'@stylistic/indent': ['error', 'tab'],
			'@stylistic/indent-binary-ops': ['error', 'tab'],
			'@stylistic/key-spacing': 'error',
			'@stylistic/keyword-spacing': 'error',
			'@stylistic/linebreak-style': 'error',
			'@stylistic/lines-around-comment': 'error',
			'@stylistic/lines-between-class-members': 'error',
			'@stylistic/max-statements-per-line': 'error',
			'@stylistic/member-delimiter-style': 'error',
			'@stylistic/multiline-comment-style': ['error', 'separate-lines'],
			'@stylistic/multiline-ternary': ['error', 'always-multiline'],
			'@stylistic/new-parens': 'error',
			'@stylistic/no-extra-semi': 'error',
			'@stylistic/no-floating-decimal': 'error',
			'@stylistic/no-mixed-operators': 'error',
			'@stylistic/no-mixed-spaces-and-tabs': 'error',
			'@stylistic/no-multi-spaces': 'error',
			'@stylistic/no-multiple-empty-lines': 'error',
			'@stylistic/no-trailing-spaces': 'error',
			'@stylistic/no-whitespace-before-property': 'error',
			'@stylistic/nonblock-statement-body-position': 'error',
			'@stylistic/object-curly-newline': ['error', { consistent: true }],
			'@stylistic/object-curly-spacing': ['error', 'always'],
			'@stylistic/object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],
			'@stylistic/operator-linebreak': ['error', 'before'],
			'@stylistic/padded-blocks': ['error', 'never'],
			'@stylistic/quote-props': ['error', 'as-needed'],
			'@stylistic/quotes': ['error', 'single'],
			'@stylistic/rest-spread-spacing': 'error',
			'@stylistic/semi': 'error',
			'@stylistic/semi-spacing': 'error',
			'@stylistic/semi-style': 'error',
			'@stylistic/space-before-blocks': 'error',
			'@stylistic/space-before-function-paren': ['error', { named: 'never' }],
			'@stylistic/space-in-parens': 'error',
			'@stylistic/space-infix-ops': 'error',
			'@stylistic/space-unary-ops': 'error',
			'@stylistic/spaced-comment': 'error',
			'@stylistic/switch-colon-spacing': 'error',
			'@stylistic/template-curly-spacing': 'error',
			'@stylistic/template-tag-spacing': 'error',
			'@stylistic/type-annotation-spacing': 'error',
			'@stylistic/type-generic-spacing': 'error',
			'@stylistic/type-named-tuple-spacing': 'error',
			'@stylistic/yield-star-spacing': 'error',

			// imports
			'import/consistent-type-specifier-style': 'warn',
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
			'@typescript-eslint/array-type': ['error', { default: 'array-simple', readonly: 'array-simple' }],
			'@typescript-eslint/consistent-generic-constructors': 'error',
			'@typescript-eslint/consistent-indexed-object-style': 'error',
			'@typescript-eslint/consistent-type-assertions': 'error',
			'@typescript-eslint/prefer-for-of': 'error',
			'@typescript-eslint/prefer-function-type': 'error',
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
