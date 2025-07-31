declare module '@jrmajor/eslint-config' {
	import { Linter } from 'eslint';

	const base: Linter.Config[];

	export default base;
	export const js: Linter.Config[];
	export const css: Linter.Config[];
	export const svelte: Linter.Config[];
}
