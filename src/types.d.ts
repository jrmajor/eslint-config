declare module '@jrmajor/eslint-config' {
	import { Linter } from 'eslint';

	const base: Linter.Config[];

	export default base;
	export const svelte: Linter.Config[];
}
