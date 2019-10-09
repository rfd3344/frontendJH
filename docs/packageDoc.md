# Table of Contents #
<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [npm](#npm)
  - [npm outdated](#npm-outdated)
  - [npm list](#npm-list)
- [babel](#babel)
  - [babel7](#babel7)
    - [@babel/preset-env](#babelpreset-env)
    - [@babel/preset-react](#babelpreset-react)
    - [@babel/polyfill](#babelpolyfill)
    - [@babel/runtime](#babelruntime)
- [eslint](#eslint)
  - [.eslintrc.json](#eslintrcjson)
  - [Atom Tools](#atom-tools)
  - [disable line](#disable-line)
- [unit test](#unit-test)
  - [karma](#karma)
  - [mocha](#mocha)
  - [chai](#chai)
- [Other Packages](#other-packages)
  - [lodash](#lodash)
  - [doctoc](#doctoc)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


# npm
## npm outdated
check outdated package
## npm list
Show installed package version
npm list --depth 0


# babel
## babel7
@babel/core - always required

### @babel/preset-env
always required
define most transform: es5
### @babel/preset-react

### @babel/polyfill

### @babel/runtime

@babel/plugin-transform-runtime

```
"@babel/core": "^7.6.2",
"@babel/plugin-transform-runtime": "^7.6.2",
"@babel/polyfill": "^7.6.0",
"@babel/preset-env": "^7.6.2",
"@babel/preset-react": "^7.0.0",
"@babel/runtime": "^7.6.2",
"babel-loader": "^8.0.6",
```

# eslint
eslint
eslint-config-airbnb

## .eslintrc.json
```json
{
	"extends": "airbnb"
}
```
## Atom Tools
Tools auto check eslint in `Atom`:
`linter`
`linter-eslint`
`linter-ui-default`




## disable line
```js
	console.log('fail line'); // eslint-disable-line
```


# unit test
```
"chai": "^4.2.0",
"karma": "^4.3.0",
"karma-chai": "^0.1.0",
"karma-detect-browsers": "^2.3.3",
"karma-mocha": "^1.3.0",
"karma-mocha-reporter": "^2.2.5",
"karma-webpack": "^4.0.2",
"mocha": "^6.2.1",
```

## karma

## mocha

## chai

# Other Packages

## lodash

## doctoc
