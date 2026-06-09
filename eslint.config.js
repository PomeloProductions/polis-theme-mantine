// Flat ESLint config (eslint 9.x) shared across Pomelo Productions TS/React repos.
//
// Conservative defaults: high-noise rules (unused vars, explicit-any, hook deps)
// are set to `warn`, not `error`, so adopting this gate does not require a
// large cleanup pass before CI can go green. Once warnings are driven to zero
// in a follow-up, individual rules can be promoted to `error`.
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import importPlugin from 'eslint-plugin-import';
import prettierConfig from 'eslint-config-prettier';
import globals from 'globals';

export default [
  // Skip non-source directories.
  {
    ignores: ['node_modules/**', 'dist/**', 'build/**', 'coverage/**', '**/*.min.js'],
  },

  // Base JS recommended rules.
  js.configs.recommended,

  // TypeScript recommended (non-type-checked variant — fast, no project graph).
  ...tseslint.configs.recommended,

  // React + hooks for .ts/.tsx source.
  {
    files: ['src/**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
      globals: {
        ...globals.browser,
        ...globals.es2022,
      },
    },
    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
      import: importPlugin,
    },
    settings: {
      react: { version: 'detect' },
    },
    rules: {
      // React 18+ JSX runtime — no need to import React in scope.
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',

      // Hook rules: deps as warn (high false-positive rate in real code).
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      // TS hygiene — warn, not error, to keep day-1 CI green.
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_', ignoreRestSiblings: true },
      ],
      '@typescript-eslint/no-empty-object-type': 'warn',
      '@typescript-eslint/ban-ts-comment': 'warn',

      // Import hygiene.
      'import/no-duplicates': 'warn',
      'no-duplicate-imports': 'off', // import/no-duplicates supersedes.
    },
  },

  // Prettier config disables all stylistic rules that would conflict with
  // prettier formatting. Must come LAST in the array.
  prettierConfig,
];
