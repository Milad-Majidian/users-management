/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      margin: {
        seperate: "13px",
      },
      borderWidth: {
        DEFAULT: "1px",
        0: "0",
        2: "2px",
        3: "3px",
        4: "4px",
        6: "6px",
        8: "8px",
      },
      colors: {
        primary: {
          main: "#5c68ac",
          light: "#5c68ac33",
        },
        secondary: "#19bfd3",
        bgPrimary: "#f7f7f8",
        bgSecondary: "#f7f7f8",
        textPrimary: "#1a2448",
        textSecondary: "#5d616f",
        iconPrimary: "#f3a826",
        iconSecondary: "#5d616f",
        iconlight: "#a1a3a8",
        borderPrimary: "#e5e5e5",
        borderSecondary: "#f2f2f2",
        gray: {
          custGray: "#5d616fdc",
          custBorders: "#ececec80",
          custIcon: "#808080",
          cardMobileborder: "#f4f4f4",
        },
        blue: {
          primary: "#2563eb",
          secondary: "#0221f3",
        },
      },

      boxShadow: {
        inputBox: "0 0 10px -2px rgba(0, 0, 0, 0.1);",
        Box: "0 0 10px -2px rgba(0, 0, 0, 0.1)",
        addToCardBtn: " 0 1px 5px rgb(0 0 0 / 20%)",
        custom: "-3px 4px 30px -2px rgba(0, 0, 0, 0.1)",
        darkCust: "0 0 11px rgba(33, 33, 33, 0.3)",
        cust: "0 2px 7px 2px rgba(0, 0, 0, 0.1)",
        custlight: "0 2px 7px 2px rgba(0, 0, 0, 0.05);",
      },

      fontFamily: {
        // sans: ["IRANSansX"],
        // serif: ["IRANSansX"],
        // mono: ["IRANSansX"],
        // display: ["IRANSansX"],
        // body: ["IRANSansX"],
      },
    },
  },
  plugins: [],
};
