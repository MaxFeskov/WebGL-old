module.exports = {
  root: true,
  parserOptions: {
    sourceType: 'module',
  },
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'airbnb-base',
    'plugin:security/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  plugins: ['prettier', 'security', 'import', 'no-mixed-operators'],
  rules: {
    'prefer-const': 0,
    'no-use-before-define': [1, { functions: false }],
    'no-alert': 0,
    'no-bitwise': 0,
    'import/no-unresolved': 0,
    'import/extensions': 0,
    'no-param-reassign': 0,
    'no-mixed-operators': 0,
    'array-element-newline': 0,
    'no-mixed-operators/no-mixed-operators': 1,
    'import/no-extraneous-dependencies': [
      'error',
      { optionalDependencies: ['test/unit/index.js'] },
    ],
    'object-property-newline': 2,
    'object-curly-newline': [2, { minProperties: 2 }],
  },
};
