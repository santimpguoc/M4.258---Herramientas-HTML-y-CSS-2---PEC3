/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    extend: {
      colors: {
        brand: "#B33A2B",        // teja
        albero: "#D9B148",
        piedra: "#f7f3ee",
        olivo: "#677B50",
        tinta: {
          DEFAULT: "#1C1C1C",
          soft: "#4B4B4B",
        },
        borde: "#E6D8C9",
        white: "#FFFFFF",
        bgcredit: "#001a66" /* Azul wireframe PEC */
      },

      fontFamily: {
        heading: ["Cormorant Garamond", "Merriweather", "serif"],
        base: ["Inter", "Source Sans 3", "system-ui", "sans-serif"],
      },

      // Layout (equivalente a contenedor máx. 72rem en PEC2)
      maxWidth: {
        container: "72rem",
      },

      // Sombras suaves tipo “card” (ajústala si en PEC2 tenías una exacta)
      boxShadow: {
        card: "0 1px 2px rgba(0,0,0,.06), 0 4px 12px rgba(0,0,0,.04)",
      },

      // Radios (si quieres fijar una equivalencia concreta)
      borderRadius: {
        soft: "0.75rem",
        xl: "1rem",
        "2xl": "1.25rem",
      },
    },
  },
  plugins: [],
};
