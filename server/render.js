import { getDataFromTree } from "@apollo/client/react/ssr"
import { cloneElement } from "react"
import { pipeToNodeWritable } from "react-dom/server"
import App from "../src/components/App"
import { createClient } from "../src/hooks/useApolloClient"
const { BAILOUT_DELAY } = require("./delays")

const render = async (url, res, assets) => {
	let didError = false

	res.socket.on("error", (error) => {
		console.error("A socket error occurred.")
		console.error(error)
	})

	// create a tree with an Apollo client so we can aggregate queries
	const client = createClient()
	let tree = <App assets={assets} initialClient={client} url={url} />

	// let Apollo aggregate and run queries, then recreate the tree
	await getDataFromTree(tree)
	tree = cloneElement(tree, { initialClient: client })

	// render and stream
	const { abort, startWriting } = pipeToNodeWritable(tree, res, {
		onError(error) {
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
	})

	setTimeout(abort, BAILOUT_DELAY)
}

export default render
