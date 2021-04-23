const addRulesets = ({ addBase, theme }) => {
	addBase({
		body: {
			backgroundColor: theme("colors.neutral.50"),
			color: theme("colors.neutral.800"),
			fontSize: theme("fontSize.DEFAULT")
		}
	})
}

const ID = "body"
module.exports = [ID, addRulesets]
