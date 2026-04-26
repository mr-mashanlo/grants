import js from '@eslint/js';
import { defineConfig } from 'eslint/config';
import globals from 'globals';

export default defineConfig( [
  {
    files: [ '**/*.{js,mjs,cjs}' ],
    plugins: { js },
    extends: [ 'js/recommended' ],
    languageOptions: { globals: globals.browser },
    rules: {
      'no-trailing-spaces': 'error',
      'no-multiple-empty-lines': 'error',
      'comma-spacing': 'error',
      'comma-dangle': 'error',
      'indent': [ 'error', 2 ],
      'semi': [ 'error', 'always' ],
      'quotes': [ 'error', 'single' ],
      'object-curly-spacing': [ 'error', 'always' ],
      'array-bracket-spacing': [ 'error', 'always' ],
      'space-in-parens': [ 'error', 'always' ],
      'linebreak-style': [ 'error', 'unix' ]
    }
  }
] );