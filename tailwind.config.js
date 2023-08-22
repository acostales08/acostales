/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'phone': '480px',   // Custom phone breakpoint
        'tablet': '768px',  // Custom tablet breakpoint
        'desktop': '1024px', // Custom desktop breakpoint
      },
    },
  },
  plugins: [],
}