const addRulesets = ({ addComponents, theme }) => {
	addComponents({
		".rail-header": {
			alignItems: "baseline",
			borderColor: `transparent transparent ${theme(
				"colors.neutral.200"
			)}`,
			borderWidth: `${theme("borderWidth.2")} ${theme("borderWidth.0")}`,
			display: "flex",
			fontWeight: theme("fontWeight.semibold"),
			padding: `${theme("padding.2")} ${theme("padding.0")}`
		},
		".rail-title": {
			flex: theme("flex.auto"),
			fontSize: theme("fontSize.600")
		},
		".rail-body": {}
	})
}

const ID = "rail"
module.exports = [ID, addRulesets]
