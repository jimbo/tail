const COLORS = {
	brand: {
		400: "38 128 235",
		500: "20 115 230",
		600: "13 102 208",
		700: "9 90 186"
	},
	neutral: {
		50: "255 255 255",
		75: "250 250 250",
		100: "245 245 245",
		200: "234 234 234",
		300: "225 225 225",
		400: "202 202 202",
		500: "179 179 179",
		600: "142 142 142",
		700: "110 110 110",
		800: "75 75 75",
		900: "44 44 44"
	}
}

const PREFIX = "--color"

// create color-weight functions for export to `tailwind.config.js`
// these functions *read* values from custom properties
const createThemeColors = (data, prefix) => {
	const colors = {}

	for (const [color, weights] of Object.entries(data)) {
		const functions = {}

		for (const [weight] of Object.entries(weights)) {
			functions[weight] = (opacityArgs) => {
				const { opacityVariable, opacityValue } = opacityArgs
				const property = `${prefix}-${color}-${weight}`

				return opacityValue != null
					? `rgb(var(${property}) / ${opacityValue})`
					: opacityVariable != null
					? `rgb(var(${property}) / var(${opacityVariable}, 1))`
					: `rgb(var(${property}))`
			}
		}

		colors[color] = functions
	}

	return colors
}

// create a custom property declaration for each color-weight
// these declarations *write* values to custom properties
const declareColors = (data = COLORS, prefix = PREFIX) => {
	const declarations = {}

	for (const [color, weights] of Object.entries(data)) {
		for (const [weight, value] of Object.entries(weights)) {
			declarations[`${prefix}-${color}-${weight}`] = value
		}
	}

	return declarations
}

module.exports = {
	colors: createThemeColors(COLORS, PREFIX),
	declareColors
}
