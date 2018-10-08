module.exports = {
  env: {
    browser: true,
    es6: true,
    'cypress/globals': true,
  },
  extends: ['plugin:prettier/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier', 'cypress', 'chai-friendly'],
  rules: {
    'no-unused-expressions': 0,
    'chai-friendly/no-unused-expressions': 2,
  },
}
