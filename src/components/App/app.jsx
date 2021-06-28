import { HelmetProvider } from "react-helmet-async"
import Page from "../Page"
import StyleProvider from "../Style"

const App = (props) => {
	return (
		<HelmetProvider>
			<StyleProvider>
				<Page />
			</StyleProvider>
		</HelmetProvider>
	)
}

export default App
