import js from '@eslint/js';
import ts from 'typescript-eslint';
import svelte from 'eslint-plugin-svelte';
import prettier from 'eslint-config-prettier';
import globals from 'globals';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
	js.configs.recommended,
	...ts.configs.recommended,
	...svelte.configs['flat/recommended'],
	prettier,
	...svelte.configs['flat/prettier'],
	{
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node
			}
		}
	},
	{
		files: ['**/*.svelte'],
		languageOptions: {
			parserOptions: {
				parser: ts.parser
			}
		}
	},
	{
		ignores: ['build/', '.svelte-kit/', 'dist/']
	}
];

// module.exports = {
// 	root: true,
// 	parser: '@typescript-eslint/parser',
// 	extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
// 	plugins: ['svelte3', '@typescript-eslint'],
// 	ignorePatterns: ['*.cjs'],
// 	overrides: [
// 		{
// 			files: ['*.svelte'],
// 			processor: 'svelte3/svelte3',
// 		},
// 	],
// 	settings: {
// 		'svelte3/typescript': () => require('typescript'),
// 	},
// 	parserOptions: {
// 		sourceType: 'module',
// 		ecmaVersion: 2020,
// 	},
// 	env: {
// 		browser: true,
// 		es2017: true,
// 		node: true,
// 	},
// };
