import { useCallback, useMemo } from "react"

import classes from "./button.module.css"

const Button = (props) => {
	const { children, onClick, priority = "normal", type = "button" } = props

	const handleClick = useCallback(
		(event) => {
			if (typeof onClick === "function") {
				onClick(event)
			}
		},
		[onClick]
	)

	const rootClass = useMemo(() => classes[`root--${priority}`], [priority])

	console.log({ priority, classes, rootClass })

	return (
		<button className={rootClass} onClick={handleClick} type={type}>
			<span className={classes.content}>
				<span className={classes.icon} />
				{children}
			</span>
		</button>
	)
}

export default Button
