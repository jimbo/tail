import { Link } from "react-router-dom"
import { useStyle } from "../Style"
import classes from "./breadcrumbs.module.css"

const Breadcrumbs = (props) => {
	useStyle(classes)

	return (
		<nav className={classes.breadcrumbs}>
			<Link className={classes.link} to="/">
				Home
			</Link>
			<span className={classes.separator}>/</span>
			<span className={classes.link}>Dresses</span>
			<span className={classes.separator}>/</span>
			<span className={classes.title}>Athena Tank Dress</span>
		</nav>
	)
}

export default Breadcrumbs
