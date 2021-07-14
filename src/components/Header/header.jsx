import { useStyle } from "../Style"
import classes from "./header.module.css"

const Header = (props) => {
	const { children } = props

	useStyle(classes)

	return (
		<header className={classes.root}>
			<div className={classes.switcher} />
			<nav className={classes.nav} />
		</header>
	)
}

export default Header
