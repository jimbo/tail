import { hydrateRoot } from "react-dom"
import App from "./components/App"
import "../src/index.css"

hydrateRoot(document, <App assets={window.assets} />)
