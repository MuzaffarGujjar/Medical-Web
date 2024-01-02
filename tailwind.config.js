/** @type {import('tailwindcss').Config} */
export default {
  content: [  "./index.html", "./src/**/*.{js,ts,jsx,tsx}", ],
  theme: {
    extend: {
      colors: {
        hoverColor: "#ffc000",
        brightColor: "#dd8036",
        backgroungColor: "#36ae9a"
      },
    },
  },
  plugins: [],
}

