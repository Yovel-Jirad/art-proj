module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          "primaryBG": "#242423", // Dark mode background color
          // Define other dark mode colors here
          "text": "#ffffff", // Dark mode text color
        },
        light: {
          "primaryBG": "#ccdade", // Light mode background color
          // Define other light mode colors here
          "text": "#000000", // Light mode text color
        },
      },
      fontFamily: {
        'primary': ['Inter', 'sans-serif'],
      },
      borderWidth: {
        'border': '1px', // Define the border-border class with a border width of 1px
      },
    },
  },
  plugins: [],
}
