
# 入口(entry)


# 输出(output)

# loader
## Image
Small CSS file:  inline the stylesheet
Small Img: base64 encode

# 插件(plugin)
## html-webpack-plugin

# 模式(mode)


# 浏览器兼容性(browser compatibility)


# webpack-dev-server
https://webpack.docschina.org/configuration/dev-server/

## proxy


# Others

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

##  webpack-dev-server
https://webpack.docschina.org/configuration/dev-server
```
	npm install webpack-dev-server --save-dev
```

##  HtmlWebpackPlugin
自动把js插入模板
```js
	var HtmlWebpackPlugin = require('html-webpack-plugin');
	plugins: [new HtmlWebpackPlugin({
		filename: 'index.html',
		template: path.join(__dirname, 'src/index.html')
	})]
```
