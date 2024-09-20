/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        nav: "#a16c8b",
        page: "#d0d2d6",
        card: "#bab5b8",
        "card-hover": "#a16c8b",
        "default-text": "#292a2b",
        "blue-accent": "#a16c8b",
        "blue-accent-hover": "#a16c8b",
        "btn-hover": "#e6bcd4",
      },
    },
  },
  plugins: [],
};
