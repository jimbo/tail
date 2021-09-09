const { stringifyRequest } = require("loader-utils")

const loader = function loader() {}

loader.pitch = function pitch(request) {
	const req = stringifyRequest(this, `!!${request}`)

	return `
const css = require(${req}).default
exports = module.exports = css.locals || {}
exports._getCss = () => css.toString()
exports._getPath = () => css[0][0]
    `
}

module.exports = loader
