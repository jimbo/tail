import { useMemo } from "react"
import { useStyle } from "../Style"
import classes from "./productOptions.module.css"

const data = [
	{
		key: "color",
		name: "Color",
		swatch: true,
		values: [
			["#c038cc", "Fuchsia"],
			["#1b959a", "Seafoam"],
			["#85d044", "Chartreuse"],
			["#9256d9", "Purple"]
		]
	},
	{
		key: "size",
		name: "Size",
		swatch: false,
		values: [
			["XS", "XS"],
			["S", "S"],
			["M", "M"],
			["L", "L"]
		]
	}
]

const ProductOptions = (props) => {
	const optionElements = useMemo(
		() => data.map((option) => <ProductOption {...option} />),
		[]
	)

	return <div className={classes.root}>{optionElements}</div>
}

export default ProductOptions

const ProductOption = (props) => {
	const { name, swatch, values } = props

	useStyle(classes)

	const valueElements = useMemo(
		() =>
			values.map(([value, label]) => (
				<li key={value} className={classes.value}>
					<ProductOptionValue
						label={label}
						swatch={swatch}
						value={value}
					/>
				</li>
			)),
		[swatch, values]
	)

	return (
		<div className={classes.option}>
			<h3 className={classes.name}>{name}</h3>
			<ul className={classes.values}>{valueElements}</ul>
			<dl className={classes.selection}>
				<dt className={classes.selectionLabel}>Selected value:</dt>
				<dd className={classes.selectionValue}></dd>
			</dl>
		</div>
	)
}

const ProductOptionValue = (props) => {
	const { label, swatch, value } = props

	const swatchStyle = useMemo(
		() => (swatch ? { "--data-value": value } : null),
		[swatch, value]
	)

	return (
		<button className={classes.valueButton} type="button">
			<span className={classes.valuePreview} style={swatchStyle} />
			<span className={classes.valueLabel}>{label}</span>
		</button>
	)
}
