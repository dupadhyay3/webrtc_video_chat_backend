module.exports = {
  "env": {
    "commonjs": true,
    "node": true,
    "es2021": true
  },
  "extends": [
    "airbnb-base",
    "eslint:recommended",
    "prettier",
    "plugin:node/recommended"
  ],
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": ["prettier"],
  "rules": {
    "tabWidth": 2,
    "useTabs": false,
    "semi": false,
    "singleQuote": true,
    "prettier/prettier": "error",
    "no-unused-vars": "warn",
    "no-console": "off",
    "func-names": "off",
    "no-plusplus": "off",
    "no-process-exit": "off",
    "class-methods-use-this": "off"
  }
}
