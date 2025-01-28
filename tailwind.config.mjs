/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        neumorphic: "6px 6px 10px rgba(0, 0, 0, 0.25), -6px -6px 10px rgba(255, 255, 255, 0.8)",
        neumorphicHover: "8px 8px 15px rgba(0, 0, 0, 0.25), -8px -8px 15px rgba(255, 255, 255, 0.8)",
      },
      colors: {
        darkText: "#001120",
        colorWhite: "#ffffff",
        colorBrightPurple: "#6b4aff",
        colorBlue: "#1271FF",
        colorPurple: "#6464FF",
        colorLightBlue: "#32A0DC",
        colorMidPurple: "#502F7A",
      },
    },
  },
  plugins: [],
};

export default tailwindConfig;
