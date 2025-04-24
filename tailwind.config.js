module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-gilmer)', 'sans-serif'], // ✅ This maps font-sans to Gilmer
      },
      backgroundImage: {
        "hero": "url('/bg-hero.jpg')",
        "world-map": "url('/image-world-map.png')"
      },
    },
  },
  
}