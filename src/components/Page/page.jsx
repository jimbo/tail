import { Suspense, lazy } from "react"
import { Route, Routes, useMatch } from "react-router-dom"
import Breadcrumbs from "../Breadcrumbs"
import Footer from "../Footer"
import Header from "../Header"
import { useStyle } from "../Style"
import classes from "./page.module.css"

const Checkout = lazy(() => import("../Checkout"))
const Home = lazy(() => import("../Home"))
const ProductDetail = lazy(() => import("../ProductDetail"))

const Page = (props) => {
	useStyle(classes)

	const match = useMatch({ path: "/" })
	const shouldRenderBreadcrumbs = !match
	const breadcrumbs = shouldRenderBreadcrumbs ? <Breadcrumbs /> : null

	const home = (
		<Suspense fallback={null}>
			<Home />
		</Suspense>
	)

	const product = (
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
				{breadcrumbs}
				<Routes>
					<Route element={home} path="/" />
					<Route element={product} path="product" />
					<Route element={checkout} path="checkout" />
				</Routes>
			</div>
			<Footer />
		</div>
	)
}

export default Page
