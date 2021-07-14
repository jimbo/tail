import { useCallback, useEffect, useContext, useMemo, useState } from "react"
import { Helmet } from "react-helmet-async"
import { StyleContext } from "./context"

const StyleProvider = (props) => {
	const [modules, setModules] = useState(new Map())

	const includeStyle = useCallback(
		(...args) => {
			for (const arg of args) {
				setModules((current) => {
					const text = arg._getCss()
					const path = arg._getPath()
					const next = current.has(path)
						? current
						: new Map(current).set(path, text)

					return next
				})
			}
		},
		[setModules]
	)

	const styleElements = useMemo(() => {
		const elements = []

		for (const cssModule of modules) {
			const [path, text] = cssModule

			elements.push(
				<style key={path} type="text/css">
					{text}
				</style>
			)
		}

		return elements
	}, [modules])

	return (
		<StyleContext.Provider value={includeStyle}>
			<Helmet>{styleElements}</Helmet>
			{props.children}
		</StyleContext.Provider>
	)
}

export default StyleProvider

export const useStyle = (cssModule) => {
	const includeStyle = useContext(StyleContext)

	useEffect(() => {
		includeStyle(cssModule)
	}, [cssModule])
}
