import { useMemo } from "react"

const Raw = (props) => {
	const { markup } = props
	const innerHTML = useMemo(() => ({ __html: markup }), [markup])

	return <div dangerouslySetInnerHTML={innerHTML} />
}

export default Raw
