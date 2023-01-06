/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#057aff",
        "primary-focus": "#0062d1",
        "primary-content": "#cce4ff",
        secondary: "#463aa1",
        "secondary-focus": "#392f83",
        "secondary-content": "#cdc7ff",
        accent: "#c149ad",
        "accent-focus": "#a0378e",
        "accent-content": "#ffccf6",
        neutral: "#021431",
        "neutral-focus": "#021027",
        "neutral-content": "#a3c6ff",
        "base-100": "#ffffff",
        "base-200": "#f0f6ff",
        "base-300": "#e2e8f4",
        "base-content": "#394E6A",
        info: "#e2e8f4",
        "info-content": "#004152",
        success: "#80ced1",
        "success-content": "#004042",
        warning: "#efd8bd",
        "warning-content": "#572e00",
        error: "#572e00",
        "error-content": "#572e00",
      },
    },
  },
  plugins: [],
};
