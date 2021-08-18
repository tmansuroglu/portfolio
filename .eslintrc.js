module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'linebreak-style': 0,
    'react/react-in-jsx-scope': 'off',
    'object-curly-newline': 0,
    'object-curly-spacing': 0,
    'react/self-closing-comp': 0,
    'react/jsx-one-expression-per-line': 0,
    'comma-dangle': 0,
    'implicit-arrow-linebreak': 0,
  },
};
