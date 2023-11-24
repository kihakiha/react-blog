module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  extends: ['airbnb', 'airbnb/hooks', 'airbnb-typescript'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['react'],
  rules: {
    'react/jsx-indent': [2, 2],
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.tsx'] }],
    '@typescript-eslint/semi': 'off',
    '@typescript-eslint/comma-dangle': 'off',
    '@typescript-eslint/member-delimiter-style': 'off',
    'no-unused-vars': 'warn',
    '@typescript-eslint/space-before-function-paren': 'off',
    'react/require-default-props': 'off',
    'react/jsx-props-no-spreading': 'warn',
    'react/function-component-definition': 'off',
    'no-shadow': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    'import/no-extraneous-dependencies': 'off',
    '@typescript-eslint/naming-convention': 'off',
    'import/prefer-default-export': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'no-unused-vars': 'off',
    'no-underscore-dangle': 'off',
  },
  globals: {
    __IS_DEV__: true,
  },
};
