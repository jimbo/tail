import { useStyle } from "../Style"
import classes from "./checkout.module.css"

const Checkout = (props) => {
	useStyle(classes)

	return <main className={classes.root}>This is the checkout page.</main>
}

export default Checkout
