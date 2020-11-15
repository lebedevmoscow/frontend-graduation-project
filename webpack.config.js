var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, '/dist'),
		filename: 'index_bundle.js',
	},
	module: {
		rules: [
			{ test: /\.(js)$/, exclude: /node_modules/, use: 'babel-loader' },
			{
				test: /\.(css)$/,
				exclude: /node_modules/,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
	mode: 'development',
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'public', 'index.html'),
		}),
	],
}
