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
				borderColor: '#E3D9FF',
				bgColor: '#F9F6FF',
				dividerColor: 'rgba(190, 190, 190, 1)'
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
		})
	]
};

module.exports = config;