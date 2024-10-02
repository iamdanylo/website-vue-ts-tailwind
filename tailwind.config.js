import { fontSize, fontFamily } from './tailwind.typography'
import { colors, backgroundImage } from './tailwind.colors'
import { letterSpacing, boxShadow, screens, borderRadius } from './tailwind.common'

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // or 'media' based on your preference
  content: [
    "./src/components/**/*.{js,ts,vue,mdx}",
    "./src/sections/**/*.{js,ts,vue,mdx}",
    "./src/**/*.{js,ts,vue,mdx}",
    "./src/**/**/*.{js,ts,vue,mdx}",
  ],

  theme: {
    extend: {
      fontSize,
      colors,
      backgroundImage: {
        ...backgroundImage,
      },
      letterSpacing,
      boxShadow,
      borderRadius,
    },
    screens,
    fontFamily,
  },
  plugins: [],
}

