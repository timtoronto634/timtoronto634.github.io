// ESLintの新しいフラットコンフィグシステムを使用するため、必要なモジュールをインポート
import js from '@eslint/js';
import react from 'eslint-plugin-react';
import jsxA11y from 'eslint-plugin-jsx-a11y';
// import unusedImports from 'eslint-plugin-unused-imports';
// import muiPathImports from 'eslint-plugin-mui-path-imports';
import importPlugin from 'eslint-plugin-import';
import unicorn from 'eslint-plugin-unicorn';
import xo from 'eslint-config-xo';
import xoReact from 'eslint-config-xo-react';
import xoTypescript from 'eslint-config-xo-typescript';
import prettier from 'eslint-config-prettier';
import { includeIgnoreFile } from "@eslint/compat";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const gitignorePath = path.resolve(__dirname, ".gitignore");

export default [
  // グローバル設定
  includeIgnoreFile(gitignorePath),
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    env: {
      browser: true,
      es2021: true,
    },
    settings: {
      'import/resolver': {
        typescript: {},
      },
    },
  },

  // プラグインと拡張設定
  js.configs.recommended,
  react.configs.recommended,
  jsxA11y.configs.strict,
  unicorn.configs.recommended,
  ...xo,
  xoReact,
  prettier,
  importPlugin.configs.recommended,

  // カスタムルール
  {
    rules: {
      // built-in
      'capitalized-comments': 'off',
      'no-restricted-imports': [
        'error',
        {
          // 相対パスを禁止する
          patterns: ['./', '../'],
        },
      ],

      // react
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/function-component-definition': [
        'error',
        {
          namedComponents: 'arrow-function',
          unnamedComponents: 'arrow-function',
        },
      ],
      'react/jsx-pascal-case': ['error', { allowNamespace: true }],
      'react/no-unknown-property': ['error', { ignore: ['css'] }],

      // import
      'import/no-default-export': 'error',
      'import/extensions': [
        'error',
        {
          js: 'never',
          cjs: 'never',
          mjs: 'never',
          jsx: 'never',
          ts: 'never',
          cts: 'never',
          mts: 'never',
          tsx: 'never',
          css: 'always',
          json: 'always',
          svg: 'always',
        },
      ],
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'parent', 'sibling', 'index', 'object', 'type'],
          pathGroups: [
            {
              pattern: '{react,react-dom/**,react-router-dom}',
              group: 'builtin',
              position: 'before',
            },
            {
              pattern: '@src/**',
              group: 'parent',
              position: 'before',
            },
          ],
          pathGroupsExcludedImportTypes: ['builtin'],
          alphabetize: {
            order: 'asc',
          },
          'newlines-between': 'always',
        },
      ],

      // unicorn
      'unicorn/prevent-abbreviations': 'off',
      'unicorn/prefer-top-level-await': 'off',

      // unused-imports
      'unused-imports/no-unused-imports': 'error',

      // mui-path-imports
      'mui-path-imports/mui-path-imports': 'error',
    },
  },

  // ファイル固有のオーバーライド
  {
    files: ['*.cjs'],
    languageOptions: {
      sourceType: 'script',
    },
    env: {
      node: true,
    },
  },
  {
    files: ['*.ts', '*.tsx'],
    extends: [xoTypescript, prettier],
    rules: {
      // @typescript-eslint
      '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports' }],
      '@typescript-eslint/array-type': [
        'error',
        {
          default: 'array',
          readonly: 'array',
        },
      ],
    },
  },
  {
    files: ['*.d.ts'],
    rules: {
      '@typescript-eslint/triple-slash-reference': 'off',
    },
  },
];