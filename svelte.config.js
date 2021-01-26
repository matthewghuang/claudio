const svelte_preprocess = require("svelte-preprocess")

const postcss = require("postcss")
const tailwindcss = require("tailwindcss")
const autoprefixer = require("autoprefixer")
const postcss_import = require("postcss-import")

const preprocess = svelte_preprocess({
	style: postcss,
	postcss: {
		plugins: [
			postcss_import,
			tailwindcss,
			autoprefixer
		]
	}
})

module.exports = { preprocess }