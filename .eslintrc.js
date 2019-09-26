
module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "node": true
  },
  'extends': [
    'plugin:react/recommended',
  ],
  "parser": "babel-eslint",
  "parserOptions": {
    "sourceType": "module",
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true, // support  Object spread https://eslint.org/docs/user-guide/configuring#specifying-parser-options
      "jsx": true,
      "modules": true
    }
  },
  "rules": {
    "indent": 0,
    "linebreak-style": ["error", "unix"],
    "semi": ["error", "never"],
    "react/prop-types": ["ignore"], // donot use react-prop， do it in future
    "react/display-name": ["ignore"],
  },
}
