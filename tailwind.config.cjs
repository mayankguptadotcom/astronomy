/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');


module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: colors.blue,
				secondary: colors.pink,
			},
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
		require("@tailwindcss/forms"),
	],
	darkMode: 'class',
};
