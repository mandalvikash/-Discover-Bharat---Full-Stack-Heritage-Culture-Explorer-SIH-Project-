/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#f8fafc", // light gray or use your preferred value
        foreground: "#1f2937",
        border: "#e5e7eb",
        ring: "#3b82f6",
      },
    },
  },
  plugins: [],
}
