import { useCallback, useEffect, useContext, useMemo, useState } from "react"
import { Helmet } from "react-helmet-async"
import { StyleContext } from "./context"

const StyleProvider = (props) => {
	const [ids, setIds] = useState(new Map())

	const includeStyle = useCallback(
		(...args) => {
			for (const arg of args) {
				setIds((current) => {
					const path = arg._getId()
					const next = current.has(path)
						? current
						: new Map(current).set(path, [
								1 + current.size,
								arg._getCss()
						  ])

					return next
				})
			}
		},
		[setIds]
	)

	const styleElements = useMemo(() => {
		const elements = []

		for (const entry of ids) {
			const [path, data] = entry
			const [id, text] = data

			elements.push(
				<style key={id} type="text/css">
					{text}
				</style>
			)
		}

		return elements
	}, [ids])

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
