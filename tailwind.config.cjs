const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	mode: 'jit',
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				primary: '#7443FF',
				secondary: '#232323',
				lightText: '#898989',
				borderColor: '#E3D9FF'
			},
			width: {
				120: '30rem'
			},
			inset: {
				12.5: '12.5%'
			},
			fontFamily: {
				primary: ['Red Hat Display', 'sans-serif'],
				secondary: ['Barlow', 'sans-serif']
			}
		}
	},

	daisyui: {
		themes: false
	},

	plugins: [
		require('@tailwindcss/forms')({
			strategy: 'class'
		}),
		require('daisyui')
	]
};

module.exports = config;
