import { useCallback, useMemo } from "react"
import { useStyle } from "../Style"
import classes from "./button.module.css"

const Button = (props) => {
	const { children, onClick, priority = "normal", type = "button" } = props

	useStyle(classes)

	const rootClass = useMemo(() => classes[`root--${priority}`], [priority])
	const handleClick = useCallback(
		(event) => {
			if (typeof onClick === "function") {
				onClick(event)
			}
		},
		[onClick]
	)

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
