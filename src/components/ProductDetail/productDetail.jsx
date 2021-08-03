import ProductConfig from "../ProductConfig"
import { useStyle } from "../Style"
import classes from "./productDetail.module.css"
import useProductDetail from "./useProductDetail"

const ProductDetail = (props) => {
	useStyle(classes)

	const { queryResult } = useProductDetail()
	const { rates } = queryResult.data || {}

	return (
		<main className={classes.root}>
			<div className={classes.header}>
				<h1 className={classes.productName}>Athena Tank Dress</h1>
				<p className={classes.price}>$108.00</p>
			</div>
			<div className={classes.carousel}>
				<div className={classes.thumbnails}>
					<img
						className={classes.thumbnail}
						height={400}
						src="https://picsum.photos/seed/picsum/322/400"
						width={322}
					/>
					<img
						className={classes.thumbnail}
						height={400}
						src="https://picsum.photos/seed/picsum/322/400"
						width={322}
					/>
					<img
						className={classes.thumbnail}
						height={400}
						src="https://picsum.photos/seed/picsum/322/400"
						width={322}
					/>
					<img
						className={classes.thumbnail}
						height={400}
						src="https://picsum.photos/seed/picsum/322/400"
						width={322}
					/>
				</div>
				<div className={classes.image}>
					<img
						className={classes.mockImage}
						height={800}
						src="https://picsum.photos/seed/picsum/645/800"
						width={645}
					/>
				</div>
			</div>
			<div className={classes.config}>
				<ProductConfig />
				<p>{`${rates ? rates.length : "Awaiting"} results`}</p>
			</div>
			<div className={classes.description}>
				<div className={classes.descriptionHeader}>
					<h2 className={classes.descriptionTitle}>
						Product Description
					</h2>
				</div>
				<div
					className={classes.descriptionBody}
					dangerouslySetInnerHTML={getDescription()}
				/>
			</div>
			<div className={classes.details}>
				<div className={classes.detailsHeader}>
					<h2 className={classes.detailsTitle}>Additional Details</h2>
				</div>
				<div
					className={classes.detailsBody}
					dangerouslySetInnerHTML={getDetails()}
				/>
			</div>
			<div className={classes.banner}>
				<img
					className={classes.mockBanner}
					height={160}
					src="https://picsum.photos/seed/picsum/1280/160"
					width={1280}
				/>
			</div>
		</main>
	)
}

export default ProductDetail

const toHtml = (__html) => ({ __html })

const getDescription = () =>
	toHtml(`
	<p class="max-w-prose">
		The Athena Tank Dress offers a high level of structure & details without
		sacrificing comfort. The collar and front pocket accents paired with
		pleating detail give a polished look with little effort.
	</p>
`)

const getDetails = () =>
	toHtml(`
	<p class="max-w-prose">
		SKU: VD11
	</p>
`)
