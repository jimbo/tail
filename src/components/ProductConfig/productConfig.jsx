import { useCallback } from "react"
import Button from "../Button"
import { usePage } from "../Page"
import ProductOptions from "../ProductOptions"
import { useStyle } from "../Style"
import classes from "./productConfig.module.css"

const ProductConfig = (props) => {
	useStyle(classes)
	const setPage = usePage()

	const handleSubmit = useCallback((event) => {
		event.preventDefault()
		setPage("CHECKOUT")
	}, [])

	return (
		<form className={classes.root} onSubmit={handleSubmit}>
			<ProductOptions />
			<div className={classes.actions}>
				<Button type="submit">Add to Cart</Button>
			</div>
		</form>
	)
}

export default ProductConfig
