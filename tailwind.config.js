// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563eb",
        secondary: "#64748b",
        destructive: "#ef4444",
        muted: "#f5f5f5",
        accent: "#e0f2fe",
        background: "#ffffff",
        foreground: "#0f172a",
      },
    },
  },
  plugins: [],
}
