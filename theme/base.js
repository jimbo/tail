const plugin = require("tailwindcss/plugin")
const { declareColors } = require("./colors")

const addRulesets = ({ addBase }) => {
    addBase({
        ":root": declareColors()
    })
}

module.exports = [plugin(addRulesets)]
