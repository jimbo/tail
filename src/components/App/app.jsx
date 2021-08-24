import { ApolloProvider } from "@apollo/client"
import useApolloClient from "../../hooks/useApolloClient"
import Html from "../Html"
import Page from "../Page"

const App = (props) => {
	const { assets, initialClient } = props
	const client = useApolloClient(initialClient)

	return (
		<ApolloProvider client={client}>
			<Html assets={assets}>
				<Page />
			</Html>
		</ApolloProvider>
	)
}

export default App
