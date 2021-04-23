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
		}
	})
}

const ID = "button"
module.exports = [ID, addRulesets]
