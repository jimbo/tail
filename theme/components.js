const plugin = require("tailwindcss/plugin")

const addRulesets = ({ addComponents, theme }) => {
	addComponents({
		// BUTTON
		".button": {
			appearance: "none",
			background: "none",
			borderRadius: theme("borderRadius.full"),
			borderWidth: theme("borderWidth.2"),
			fontSize: theme("fontSize.100"),
			fontWeight: theme("fontWeight.bold"),
			lineHeight: theme("lineHeight.5"),
			maxWidth: theme("maxWidth.full"),
			minWidth: theme("minWidth.40"),
			paddingBottom: `calc(${theme("padding.2")} - 1px )`,
			paddingLeft: theme("padding.6"),
			paddingRight: theme("padding.6"),
			paddingTop: `calc(${theme("padding.2")} + 1px )`,
			textTransform: "uppercase"
		},
		".button-content": {
			alignItems: "center",
			columnGap: "0.75ch",
			display: "grid",
			gridAutoFlow: "column",
			justifyContent: "center",
			justifyItems: "center"
		},
		".button-icon": {
			borderColor: theme("colors.neutral.900"),
			borderRadius: theme("borderRadius.full"),
			borderWidth: theme("borderWidth.2"),
			height: theme("height.4"),
			margin: theme("margin")["0.5"],
			minWidth: theme("width.4"),
			width: theme("width.4")
		},

		// CARD
		".card": {
			borderColor: `transparent transparent ${theme(
				"colors.neutral.200"
			)}`,
			borderWidth: `${theme("borderWidth.DEFAULT")} ${theme(
				"borderWidth.0"
			)}`,
			display: "grid",
			gap: theme("gap.3"),
			gridTemplateRows: theme("gridTemplateRows.common")
		},
		".card-header": {
			alignItems: "center",
			display: "flex",
			minHeight: theme("height.12")
		},
		".card-title": {
			margin: `${theme("margin.6")} ${theme("margin.0")}`
		},

		// FOO
		".foo": {
			alignItems: "center",
			display: "flex",
			justifyContent: "center"
		},
		".foo-inline": {
			alignItems: "center",
			display: "inline-flex",
			justifyContent: "center"
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
		".rail-body": {}
	})
}

module.exports = [plugin(addRulesets)]
