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
        orange: "#FE6332",
        gray: "#EEEEEE",
        blue: "#82A0BF",
        grey:"#D8D8D8"
      },
      fontFamily: {
        stretch: ["pro"],
        outline: ["mortend"],
      },
      backgroundImage: {
        user1: "url('../Images/home2.svg')",
        user2: "url('../Images/user2.svg')",
        user3: "url('../Images/user3.svg')",
        small: "url('../Images/small.svg')",
       
      },
    },
  },
  plugins: [],
};
export default config;
