
https://webpack.docschina.org/configuration/

# entry


# output

# module

## loader

## Image
Small CSS file:  inline the stylesheet
Small Img: base64 encode

# resolve

# optimization

# plugin

## HtmlWebpackPlugin
自动把js插入模板

```js
var HtmlWebpackPlugin = require('html-webpack-plugin');
plugins: [new HtmlWebpackPlugin({
	filename: 'index.html',
	template: path.join(__dirname, 'src/index.html')
})]
```

# dev-server
https://webpack.docschina.org/configuration/dev-server

```
npm install webpack-dev-server --save-dev
```


# watch

# externals

# performance

# Others

## mode


## node


## proxy


## Hot Module Replacement
rapid application development without browser refreshes
React Hot Loader: react

```
npm install --save-dev webpack
npm install --save-dev webpack-cli

"scripts": {
	"start": "webpack --config webpack.config.js"
}
```


## 浏览器兼容性(browser compatibility)
