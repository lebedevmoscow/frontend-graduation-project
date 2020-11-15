var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = (env, options) => {
	const isDevMode = options.mode === 'development'

	return {
		devtool: isDevMode ? 'source-map' : false,
		resolve: {
			extensions: ['.tsx', '.ts', '.js'],
		},
		module: {
			rules: [
				{
					test: /\.(js)$/,
					exclude: /node_modules/,
					use: 'babel-loader',
				},
				{
					test: /\.tsx?$/,
					use: ['babel-loader', 'ts-loader'],
					exclude: /node_modules/,
				},
				{
					test: /\.(css)$/,
					exclude: /node_modules/,
					use: ['style-loader', 'css-loader'],
				},
				{
					test: /\.s[ac]ss$/i,
					use: ['style-loader', 'css-loader', 'sass-loader'],
				},
			],
		},
		plugins: [
			new HtmlWebpackPlugin({
				template: path.join(__dirname, 'public', 'index.html'),
			}),
		],
	}
}
