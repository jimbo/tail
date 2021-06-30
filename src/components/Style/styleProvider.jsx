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
					const uuid = arg._getUuid()
					const next = current.has(uuid)
						? current
						: new Map(current).set(uuid, { path, text })

					return next
				})
			}
		},
		[setModules]
	)

	const styleElements = useMemo(() => {
		const elements = []

		for (const cssModule of modules) {
			const [uuid, { path, text }] = cssModule

			elements.push(
				<style key={uuid} data-path={path} type="text/css">
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
