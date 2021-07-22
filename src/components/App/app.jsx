import Html from "../Html"
import Page from "../Page"

const App = (props) => {
	const { assets } = props

	return (
		<Html assets={assets}>
			<Page />
		</Html>
	)
}

export default App
