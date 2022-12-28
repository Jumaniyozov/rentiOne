/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
  theme: {
    extend: {
        fontFamily: {
            'decorator': ['"Playfair Display"']
        },
        colors: {
            'primary': "#F2F2F2",
            'black-primary': "#383838"
        },
        backgroundImage: {
            'hero-image': "url('/img/hero-cover.png')",
        },
        transformOrigin: {
            'zero': '0 0',
        }
    },
  },
  plugins: [],
}
