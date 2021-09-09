import { hydrateRoot } from "react-dom"
import { BrowserRouter } from "react-router-dom"
import App from "./components/App"
import "../src/index.css"

const tree = (
	<BrowserRouter>
		<App assets={window.assets} />
	</BrowserRouter>
)

hydrateRoot(document, tree)
