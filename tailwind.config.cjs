const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {},
		colors: {
			primary: colors.violet,
			gray: colors.gray,
		},
		fontFamily: {
			sans: ['"Source Sans Pro"', ...defaultTheme.fontFamily.sans],
			serif: ['"Source Serif Pro"', ...defaultTheme.fontFamily.serif],
			mono: ['"Source Code Pro"', ...defaultTheme.fontFamily.mono]
		}
	},
	plugins: []
};
