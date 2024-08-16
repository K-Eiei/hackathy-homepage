/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // fontFamily: {
      //   sans: ["Sans Serif", "system-ui"], // default sans-serif font
      //   "mplus-rounded": ['"M PLUS Rounded 1c"', "sans-serif"], // M PLUS Rounded 1c font
      // },
      // fontWeight: {
      //   normal: 400,
      //   bold: 700,
      // },
      colors: {
        background: "rgba(var(--background))",
        "cta-bg": "rgba(var(--background))",
        card: "rgba(var(--card))",
        border: "rgba(var(--border))",
        "cta-text": "rgba(var(--cta-text))",
        "cta-btn-text": "rgba(var(--cta-btn-text))",
        "cta-link": "rgba(var(--cta-link))",
        "cta-btn": "rgba(var(--cta-btn))",
      },
    },
  },
  plugins: [],
};
