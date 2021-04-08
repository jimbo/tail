import { useMemo } from "react"
import classes from "./productOptions.module.css"

const data = [{
    key: "color",
    name: "Color",
    swatch: true,
    values: [
        ["#c038cc", "Fuchsia"],
        ["#1b959a", "Seafoam"],
        ["#85d044", "Chartreuse"],
        ["#9256d9", "Purple"]
    ]
}]

const ProductOptions = props => {
    const optionElements = useMemo(() => data.map(
        option => <ProductOption {...option} />
    ), [])

    return (
        <div className={classes.options}>
            {optionElements}
        </div>
    )
}

export default ProductOptions





const ProductOption = props => {
    const { name, swatch, values } = props

    const valueElements = useMemo(() => values.map(
        ([value, label]) => (
            <li key={value} className={classes.value}>
                <ProductOptionValue
                    label={label}
                    swatch={swatch}
                    value={value}
                />
            </li>
        )
    ), [swatch, values])

    return (
        <div className={classes.option}>
            <h3 className={classes.name}>{name}</h3>
            <ul className={classes.values}>{valueElements}</ul>
            <dl className={classes.selection}>
                <dt>Selected value:</dt>
                <dd>hello</dd>
            </dl>
        </div>
    )
}

const ProductOptionValue = props => {
    const { label, swatch, value } = props

    return (
        <button className={classes.button} type="button">
            <span>{label}</span>
        </button>
    )
}
