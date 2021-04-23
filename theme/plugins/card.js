const addRulesets = ({ addComponents, theme }) => {
	addComponents({
		".card": {
			borderColor: `transparent transparent ${theme(
				"colors.neutral.200"
			)}`,
			borderWidth: `${theme("borderWidth.DEFAULT")} ${theme(
				"borderWidth.0"
			)}`,
			display: "grid",
			gap: theme("gap.xs"),
			gridTemplateRows: theme("gridTemplateRows.common")
		},
		".card-header": {
			alignItems: "center",
			display: "flex",
			minHeight: theme("height.12")
		},
		".card-title": {
			margin: `${theme("margin.6")} ${theme("margin.0")}`
		}
	})
}

const ID = "card"
module.exports = [ID, addRulesets]
