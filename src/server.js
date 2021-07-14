import { renderToStaticMarkup } from "react-dom/server"
import App from "./components/App"
// import "./index.css"

let output

try {
	output = renderToStaticMarkup(<App />)
} catch (error) {
	output = error
} finally {
	console.log(output)
}
