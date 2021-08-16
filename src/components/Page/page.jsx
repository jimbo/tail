import { Suspense, lazy } from "react"
import { Route, Routes } from "react-router-dom"
import Breadcrumbs from "../Breadcrumbs"
import Footer from "../Footer"
import Header from "../Header"
import { useStyle } from "../Style"
import classes from "./page.module.css"

const Checkout = lazy(() => import("../Checkout"))
const ProductDetail = lazy(() => import("../ProductDetail"))

const Page = (props) => {
	useStyle(classes)

	const productDetail = (
		<Suspense fallback={null}>
			<ProductDetail />
		</Suspense>
	)

	const checkout = (
		<Suspense fallback={null}>
			<Checkout />
		</Suspense>
	)

	return (
		<div className={classes.root}>
			<Header />
			<div className={classes.body}>
				<Breadcrumbs />
				<Routes>
					<Route element={productDetail} path="/" />
					<Route element={checkout} path="checkout" />
				</Routes>
			</div>
			<Footer />
		</div>
	)
}

export default Page
