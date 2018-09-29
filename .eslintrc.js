module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  //extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  extends: ['plugin:prettier/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {},
}
