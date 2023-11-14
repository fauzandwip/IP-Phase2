/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'blue-primary': '#4c95ff',
				'blue-sec': '#eaf3ff',
				'white-primary': '#f8faff',
				'white-sec': '#eff4fb',
			},
		},
	},
	plugins: [],
};
