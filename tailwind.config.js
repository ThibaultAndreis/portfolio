import * as defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				rosePineMoon: {
					base: '#232136',
					surface: '#2a273f',
					overlay: '#393552',
					muted: '#6e6a86',
					subtle: '#908caa',
					text: '#e0def4',
					love: '#eb6f92',
					gold: '#f6c177',
					rose: '#ea9a97',
					pine: '#3e8fb0',
					foam: '#9ccfd8',
					iris: '#c4a7e7',
					highlightLow: '#2a283e',
					highlightMed: '#44415a',
					highlightHigh: '#56526e'
				},
				rosePineDawn: {
					base: '#faf4ed',
					surface: '#fffaf3',
					overlay: '#f2e9e1',
					muted: '#9893a5',
					subtle: '#797593',
					text: '#575279',
					love: '#b4637a',
					gold: '#ea9d34',
					rose: '#d7827e',
					pine: '#286983',
					foam: '#56949f',
					iris: '#907aa9',
					highlightLow: '#f4ede8',
					highlightMed: '#dfdad9',
					highlightHigh: '#cecacd'
				}
			},
			height: {
				screen: ['100vh', '100dvh']
			},
			fontFamily: {
				sans: ['quicksand', 'quicksand-fallback', ...defaultTheme.fontFamily.sans],
				serif: ['italiana', 'italiana-fallback', ...defaultTheme.fontFamily.serif]
			}
		}
	}
};
