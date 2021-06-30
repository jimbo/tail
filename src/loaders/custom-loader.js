const { stringifyRequest } = require("loader-utils")
const { v4: uuidv4 } = require("uuid")

const loader = function loader() {}

loader.pitch = function pitch(request) {
	const req = stringifyRequest(this, `!!${request}`)
	const uuid = uuidv4()

	return `
const css = require(${req}).default
exports = module.exports = css.locals
exports._getCss = () => css.toString()
exports._getPath = () => css[0][0].split("/").pop()
exports._getUuid = () => "${uuid}"
    `
}

module.exports = loader
