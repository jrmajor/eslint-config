import { defineConfig } from 'eslint/config';
import base, { css, js, svelte } from '@jrmajor/eslint-config';

export default defineConfig([base, js, svelte, css]);
