const { resolve } = require("path")

const localIdentNames = new Map()
	.set("development", "[local]✅[hash:base64:3]")
	.set("production", "[hash:base64:5]")

module.exports = (env, argv) => ({
	mode: argv.mode,
	entry: {
		main: ["./src/index.js"]
	},
	output: {
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
								localIdentName: localIdentNames.get(argv.mode),
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
	devServer: {
		contentBase: "./dist",
		historyApiFallback: true,
		publicPath: "/"
	},
	devtool: argv.mode === "production" ? "source-map" : "eval-source-map"
})
