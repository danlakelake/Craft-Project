module.exports = {
  content: [
    "./templates/**/*.twig",   // templates Twig
    "./src/**/*.{js,css}",     // JS y CSS fuente
    "./web/**/*.twig",         // Twig en web/
    "./web/**/*.js"            // JS en web/
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}