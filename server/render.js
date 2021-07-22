import { pipeToNodeWritable } from "react-dom/server"
import App from "../src/components/App"

const render = (url, res, assets) => {
	const [css, js] = assets
	const assetMap = { css, js }
	let didError = false

	res.socket.on("error", (error) => {
		console.error("A socket error occurred.")
		console.error(error)
	})

	const { abort, startWriting } = pipeToNodeWritable(
		<App assets={assetMap} url={url} />,
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

	setTimeout(abort, 10000)
}

export default render
