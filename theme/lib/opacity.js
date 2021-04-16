// append an opacity parameter to a space-delimited color value
const withOpacity = (color = "rgb(255 255 255)", opacity = "1") =>
	color.replace(/\)$/, ` / ${opacity})`)

module.exports = {
	withOpacity
}
