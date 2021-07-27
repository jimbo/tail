const addRulesets = ({ addBase, theme }) => {
	addBase({
		body: {
			backgroundColor: theme("colors.neutral.50"),
			color: theme("venia.plugins.body.color"),
			fontSize: theme("fontSize.DEFAULT")
		}
	})
}

const ID = "body"
module.exports = [ID, addRulesets]
