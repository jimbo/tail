const { resolve } = require("path")
const CopyPlugin = require("copy-webpack-plugin")

const mode = process.env.NODE_ENV.toLowerCase()
const isProduction = mode === "production"

const createConfig = (name) => {
	const isServer = name === "server"

	// entry
	const entry = isServer
		? { server: "./server/render.js" }
		: { main: "./src/index.js" }

	// output
	const output = {
		filename: "[name].js",
		path: resolve(__dirname, "dist")
	}

	if (isServer) output.library = { type: "commonjs2" }
	else output.publicPath = "/"

	// module
	const module = {}
	const targets = isServer ? { node: "14" } : { chrome: "88" }
	const presets = [
		["@babel/preset-env"],
		["@babel/preset-react", { runtime: "automatic" }]
	]
	const localIdentName = isProduction
		? "[hash:base64:5]"
		: "[local]@[hash:base64:3]"

	module.rules = [
		{
			test: /\.module\.css$/,
			use: [
				{
					loader: resolve(__dirname, "./src/loaders/custom-loader.js")
				},
				{
					loader: "css-loader",
					options: {
						importLoaders: 1,
						modules: {
							localIdentName,
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
					loader: "babel-loader",
					options: { presets, targets }
				}
			]
		},
		{
			test: /\.js$/,
			exclude: /node_modules/,
			use: [
				{
					loader: "babel-loader",
					options: { presets, targets }
				}
			]
		}
	]

	// plugins
	const plugins = []

	if (isServer)
		plugins.push(
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
		)

	// devtool
	// const devtool = isProduction || isServer ? "source-map" : "eval-source-map"
	const devtool = false

	// target
	const target = isServer ? "node" : "web"

	// stats
	const stats = true

	// final config
	return {
		name,
		mode,
		entry,
		output,
		module,
		plugins,
		devtool,
		target,
		stats
	}
}

const clientConfig = createConfig("client")
const serverConfig = createConfig("server")

module.exports = [clientConfig, serverConfig]
