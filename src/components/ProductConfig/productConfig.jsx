import ProductOptions from "../ProductOptions"
import classes from "./productConfig.module.css"

const ProductConfig = (props) => {
	return (
		<div className={classes.root}>
			<ProductOptions />
		</div>
	)
}

export default ProductConfig
