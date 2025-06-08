 /** @type {import('tailwindcss').Config} */
export default {
  presets:[
    require("@radui/ui/themes/tailwind-presets/default.js") // import this
  ],
   content: ["./src/**/*.{html,js}"],
   theme: {
     extend: {},
   },
   plugins: [],
 }