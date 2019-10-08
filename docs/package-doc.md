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
- [Eslint](#eslint)
  - [.eslintrc.json](#eslintrcjson)
  - [Tools](#tools)
  - [disable line](#disable-line)

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



# Eslint
eslint
eslint-config-airbnb

## .eslintrc.json
```json
{
	"extends": "airbnb"
}
```
## Tools
Tools auto check eslint in `Atom`:
`linter`
`linter-eslint`
`linter-ui-default`




## disable line
```js
	'fail line' // eslint-disable-line
```
