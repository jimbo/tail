const compress = require("compression")
const express = require("express")
const PORT = "4000"

// define callbacks for responding
const respond = fn => async (req, res, next) => {
	try {
		return await fn(req, res)
	} catch (error) {
		next(error)
	}
}

const buildAndRender = async (req, res) => {
	const render = await waitForWebpack()

	render(req.url, res)
}

const waitForWebpack = async () => {
	while (true) {
		try {
			const { default: render } = require("../dist/server.js")
			console.log("Found server.js.")
			return render
		} catch (error) {
			console.log("Not found. Will retry.")

			await new Promise(resolve => setTimeout(resolve, 1000))
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

app.use(compress())
app.get("/", respond(buildAndRender))
app.use(express.static("dist"))
app.listen(PORT, listen).on("error", handleListenError)
