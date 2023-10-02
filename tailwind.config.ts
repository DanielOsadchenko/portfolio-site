import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cWhite: "#EDE9FF",
        cWhiteDark: "#E2DBFF",
        cVioletLight: "#9074FF",
        cVioletDark: "#714EFF",
        cVioletLightTransp: "rgba(144, 116, 255, 0.70)",
        cVioletDarkTransp: "rgba(113, 78, 255, 0.70)",
        cWhiteTransp: "rgba(237, 233, 255, 0.30)",
        cAccent: "#4D21FF",
      },
      fontSize: {
        mobName: "40px",
        mobTab: "100px",
      },
      borderRadius: {
        sm: "12px",
        tabTag: "18px",
        m: "20px",
        xl: "44px",
      },
      backgroundImage: {
        headerBg: "url('/header.svg')",
      },
    },
  },
  plugins: [],
};
export default config;
