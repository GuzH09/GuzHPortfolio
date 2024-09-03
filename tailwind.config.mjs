/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial-dark": "radial-gradient(circle, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 40%, rgba(31, 36, 45, 1) 70%)",
				"gradient-radial-light": "radial-gradient(circle, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 25%, rgba(241, 245, 249, 1) 55%)",
			}
		},
	},
	plugins: [],
}
