/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
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
