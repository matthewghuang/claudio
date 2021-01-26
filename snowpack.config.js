module.exports = {
	plugins: [
		"@snowpack/plugin-svelte"
	],
	experiments: {
		optimize: {
			bundle: true,
			minify: true,
			target: "es2017"
		}
	},
	mount: {
		"src": "/"
	}
}