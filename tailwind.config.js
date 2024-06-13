/** @type {import('tailwindcss').Config} */
export const content = ["./index.html", "./src/**/*.js"];
export const theme = {
  extend: {
    colors: {
      green: {
        "200l": "hsl(148, 38%, 91%)",
        "600m": "hsl(169, 82%, 27%)"
      },
      "red": "hsl(0, 66%, 54%)",
      custom: {
        'white': "hsl(0, 0%, 100%)",
        gray: {
          "500": "hsl(186, 15%, 59%)",
          "900": "hsl(187, 24%, 22%)",
        },
      },
    },
    fontFamily: {
      karla: ['karlaFont', 'sans-serif']
    }
  },
};
export const plugins = [];

