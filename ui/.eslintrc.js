module.export = {
  extends: ['airbnb-typescript', 'plugin:prettier/recommended'],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'no-console': 'off',
  },
};
