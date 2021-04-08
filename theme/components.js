const plugin = require('tailwindcss/plugin')

const addRulesets = ({ addComponents, theme }) => {
    addComponents({
        ".card": {
            borderColor: `transparent transparent ${theme("colors.neutral.200")}`,
            borderWidth: `${theme("borderWidth.DEFAULT")} 0px`
        },
        ".card-header": {
            alignItems: "center",
            display: "flex",
            height: theme("height.18")
        },

        ".rail-header": {
            alignItems: "baseline",
            borderColor: `transparent transparent ${theme("colors.neutral.200")}`,
            borderWidth: `${theme("borderWidth.2")} 0px`,
            display: "flex",
            fontWeight: theme("fontWeight.semibold"),
            padding: `${theme("padding.2")} ${theme("padding.0")}`

        },
        ".rail-title": {
            flex: theme("flex.auto"),
            fontSize: theme("fontSize.600"),
            fontWeight: theme("fontWeight.semibold")
        }
    })
}

module.exports = [plugin(addRulesets)]
