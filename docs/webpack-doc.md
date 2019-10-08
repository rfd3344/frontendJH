# Table of Contents #
<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [entry](#entry)
- [output](#output)
- [module](#module)
  - [loader](#loader)
  - [Image](#image)
- [resolve](#resolve)
- [optimization](#optimization)
- [plugin](#plugin)
  - [HtmlWebpackPlugin](#htmlwebpackplugin)
- [dev-server](#dev-server)
- [watch](#watch)
- [externals](#externals)
- [performance](#performance)
- [Others](#others)
  - [mode](#mode)
  - [node](#node)
  - [proxy](#proxy)
  - [Hot Module Replacement](#hot-module-replacement)
  - [浏览器兼容性(browser compatibility)](#%E6%B5%8F%E8%A7%88%E5%99%A8%E5%85%BC%E5%AE%B9%E6%80%A7browser-compatibility)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


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
