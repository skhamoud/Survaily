module.exports = {
  extends: 'airbnb',
  root: true,
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    es6: true,
    browser: true,
  },
  rules: {
    'react/jsx-filename-extension': 0,
  },
};
