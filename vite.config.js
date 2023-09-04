import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import {env} from "vite-plugin-env";

export default defineConfig({
	plugins: [sveltekit()]
});
