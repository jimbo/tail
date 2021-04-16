const base = require("./plugins/base")
const components = require("./plugins/components")
const utilities = require("./plugins/utilities")

module.exports = [...base, ...components, ...utilities]
