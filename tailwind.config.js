/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    extend: {
      colors: {
        brand: "#B33A2B",        // teja
        albero: "#d9a441",
        piedra: "#f7f3ee",
        olivo: "#677B50",
        tinta: {
          DEFAULT: "#1C1C1C",
          soft: "#4B4B4B",
        },
        borde: "#E6D8C9",
        white: "#FFFFFF",
        bgcredit: "#001a66", /* Azul wireframe PEC */

        // Colores adicionales para la web generada por ia
        "ai-bg": "#F6F1E9",
        "ai-ink": "#1C1C1C",
        "ai-ink-soft": "#4B4B4B",
        "ai-border": "#E6D8C9",
        "ai-accent": "#B33A2B",
      },

      fontFamily: {
        heading: ["Cormorant Garamond", "Merriweather", "serif"],
        base: ["Inter", "Source Sans 3", "system-ui", "sans-serif"],

        // Fuentes para la web generada por ia
        aiheading: ["Cormorant Garamond", "Merriweather", "serif"],
        aibase: ["Inter", "Source Sans 3", "system-ui", "sans-serif"]
      },

      // Tamaños de fuente específicos para la web generada por ia
      fontSize: {
        "ai-hero": ["3rem", { lineHeight: "1.05" }],
        "ai-section": ["2rem", { lineHeight: "1.15" }],
      },

      // Layout (equivalente a contenedor máx. 72rem en PEC2)
      maxWidth: {
        container: "72rem",

        // Ancho máximo específico para la web generada por ia
        aicontent: "72rem",
      },
      
      // Sombras suaves tipo “card” (ajústala si en PEC2 tenías una exacta)
      boxShadow: {
        card: "0 1px 2px rgba(0,0,0,.06), 0 4px 12px rgba(0,0,0,.04)",

        // Sombra específica para la web generada por ia
        aicard: "0 10px 30px rgba(0,0,0,.06)",
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
