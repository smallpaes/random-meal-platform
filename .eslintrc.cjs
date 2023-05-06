module.exports = {
  env: { browser: true, es2020: true, "node": true },
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:react/jsx-runtime'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: [
    'import',
    'react-refresh',
    'react-hooks',
    'react', 
    'jsx-a11y', 
    '@typescript-eslint',
    'prettier'
  ],
  rules: {
    'react-refresh/only-export-components': 'warn',
  },
  settings: {
    'react': {
      'version': 'detect'
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    },
    'import/resolver': {
      'typescript': {
        'alwaysTryTypes': true
      }
    }
  }
}
