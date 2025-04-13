import { defineConfig } from 'eslint/config';
import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import pluginVue from 'eslint-plugin-vue';
import markdown from '@eslint/markdown';
import css from '@eslint/css';

export default defineConfig([
  { files: ['**/*.{js,mjs,cjs,ts,vue}'], plugins: { js }, extends: ['js/recommended'] },
  { files: ['**/*.{js,mjs,cjs,ts,vue}'], languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  tseslint.configs.recommended,
  {
    files: ['**/*.vue'],
    plugins: { vue: pluginVue },
    language: 'vue/vue3-recommended',
    extends: ['plugin:vue/vue3-recommended', '@vue/eslint-config-typescript'],
    rules: {
      'vue/multi-word-component-names': 'off',
    },
  },
  { files: ['**/*.vue'], languageOptions: { parserOptions: { parser: tseslint.parser } } },

  { files: ['**/*.json'], plugins: { json }, language: 'json/json', extends: ['json/recommended'] },
  { files: ['**/*.jsonc'], plugins: { json }, language: 'json/jsonc', extends: ['json/recommended'] },
  { files: ['**/*.json5'], plugins: { json }, language: 'json/json5', extends: ['json/recommended'] },
  { files: ['**/*.md'], plugins: { markdown }, language: 'markdown/commonmark', extends: ['markdown/recommended'] },
  { files: ['**/*.css'], plugins: { css }, language: 'css/css', extends: ['css/recommended'] },

  // 👇 Cấu hình Prettier – phải đặt CUỐI CÙNG để override các rule xung đột
  {
    name: 'prettier-override',
    files: ['**/*.{js,ts,vue,json,css,md}'],
    rules: eslintConfigPrettier.rules,
  },
]);
