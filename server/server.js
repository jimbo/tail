const compress = require("compression")
const express = require("express")
const { JS_BUNDLE_DELAY } = require("./delays")
const PORT = "4000"

// add artificial delays
const delay = (req, res, next) => {
	if (req.url.endsWith(".js")) {
		setTimeout(next, JS_BUNDLE_DELAY)
	} else {
		next()
	}
}

// define callbacks for responding
const respond = (fn) => async (req, res, next) => {
	try {
		return await fn(req, res)
	} catch (error) {
		next(error)
	}
}

const buildAndRender = async (req, res) => {
	const { assets, render } = await waitForWebpack()

	await render(req.url, res, assets)
}

const waitForWebpack = async () => {
	while (true) {
		try {
			const assets = require("../dist/stats-client.json")
			const { js: filename } = require("../dist/stats-server.json")
			const { default: render } = require(`../dist/${filename}`)

			return { assets, render }
		} catch (error) {
			console.error(error)

			await new Promise((resolve) => setTimeout(resolve, 10000))
		}
	}
}

// define callbacks for listening
const listen = () => {
	console.log(`Listening on ${PORT}!`)
}

const handleListenError = (error) => {
	if (error.syscall !== "listen") {
		throw error
	}

	switch (error.code) {
		case "EACCES":
			console.error(`Port ${PORT} requires elevated privileges.`)
			process.exit(1)
			break
		case "EADDRINUSE":
			console.error(`Port ${PORT} is already in use`)
			process.exit(1)
			break
		default:
			throw error
	}
}

// create the express app and listen for requests
const app = express()

app.use(delay)
app.use(compress())
app.get("/", respond(buildAndRender))
app.get("/checkout", respond(buildAndRender))
app.use(express.static("dist"))
app.listen(PORT, listen).on("error", handleListenError)
