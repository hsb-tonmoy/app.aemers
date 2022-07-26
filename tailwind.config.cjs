const config = {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],
	mode: 'jit',
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				primary: '#7443FF',
				primaryDarker: '#5F27FF',
				secondary: '#232323',
				lightText: '#898989',
				lighterText: '#727272',
				borderColor: '#E3D9FF',
				bgColor: '#F9F6FF',
				dividerColor: '#BEBEBE',
				greenSignal: '#01CF85',
				redSignal: '#FF6D6D'
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

	plugins: [
		require('@tailwindcss/forms')({
			strategy: 'class'
		}),
		require('flowbite/plugin')
	]
};

module.exports = config;
