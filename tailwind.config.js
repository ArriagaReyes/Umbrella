module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateColumns: {
        'full-bleed': '1fr min(65ch, 100%) 1fr'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
