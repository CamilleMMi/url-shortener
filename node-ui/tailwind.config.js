export default {
    content: [
      "./index.html",
      "./src/**/*.{js,jsx}"
    ],
    theme: {
      extend: {
        colors: {
          primary: {
            50:  '#fff8f1',
            100: '#feecdc',
            200: '#fcd9b6',
            300: '#fdba74',
            400: '#fb923c',
            500: '#f97316',
            600: '#ea580c',
            700: '#c2410c',
            800: '#9a3412',
            900: '#7c2d12',
            950: '#431407',
          },
        },
        fontFamily: {
          sans: ['Inter', 'system-ui'],
        },
      },
    },
    plugins: [],
}