const plugin = require("tailwindcss/plugin")
const { withOpacity } = require("../lib/opacity")

const addRulesets = ({ addComponents, theme }) => {
	addComponents({
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
			textTransform: "uppercase",
			transitionDuration: theme("transitionDuration.DEFAULT"),
			transitionProperty: theme("transitionProperty.colors"),
			transitionTimingFunction: theme("transitionTimingFunction.DEFAULT")
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
			borderColor: "var(--stroke)",
			borderRadius: theme("borderRadius.full"),
			borderWidth: theme("borderWidth.2"),
			height: theme("height.4"),
			margin: theme("margin")["0.5"],
			minWidth: theme("width.4"),
			transitionDuration: theme("transitionDuration.DEFAULT"),
			transitionProperty: theme("transitionProperty.colors"),
			transitionTimingFunction: theme("transitionTimingFunction.DEFAULT"),
			width: theme("width.4")
		},

		".button--high": {
			"--fill": theme("colors.brand.400"),
			"--stroke": theme("colors.neutral.50"),
			"backgroundColor": "var(--fill)",
			"borderColor": "var(--fill)",
			"color": "var(--stroke)"
		},
		".button--low": {
			"--fill": withOpacity(
				theme("colors.neutral.50"),
				theme("opacity.0")
			),
			"--stroke": theme("colors.neutral.900"),
			"backgroundColor": "var(--fill)",
			"borderColor": "var(--fill)",
			"color": "var(--stroke)"
		},
		".button--normal": {
			"--fill": withOpacity(
				theme("colors.neutral.50"),
				theme("opacity.0")
			),
			"--stroke": theme("colors.neutral.900"),
			"backgroundColor": "var(--fill)",
			"borderColor": "var(--stroke)",
			"color": "var(--stroke)",
			"&:hover": {
				"--fill": theme("colors.neutral.900"),
				"--stroke": theme("colors.neutral.50"),
				"borderColor": "var(--fill)"
			}
		},

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
		},

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

		".heading": {
			color: theme("colors.neutral.900"),
			fontWeight: theme("fontWeight.semibold")
		},

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