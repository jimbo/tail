const plugin = require("tailwindcss/plugin")

const addRulesets = ({ addUtilities, theme }) => {
	// addUtilities()
}

module.exports = [plugin(addRulesets)]

/*
const createRulesets = (config, getSelector, getDeclarations) => {
    const rulesets = {}

    for (const [key, value] of config) {
        const selector = getSelector(key)
        const declarations = getDeclarations(value)

        rulesets[selector] = declarations
    }

    return rulesets
}
*/
