/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./content/**/*.mdx",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      textColor: {
        primary: "var(--gray-12)",
        secondary: "var(--gray-11)",
        tertiary: "var(--gray-9)",
        brand: "var(--brand)",
      },
      backgroundColor: {
        primary: "var(--gray-1)",
        secondary: "var(--gray-3)",
        secondaryA: "var(--gray-a3)",
        tertiary: "var(--gray-2)",
      },
      borderColor: {
        primary: "var(--gray-6)",
        secondary: "var(--gray-4)",
      },
      ringOffsetColor: {
        primary: "var(--gray-12)",
      },
      keyframes: {
        in: {
          "0%": { transform: "translateY(18px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        "in-reverse": {
          "0%": { transform: "translateY(-18px)", opacity: 0 },
          "100%": { transform: "translateY(0px)", opacity: 1 },
        },
        reveal: {
          from: {
            opacity: "0%",
            transform: "translateY(40px)",
          },
          to: {
            opacity: "100%",
            transform: "translateY(0px)",
          },
        },
        scaleFade: {
          from: {
            opacity: "0%",
            transform: "scale(0.75)",
          },
          to: {
            opacity: "100%",
            transform: "scale(1)",
          },
        },
        modalReveal: {
          from: {
            opacity: "0%",
            transform: "scale(0.7) translateY(100px)",
          },
          to: {
            opacity: "100%",
            transform: "scale(1) translateY(0px) rotate(0deg)",
          },
        },

        rotate: {
          from: {
            opacity: "0%",
            transform: "translateY(40px) rotate(6deg)",
          },
          to: {
            opacity: "100%",
            transform: "translateY(0px) rotate(0deg)",
          },
        },

        rotateAlt: {
          from: {
            opacity: "0%",
            transform: "translateY(40px) rotate(-6deg)",
          },
          to: {
            opacity: "100%",
            transform: "translateY(0px) rotate(0deg)",
          },
        },
      },
      animation: {
        fadeXs: "fade 0.2s forwards",
        fadeSm: "fade 0.4s forwards",
        fade: "fade 0.8s forwards",
        fadeMd: "fade 1.2s forwards",
        fadeLg: "fade 1.6s forwards",
        fadeXl: "fade 2s forwards",

        in: "in .6s both",
        "in-reverse": "in-reverse .6s both",

        scaleFade: "scaleFade 0.4s cubic-bezier(0.7,0,0.5,2) forwards",

        revealSm: "reveal 0.8s cubic-bezier(0.5,-0.2,0.1,1.2) forwards",
        reveal: "reveal 1.2s cubic-bezier(0.5,-0.2,0.1,1.3) forwards",
        revealMd: "reveal 1.4s cubic-bezier(0.5,-0.2,0.1,1.4) forwards",
        revealLg: "reveal 1.6s cubic-bezier(0.5,-0.2,0.1,1.5) forwards",
        modalReveal: "modalReveal 0.6s cubic-bezier(0,1,0,1.1) forwards",

        rotate: "rotate 1s cubic-bezier(0.5,-0.5,0.1,1.8) forwards",
        rotateAlt: "rotateAlt 1s cubic-bezier(0.5,1,0.1,1.8) forwards",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
