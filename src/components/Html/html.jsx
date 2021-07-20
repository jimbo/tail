import { HelmetProvider } from "react-helmet-async"
import StyleProvider from "../Style"

const TITLE = "Tailwind Sandbox"

const Html = (props) => {
	const { children } = props

	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link rel="shortcut icon" href="favicon.ico" />
				<link rel="stylesheet" href="main.css" />
				<title>{TITLE}</title>
			</head>
			<body>
				<HelmetProvider>
					<StyleProvider>{children}</StyleProvider>
				</HelmetProvider>
			</body>
		</html>
	)
}

export default Html
