import Breadcrumbs from "../Breadcrumbs"
import Footer from "../Footer"
import Header from "../Header"
import ProductDetail from "../ProductDetail"
import { useStyle } from "../Style"
import classes from "./page.module.css"

const Page = (props) => {
	useStyle(classes)

	return (
		<div className={classes.root}>
			<Header />
			<div className={classes.body}>
				<Breadcrumbs />
				<ProductDetail />
			</div>
			<Footer />
		</div>
	)
}

export default Page
