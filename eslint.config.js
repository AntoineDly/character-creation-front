import { defineConfig } from 'eslint/config'
import eslint from '@eslint/js'
import eslintPluginVue from 'eslint-plugin-vue'
import globals from 'globals'
import typescriptEslint from 'typescript-eslint'
import eslintConfigPrettier from 'eslint-config-prettier/flat'
import { includeIgnoreFile } from "@eslint/compat";
import { fileURLToPath } from "node:url";

const gitignorePath = fileURLToPath(new URL(".gitignore", import.meta.url));
const prettierIgnorePath = fileURLToPath(new URL(".prettierignore", import.meta.url));

/** @type {import('eslint').Linter.FlatConfig[]} */
export default defineConfig([
  {
    extends: [
      eslint.configs.recommended,
      ...typescriptEslint.configs.recommended,
      ...eslintPluginVue.configs['flat/recommended'],
    ],
    files: ['**/*.{mjs,cjs,js,vue,ts}'],
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
  includeIgnoreFile(gitignorePath, "Imported .gitignore patterns"),
  includeIgnoreFile(prettierIgnorePath, "Imported .prettierignore patterns"),
])
