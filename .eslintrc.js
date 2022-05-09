module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ['google'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  plugins: ['@typescript-eslint', 'simple-import-sort', "import"],
  rules: {
    '@typescript-eslint/no-unused-vars': ['error', { "argsIgnorePattern": "^_", "varsIgnorePattern": "^_" }],
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "sort-imports": "off",
    "import/order": "off",
    "import/first": "error",
    "import/newline-after-import": "error",
    "import/no-duplicates": "error",
    'indent': ['off'], // prettier conflict
    'require-jsdoc': 'off',
    'valid-jsdoc': 'off',
    'new-cap': ['error', { capIsNew: false }],
    'no-unused-vars': 'off',
    'object-curly-spacing': ['error', 'always'],
    'operator-linebreak': [
      'error',
      'after',
      { overrides: { '?': 'before', ':': 'before' } },
    ],
    'max-len': 'off', // prettier conflict
    'no-invalid-this': 'off',
    'keyword-spacing': 'off',
    'space-before-function-paren': 'off',
  },
};
