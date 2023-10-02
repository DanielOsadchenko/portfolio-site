import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
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
  darkMode: "class",
  plugins: [
    nextui({
      prefix: "nextui", // prefix for themes variables
      addCommonColors: false, // override common colors (e.g. "blue", "green", "pink").
      defaultTheme: "customTheme", // default theme from the themes object
      defaultExtendTheme: "customTheme", // default theme to extend on custom themes
      layout: {}, // common layout tokens (applied to all themes)
      themes: {
        light: {
          layout: {}, // light theme layout tokens
          colors: {}, // light theme colors
        },
        dark: {
          layout: {}, // dark theme layout tokens
          colors: {}, // dark theme colors
        },
        customTheme: {
          layout: {}, // light theme layout tokens
          colors: {},
        },
      },
    }),
  ],
};
export default config;
