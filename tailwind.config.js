module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-gilmer)', 'sans-serif'], // ✅ This maps font-sans to Gilmer
      },
    },
  },
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    // Add other folders if needed
  ],
}