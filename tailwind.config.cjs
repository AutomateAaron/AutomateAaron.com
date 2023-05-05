const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');
const daisyui = require('daisyui');
const typography = require('@tailwindcss/typography');
const plugin = require('tailwindcss/plugin')

console.log(typography.defaultTheme)

/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts,md}'],

	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: '1rem',
				sm: '2rem',
				lg: '3rem',
				xl: '4rem',
			},
			// default breakpoints but with 40px removed
			screens: {
				sm: defaultTheme.screens['xs'],
				md: defaultTheme.screens['sm'],
				lg: defaultTheme.screens['md'],
				xl: defaultTheme.screens['lg'],
				'2xl': defaultTheme.screens['xl'],
			},
		},
		extend: {
			aspectRatio: {
				'4/3': '4 / 3',
				'3/2': '3 / 2',
			},
			animation: {
				'spin-slow': 'spin 48s linear infinite',
				'move-y': 'move-y 8s linear infinite',
				'move-x': 'move-x 8s linear infinite',
				'wiggle': 'wiggle 500ms linear infinite',
			},
			keyframes: {
				'move-y': {
					'0%, 100%': { transform: 'translateY(-0.75rem)' },
					'50%': { transform: 'translateY(0.75rem)' },
				},
				'move-x': {
					'0%, 100%': { transform: 'translateX(-0.75rem)' },
					'50%': { transform: 'translateX(0.75rem)' },
				},
				'wiggle': {
					'25%': { transform: 'rotate(5deg)' },
					'75%': { transform: 'rotate(-5deg)' },
				}
			},
			borderRadius: {
				sm: defaultTheme.borderRadius['md'],
				DEFAULT: defaultTheme.borderRadius['lg'],
				md: defaultTheme.borderRadius['xl'],
				lg: defaultTheme.borderRadius['2xl'],
				xl: defaultTheme.borderRadius['3xl'],
				'2xl': '2rem',
				'3xl': '2.5rem',
			},
		},

		fontFamily: {
			sans: ['"Source Sans Pro"', ...defaultTheme.fontFamily.sans],
			serif: ['"Source Serif Pro"', ...defaultTheme.fontFamily.serif],
			mono: ['"Source Code Pro"', ...defaultTheme.fontFamily.mono],
		},
	},

	daisyui: {
		themes: [
			{
				mytheme: {
					primary: colors.violet[700],
					'primary-content': colors.slate[100],
					secondary: '#F9D72F',

					accent: colors.slate[800],
					'accent-content': colors.slate[200],

					neutral: colors.slate[600],
					'neutral-content': colors.slate[50],
					'base-100': colors.slate[50],
					'base-200': colors.slate[100],
					'base-300': colors.slate[200],
					'base-content': colors.slate[800],
					info: '#3ABFF8',
					success: '#36D399',
					warning: '#FBBD23',
					error: '#F87272',

					'--rounded-btn': '1rem',
					'--border-btn': '0.25rem',
					'--btn-text-case': 'none',
				},
			},
		],
	},

	plugins: [
		typography,
		daisyui,
		plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "animation-delay": (value) => {
            return {
              "animation-delay": value,
            };
          },
        },
        {
          values: theme("transitionDelay"),
        }
      );
    }),],
};
