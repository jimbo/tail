import Breadcrumbs from "../Breadcrumbs"
import Header from "../Header"
import ProductDetail from "../ProductDetail"
import classes from "./app.module.css"

const App = (props) => {
	return (
		<div className={classes.root}>
			<Header />
			<div className={classes.page}>
				<Breadcrumbs />
				<ProductDetail />
			</div>
		</div>
	)
}

export default App
