import classes from "./breadcrumbs.module.css"

const Breadcrumbs = (props) => {
	return (
		<nav className={classes.breadcrumbs}>
			<a className={classes.link}>Home</a>
			<span className={classes.separator}>/</span>
			<a className={classes.link}>Dresses</a>
			<span className={classes.separator}>/</span>
			<span className={classes.title}>Athena Tank Dress</span>
		</nav>
	)
}

export default Breadcrumbs
