module.exports = {
  extends: ['wolox-react'],
  plugins: ['react-hooks', 'import'],
  settings: {
    'react': {
      'version': 'detect'
    },
    'import/resolver': {
      'babel-module': {
        root: ['./src'],
        extensions: ['.js', '.jsx'],
        alias: {
          '~components': './src/app/components',
          '~screens': './src/app/screens',
          '~config': './src/config',
          '~constants': './src/constants',
          '~redux': './src/redux',
          '~services': './src/services',
          '~utils': './src/utils'
        }
      }
    }
  },
  rules: {
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }],
    'spaced-comment': ['error', 'always', { 'markers': ['/'] }],
    'camelcase': 'off',
    'no-array-constructor': 'off',
    'no-empty-function': 'off',
    'no-unused-vars': 'off',
    'no-use-before-define': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'no-nested-ternary': 'off',
    'id-length': ['error', { max: 35 , min: 1 }],
    'generator-star-spacing': 'off'
  }
};
