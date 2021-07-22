import { pipeToNodeWritable } from "react-dom/server"
import App from "../src/components/App"
const { API_DELAY, BAILOUT_DELAY } = require("./delays")

const render = (url, res, assets) => {
	let didError = false

	res.socket.on("error", (error) => {
		console.error("A socket error occurred.")
		console.error(error)
	})

	const { abort, startWriting } = pipeToNodeWritable(
		<App assets={assets} url={url} />,
		res,
		{
			onError() {
				didError = true
				console.error("A writing error occurred.")
				console.error(error)
			},
			onReadyToStream() {
				res.statusCode = didError ? 500 : 200
				res.setHeader("Content-type", "text/html")
				res.write("<!DOCTYPE html>")
				startWriting()
			}
		}
	)

	setTimeout(abort, BAILOUT_DELAY)
}

export default render
