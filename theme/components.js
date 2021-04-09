const plugin = require("tailwindcss/plugin")

const addRulesets = ({ addComponents, theme }) => {
	addComponents({
		// CARD
		".card": {
			borderColor: `transparent transparent ${theme(
				"colors.neutral.200"
			)}`,
			borderWidth: `${theme("borderWidth.DEFAULT")} ${theme(
				"borderWidth.0"
			)}`
		},
		".card-header": {
			alignItems: "center",
			display: "flex",
			height: theme("height.18")
		},

		// FOO
		".foo": {
			alignItems: "center",
			display: "flex",
			justifyContent: "center",
			whiteSpace: "nowrap"
		},

		// HEADING
		".heading": {
			color: theme("colors.neutral.900"),
			fontWeight: theme("fontWeight.semibold")
		},

		// RAIL
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
		".rail-body": {
			padding: `${theme("padding.4")} ${theme("padding.0")}`
		}
	})
}

module.exports = [plugin(addRulesets)]
