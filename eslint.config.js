import { defineConfig } from 'eslint/config';
import js from '@eslint/js';
import globals from 'globals';
import typescriptEslint from 'typescript-eslint';
import eslintPluginVue from 'eslint-plugin-vue';
import markdown from '@eslint/markdown';
import css from '@eslint/css';
import eslintConfigPrettier from 'eslint-config-prettier';

export default defineConfig([
  {
    ignores: [
      'node_modules',
      '.vscode',
      '.idea',
      'dist',
      'public',
      'docs',
      '.husky',
      'package-lock.json',
      'pnpm-lock.yaml',
      'yarn.lock',
    ],
  },
  { files: ['**/*.{js,mjs,cjs,ts,vue}'], plugins: { js }, extends: ['js/recommended'] },
  { files: ['**/*.{js,mjs,cjs,ts,vue}'], languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  typescriptEslint.configs.recommended,
  {
    extends: [
      js.configs.recommended,
      ...typescriptEslint.configs.recommended,
      ...eslintPluginVue.configs['flat/recommended'],
    ],
    files: ['**/*.{ts,vue}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.browser,
      parserOptions: {
        parser: typescriptEslint.parser,
      },
    },
    rules: {
      'vue/multi-word-component-names': 'off',
      'vue/valid-template-root': 'warning',
    },
  },
  { files: ['**/*.vue'], languageOptions: { parserOptions: { parser: typescriptEslint.parser } } },
  { files: ['**/*.json'], plugins: { json }, language: 'json/json', extends: ['json/recommended'] },
  { files: ['**/*.md'], plugins: { markdown }, language: 'markdown/commonmark', extends: ['markdown/recommended'] },
  { files: ['**/*.css'], plugins: { css }, language: 'css/css', extends: ['css/recommended'] },

  // 👇 Cấu hình Prettier – phải đặt CUỐI CÙNG để override các rule xung đột
  {
    name: 'prettier-override',
    files: ['**/*.{js,ts,vue,json,css,md}'],
    rules: eslintConfigPrettier.rules,
  },
]);
