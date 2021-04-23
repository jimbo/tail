const addRulesets = ({ addComponents, theme }) => {
	addComponents({
		".foo": {
			alignItems: "center",
			display: "flex",
			justifyContent: "center"
		},
		".foo-inline": {
			alignItems: "center",
			display: "inline-flex",
			justifyContent: "center"
		}
	})
}

const ID = "foo"
module.exports = [ID, addRulesets]
