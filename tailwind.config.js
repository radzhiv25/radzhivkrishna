/** @type {import('tailwindcss').Config} */
export default {
	darkMode: "class",
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				primary: "#1890ff", // Change to your preferred primary color
				secondary: "#52c41a", // Example: success green
			},
			backgroundSize: {
				'300%': '300%',
			},
			animation: {
				gradient: 'animatedgradient 6s ease infinite alternate',
			},
			animation: {
				scroll: "scroll 15s linear infinite",
			},
			keyframes: {
				scroll: {
					"0%": { transform: "translateX(0)" },
					"100%": { transform: "translateX(-100%)" }
				},
				animatedgradient: {
					'0%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' },
					'100%': { backgroundPosition: '0% 50%' },
				},
			},
		},
	},
	plugins: [],
}