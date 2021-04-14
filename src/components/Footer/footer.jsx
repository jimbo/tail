import classes from "./footer.module.css"

const Footer = (props) => {
	return (
		<footer className={classes.root}>
			<nav className={classes.nav} />
			<div className={classes.legal} />
		</footer>
	)
}

export default Footer
