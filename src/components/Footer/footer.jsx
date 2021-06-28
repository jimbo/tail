import { useStyle } from "../Style"
import classes from "./footer.module.css"

const Footer = (props) => {
	useStyle(classes)

	return (
		<footer className={classes.root}>
			<nav className={classes.nav} />
			<div className={classes.legal} />
		</footer>
	)
}

export default Footer
