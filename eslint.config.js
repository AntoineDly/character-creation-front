import { defineConfig } from 'eslint/config'
import eslint from '@eslint/js'
import vue from 'eslint-plugin-vue'
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
    plugins: {
      vue,
    },
    extends: [
      eslint.configs.recommended,
      ...typescriptEslint.configs.recommended,
      ...vue.configs['flat/recommended'],
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
    rules: {
      // Disallow hyphens in attributes on custom components
      'vue/attribute-hyphenation': ['error', 'never', {
        ignore: [],
        ignoreTags: [],
      }],

      // Enforce prop name casing as camelCase
      'vue/prop-name-casing': ['error', 'camelCase'],

      // Enforce custom event names to be camelCase
      'vue/custom-event-name-casing': ['error', 'camelCase', {
        ignores: [],
      }],

      // Optionally: enforce v-on event hyphenation rule (disallow hyphens)
      'vue/v-on-event-hyphenation': ['error', 'never', {
        autofix: true,
        ignore: [],
      }],

      // Enforce component name casing to be camelCase
      'vue/component-name-casing': ['error', 'camelCase'],

      // Optionally: enforce PascalCase for file names (if you want to enforce that as well)
      'vue/match-component-file-name': ['error', 'always', {
        extensions: ['vue'],
        shouldMatchCase: true,  // This forces the component file name to match the casing
      }],
    },
  },
  eslintConfigPrettier,
  includeIgnoreFile(gitignorePath, "Imported .gitignore patterns"),
  includeIgnoreFile(prettierIgnorePath, "Imported .prettierignore patterns"),
])
