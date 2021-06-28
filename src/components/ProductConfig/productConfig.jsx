import { useCallback } from "react"
import Button from "../Button"
import ProductOptions from "../ProductOptions"
import { useStyle } from "../Style"
import classes from "./productConfig.module.css"

const ProductConfig = (props) => {
	useStyle(classes)

	const handleSubmit = useCallback((event) => {
		event.preventDefault()
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
