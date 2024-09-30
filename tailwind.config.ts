import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))"
      },
      colors: {
        green: {
          dark: "var(--color-green-dark)",
          light: "var(--color-green-light)"
        },
        foreground: "rgb(var(--foreground-rgb))",
        background: "rgb(var(--background-rgb))"
      }
    }
  },
  plugins: []
}
export default config
