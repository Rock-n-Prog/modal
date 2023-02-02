module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.eslint.json'],
  },
  env: {
    browser: true,
    es2022: true,
  },
  plugins: ['functional', 'react'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prefer-type-alias/recommended',
    'plugin:import/recommended',
    'plugin:functional/recommended',
    'plugin:functional/stylistic',
    'plugin:react/recommended',
    'prettier',
  ],
  rules: {
    curly: 'warn',
    eqeqeq: 'warn',
    'prefer-template': 'warn',
    'func-style': ['warn', 'declaration'],
    'no-negated-condition': 'warn',
    'no-else-return': 'warn',
    'no-nested-ternary': 'warn',
    'import/order': 'warn',
    'import/first': 'warn',
    'import/exports-last': 'warn',
    'import/named': 'off',
    'functional/no-classes': 'error',
    'functional/no-return-void': 'off',
    'functional/no-expression-statements': 'off',
    'functional/functional-parameters': 'off',
    'functional/no-conditional-statement': 'off',
    'functional/no-mixed-type': 'off',
    'functional/prefer-immutable-types': [
      'off',
      {
        enforcement: 'ReadonlyShallow',
      },
    ],
    'react/display-name': 'off',
    'react/prop-types': 'off',
  },
  overrides: [
    {
      files: ['**/*.js'],
      rules: {
        'no-undef': 'off',
        'functional/no-expression-statement': 'off',
        'functional/immutable-data': 'off',
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  ],
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.d.ts', '.json'],
      },
      typescript: {},
    },
  },
};
