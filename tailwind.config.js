const { fontFamily } = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class', // Stelle sicher, dass du den darkMode in deinem Projekt entsprechend handhabst
  theme: {
    extend: {
      colors: {
        'gray-1000': '#050505', // Eigene Farbdefinition
        gray: colors.neutral, // Verwenden der neutralen Farbpalette von Tailwind
      },
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans], // Integration der Inter-Schriftart
      },
    },
  },
  // Die Variants-Sektion ist optional, da du sie nicht erweitert hast und Tailwind v3 keine Konfiguration dafür benötigt
  plugins: [], // Plugins hier hinzufügen, wenn notwendig
}
