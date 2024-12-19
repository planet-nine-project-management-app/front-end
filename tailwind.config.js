/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    './src/**/*.{js,ts,jsx,tsx}', // Adjust paths according to your project structure
  ],
  theme: {
    extend: {
      colors: {
        primary: "#29d196",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      borderRadius: {
        '1.5rem': '1.5rem',
      },
    },
  },
  plugins: [],
};
