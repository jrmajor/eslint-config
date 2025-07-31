import { defineConfig } from 'eslint/config';
import base, { js, svelte } from '@jrmajor/eslint-config';

export default defineConfig([base, js, svelte]);
