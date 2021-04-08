import ProductOptions from "../ProductOptions"
import classes from "./productDetail.module.css"

const ProductDetail = props => {
    return (
        <main className={classes.root}>
            <div className={classes.carousel}>
                <div className={classes.thumbnails} />
                <div className={classes.image} />
            </div>
            <div className={classes.config}>
                <div className={classes.configHeader}>
                    <h1 className={classes.productName}>Product Name</h1>
                    <p className={classes.price}>$108.00</p>
                </div>
                <ProductOptions />
            </div>
            <div className={classes.description}>
                <div className={classes.descriptionHeader}>
                    <h2 className={classes.descriptionTitle}>
                        Product Description
                    </h2>
                </div>
            </div>
            <div className={classes.details}>
                <div className={classes.detailsHeader}>
                    <h2 className={classes.detailsTitle}>
                        Additional Details
                    </h2>
                </div>
            </div>
        </main>
    )
}

export default ProductDetail
