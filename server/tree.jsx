import { StaticRouter } from "react-router-dom/server"
import App from "../src/components/App"

const Tree = (props) => {
	const { assets, client, url } = props

	return (
		<StaticRouter location={url}>
			<App assets={assets} initialClient={client} />
		</StaticRouter>
	)
}

export default Tree
