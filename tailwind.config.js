import * as defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
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
