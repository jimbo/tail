const plugins = require("./theme")
const { colors } = require("./theme/colors")

const matcher = /(?<=composes:.*)(\b\S+\b)(?=.*from global;)/g

module.exports = {
	corePlugins: {
		divideWidth: false,
		float: false
	},
	mode: "jit",
	plugins,
	purge: {
		content: ["./src/**/*.css"],
		extractors: [
			{
				extractor: (content) => content.match(matcher) || [],
				extensions: ["css"]
			}
		]
	},
	separator: "_",
	theme: {
		backgroundColor: (theme) => theme("colors"),
		borderColor: (theme) => theme("colors"),
		colors,
		extend: {
			gridTemplateColumns: {
				common: "auto 1fr"
			},
			gridTemplateRows: {
				common: "auto 1fr"
			},
			lineHeight: {
				DEFAULT: "1.5"
			}
		},
		fontFamily: {
			sans: ["Muli", "ui-sans-serif", "sans-serif"],
			serif: ["Source Serif Pro", "ui-serif", "serif"]
		},
		fontSize: {
			50: "0.6875rem",
			75: "0.75rem",
			100: "0.875rem",
			200: "1rem",
			300: "1.125rem",
			400: "1.25rem",
			500: "1.375rem",
			600: "1.5rem",
			700: "1.75rem",
			800: "2rem",
			900: "2.25rem",
			1000: "2.5rem",
			1100: "3rem",
			1200: "3.5rem",
			DEFAULT: "0.875rem"
		},
		height: (theme) => theme("width"),
		maxHeight: (theme) => theme("width"),
		maxWidth: (theme) => theme("width"),
		minHeight: (theme) => theme("width"),
		minWidth: (theme) => theme("width"),
		screens: {
			"xs": "480px",
			"sm": "640px",
			"md": "800px",
			"lg": "960px",
			"xl": "1020px",
			"2xl": "1280px",
			"3xl": "1440px"
		},
		width: {
			0: "0rem",
			1: "0.25rem",
			2: "0.5rem",
			3: "0.75rem",
			4: "1rem",
			5: "1.25rem",
			6: "1.5rem",
			7: "1.75rem",
			8: "2rem",
			9: "2.25rem",
			10: "2.5rem",
			11: "2.75rem",
			12: "3rem",
			14: "3.5rem",
			16: "4rem",
			18: "4.5rem",
			20: "5rem",
			22: "5.5rem",
			24: "6rem",
			26: "6.5rem",
			28: "7rem",
			30: "7.5rem",
			32: "8rem",
			34: "8.5rem",
			36: "9rem",
			38: "9.5rem",
			40: "10rem",
			full: "100%"
		}
	}
}
