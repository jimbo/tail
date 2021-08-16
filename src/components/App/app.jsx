import { ApolloProvider } from "@apollo/client"
import { BrowserRouter } from "react-router-dom"
import { StaticRouter } from "react-router-dom/server"
import useApolloClient from "../../hooks/useApolloClient"
import Html from "../Html"
import Page from "../Page"

const App = (props) => {
	const { assets, initialClient } = props
	const client = useApolloClient(initialClient)
	const Router = globalThis.document ? BrowserRouter : StaticRouter

	return (
		<ApolloProvider client={client}>
			<Html assets={assets}>
				<Router location={props.url}>
					<Page />
				</Router>
			</Html>
		</ApolloProvider>
	)
}

export default App
