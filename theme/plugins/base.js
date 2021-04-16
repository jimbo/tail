const plugin = require("tailwindcss/plugin")
const { declareColors } = require("../lib/colors")

const addRulesets = ({ addBase, theme }) => {
	addBase({
		":root": declareColors(),

		"body": {
			backgroundColor: theme("colors.neutral.50"),
			color: theme("colors.neutral.800"),
			fontSize: theme("fontSize.DEFAULT")
		}
	})
}

module.exports = [plugin(addRulesets)]
