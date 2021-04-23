const addRulesets = ({ addComponents, theme }) => {
	addComponents({
		".heading": {
			color: theme("colors.neutral.900"),
			fontWeight: theme("fontWeight.semibold")
		}
	})
}

const ID = "heading"
module.exports = [ID, addRulesets]
