const basePlugins = require("./base")
const componentPlugins = require("./components")

module.exports = [...basePlugins, ...componentPlugins]
