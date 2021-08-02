import { gql, useApolloClient, useQuery } from "@apollo/client"
import { useMemo } from "react"
import { HelmetProvider } from "react-helmet-async"
import StyleProvider from "../Style"

const TITLE = "Tailwind Sandbox"

const EXCHANGE_RATES = gql`
	query GetExchangeRates {
		rates(currency: "USD") {
			currency
			rate
		}
	}
`

const Html = (props) => {
	const { assets, children } = props
	const client = useApolloClient()
	const queryState = useQuery(EXCHANGE_RATES)

	const assetContent = useMemo(
		() => ({
			__html: `assets = ${JSON.stringify(assets)}`
		}),
		[assets]
	)

	const clientState = useMemo(() => {
		const state = client.extract()
		const serializedState = JSON.stringify(state).replace(/</g, "\\u003c")

		return {
			__html: `apollo = ${serializedState}`
		}
	}, [client])

	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link rel="shortcut icon" href="favicon.ico" />
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="favicon-16x16.png"
				/>
				<link rel="stylesheet" href={assets.css} />
				<title>{TITLE}</title>
			</head>
			<body>
				<HelmetProvider>
					<StyleProvider>{children}</StyleProvider>
				</HelmetProvider>
				<script dangerouslySetInnerHTML={assetContent} />
				<script dangerouslySetInnerHTML={clientState} />
				<script async src={assets.js} />
			</body>
		</html>
	)
}

export default Html
