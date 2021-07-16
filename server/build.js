const { resolve } = require("path")
const rimraf = require("rimraf")
const webpack = require("webpack")
const config = require("../webpack.config.js")

const handleCompile = (buildError, stats) => {
	if (buildError) {
		console.error(buildError)
		process.exit(1)
		return
	}

	const info = stats.toJson()
	const hasCompilationErrors = stats.hasErrors()

	if (hasCompilationErrors) {
		console.log("Webpack compiled with errors.")

		for (const compilationError of info.errors) {
			console.error(compilationError)
		}

		process.exit(1)
		return
	}

	console.log("Webpack compiled cleanly.")
}

rimraf.sync(resolve(__dirname, "../dist"))
webpack(config, handleCompile)
