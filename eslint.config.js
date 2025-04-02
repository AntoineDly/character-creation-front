import { defineConfig } from 'eslint/config'
import eslint from '@eslint/js'
import eslintPluginVue from 'eslint-plugin-vue'
import globals from 'globals'
import typescriptEslint from 'typescript-eslint'
import eslintConfigPrettier from 'eslint-config-prettier/flat'

/** @type {import('eslint').Linter.FlatConfig[]} */
export default defineConfig([
  {
    extends: [
      eslint.configs.recommended,
      ...typescriptEslint.configs.recommended,
      ...eslintPluginVue.configs['flat/recommended'],
    ],
    files: ['**/*.{mjs,cjs,js,vue,ts}'],
    ignores: ['**/*.config.js', 'node_modules', 'dist'],
    languageOptions: {
      parserOptions: {
        parser: typescriptEslint.parser,
      },
      globals: {
        ...globals.browser,
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
  },
  eslintConfigPrettier,
])
