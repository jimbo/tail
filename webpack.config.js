const { resolve } = require("path")
const webpack = require("webpack")

const CopyPlugin = require("copy-webpack-plugin")
const { LimitChunkCountPlugin } = webpack.optimize

const localIdentNames = new Map()
	.set("development", "[local]✅[hash:base64:3]")
	.set("production", "[hash:base64:5]")

function getClientConfig(env, argv) {
	return {
		name: "client",
		mode: argv.mode,
		entry: {
			main: "./src/index.js"
		},
		output: {
			// clean: true,
			filename: "[name].js",
			path: resolve(__dirname, "dist"),
			publicPath: "/"
		},
		module: {
			rules: [
				{
					// include `.module.css` files only
					test: /\.module\.css$/,
					use: [
						{
							loader: resolve(
								__dirname,
								"./src/loaders/custom-loader.js"
							)
						},
						{
							loader: "css-loader",
							options: {
								importLoaders: 1,
								modules: {
									localIdentName: localIdentNames.get(
										argv.mode
									),
									mode: "local"
								}
							}
						},
						{
							loader: "postcss-loader"
						}
					]
				},
				{
					// exclude `.module.css` files
					test: /(?<!\.module)\.css$/,
					use: [
						{
							loader: "style-loader"
						},
						{
							loader: "css-loader",
							options: {
								importLoaders: 1,
								modules: false
							}
						},
						{
							loader: "postcss-loader"
						}
					]
				},
				{
					test: /\.jsx$/,
					exclude: /node_modules/,
					use: [
						{
							loader: "babel-loader"
						}
					]
				},
				{
					test: /\.js$/,
					exclude: /node_modules/,
					use: [
						{
							loader: "babel-loader"
						}
					]
				}
			]
		},
		plugins: [
			new CopyPlugin({
				patterns: [
					{
						from: "static/**/*",
						to({ context }) {
							return resolve(context, "dist", "[name][ext]")
						}
					}
				]
			})
		],
		devServer: {
			contentBase: "./dist",
			historyApiFallback: true,
			publicPath: "/"
		},
		devtool: argv.mode === "production" ? "source-map" : "eval-source-map"
	}
}

function getServerConfig(env, argv) {
	const config = getClientConfig(env, argv)

	return {
		...config,
		name: "server",
		target: "node",
		entry: {
			server: "./src/server.js"
		},
		output: { ...config.output },
		module: { ...config.module },
		plugins: [
			...config.plugins,
			new LimitChunkCountPlugin({
				maxChunks: 1
			})
		],
		devServer: void 0,
		devtool: false
	}
}

module.exports = [getClientConfig, getServerConfig]
