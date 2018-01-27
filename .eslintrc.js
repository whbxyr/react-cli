// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    es6: true,
    commonjs: true,
    browser: true,
  },
  extends: [
      // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
      'standard',
      // https://github.com/feross/eslint-config-standard-react
      'standard-react'
  ],
  // https://github.com/yannickcr/eslint-plugin-react
  plugins: [
    'react',
    'babel',
    'promise',
    'prettier'
  ],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // 定义函数时参数列表左括号的空格规则
    'space-before-function-paren': ['error', {
      'anonymous': 'always',
      'named': 'never',
      'asyncArrow': 'always'
    }],
    'quotes': ['error', 'single'],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'react/jsx-no-bind': ['error', {
      'ignoreRefs': false,
      'allowArrowFunctions': true,
      'allowFunctions': true,
      'allowBind': true
    }],
    'react/prop-types': 0,
    'prettier/prettier': 0
  }
}
