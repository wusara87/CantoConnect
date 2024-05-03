
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const DB_FILE: string;
	export const NX_DAEMON: string;
	export const POSTGRES_DATABASE: string;
	export const POSTGRES_HOST: string;
	export const POSTGRES_PASSWORD: string;
	export const POSTGRES_PRISMA_URL: string;
	export const POSTGRES_URL: string;
	export const POSTGRES_URL_NON_POOLING: string;
	export const POSTGRES_URL_NO_SSL: string;
	export const POSTGRES_USER: string;
	export const TURBO_REMOTE_ONLY: string;
	export const TURBO_RUN_SUMMARY: string;
	export const VERCEL: string;
	export const VERCEL_ENV: string;
	export const VERCEL_GIT_COMMIT_AUTHOR_LOGIN: string;
	export const VERCEL_GIT_COMMIT_AUTHOR_NAME: string;
	export const VERCEL_GIT_COMMIT_MESSAGE: string;
	export const VERCEL_GIT_COMMIT_REF: string;
	export const VERCEL_GIT_COMMIT_SHA: string;
	export const VERCEL_GIT_PREVIOUS_SHA: string;
	export const VERCEL_GIT_PROVIDER: string;
	export const VERCEL_GIT_PULL_REQUEST_ID: string;
	export const VERCEL_GIT_REPO_ID: string;
	export const VERCEL_GIT_REPO_OWNER: string;
	export const VERCEL_GIT_REPO_SLUG: string;
	export const VERCEL_URL: string;
	export const TERM_PROGRAM: string;
	export const SHELL: string;
	export const TERM: string;
	export const TMPDIR: string;
	export const TERM_PROGRAM_VERSION: string;
	export const MallocNanoZone: string;
	export const ORIGINAL_XDG_CURRENT_DESKTOP: string;
	export const USER: string;
	export const COMMAND_MODE: string;
	export const SSH_AUTH_SOCK: string;
	export const __CF_USER_TEXT_ENCODING: string;
	export const PATH: string;
	export const _: string;
	export const __CFBundleIdentifier: string;
	export const PWD: string;
	export const LOCAL_GIT_DIRECTORY: string;
	export const XAMPP_HOME: string;
	export const LANG: string;
	export const XPC_FLAGS: string;
	export const VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
	export const FORCE_COLOR: string;
	export const XPC_SERVICE_NAME: string;
	export const SHLVL: string;
	export const HOME: string;
	export const VSCODE_GIT_ASKPASS_MAIN: string;
	export const NOW_REGION: string;
	export const LOGNAME: string;
	export const VSCODE_GIT_IPC_HANDLE: string;
	export const BROWSER: string;
	export const PORT: string;
	export const GIT_ASKPASS: string;
	export const VSCODE_GIT_ASKPASS_NODE: string;
	export const __VERCEL_DEV_RUNNING: string;
	export const COLORTERM: string;
	export const NODE_ENV: string;
}

/**
 * Similar to [`$env/static/private`](https://kit.svelte.dev/docs/modules#$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://kit.svelte.dev/docs/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		DB_FILE: string;
		NX_DAEMON: string;
		POSTGRES_DATABASE: string;
		POSTGRES_HOST: string;
		POSTGRES_PASSWORD: string;
		POSTGRES_PRISMA_URL: string;
		POSTGRES_URL: string;
		POSTGRES_URL_NON_POOLING: string;
		POSTGRES_URL_NO_SSL: string;
		POSTGRES_USER: string;
		TURBO_REMOTE_ONLY: string;
		TURBO_RUN_SUMMARY: string;
		VERCEL: string;
		VERCEL_ENV: string;
		VERCEL_GIT_COMMIT_AUTHOR_LOGIN: string;
		VERCEL_GIT_COMMIT_AUTHOR_NAME: string;
		VERCEL_GIT_COMMIT_MESSAGE: string;
		VERCEL_GIT_COMMIT_REF: string;
		VERCEL_GIT_COMMIT_SHA: string;
		VERCEL_GIT_PREVIOUS_SHA: string;
		VERCEL_GIT_PROVIDER: string;
		VERCEL_GIT_PULL_REQUEST_ID: string;
		VERCEL_GIT_REPO_ID: string;
		VERCEL_GIT_REPO_OWNER: string;
		VERCEL_GIT_REPO_SLUG: string;
		VERCEL_URL: string;
		TERM_PROGRAM: string;
		SHELL: string;
		TERM: string;
		TMPDIR: string;
		TERM_PROGRAM_VERSION: string;
		MallocNanoZone: string;
		ORIGINAL_XDG_CURRENT_DESKTOP: string;
		USER: string;
		COMMAND_MODE: string;
		SSH_AUTH_SOCK: string;
		__CF_USER_TEXT_ENCODING: string;
		PATH: string;
		_: string;
		__CFBundleIdentifier: string;
		PWD: string;
		LOCAL_GIT_DIRECTORY: string;
		XAMPP_HOME: string;
		LANG: string;
		XPC_FLAGS: string;
		VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
		FORCE_COLOR: string;
		XPC_SERVICE_NAME: string;
		SHLVL: string;
		HOME: string;
		VSCODE_GIT_ASKPASS_MAIN: string;
		NOW_REGION: string;
		LOGNAME: string;
		VSCODE_GIT_IPC_HANDLE: string;
		BROWSER: string;
		PORT: string;
		GIT_ASKPASS: string;
		VSCODE_GIT_ASKPASS_NODE: string;
		__VERCEL_DEV_RUNNING: string;
		COLORTERM: string;
		NODE_ENV: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
