/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      keyframes: {
        // Efek glow halus berdenyut (breathing light)
        "glow-pulse": {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.05)" },
        },
        // Efek sedikit meluas lembut (shimmer)
        "glow-shimmer": {
          "0%": { boxShadow: "0 0 30px rgba(0,224,255,0.2)" },
          "50%": { boxShadow: "0 0 80px rgba(0,224,255,0.5)" },
          "100%": { boxShadow: "0 0 30px rgba(0,224,255,0.2)" },
        },
      },
      animation: {
        // Efek glow lembut yang sudah kamu pakai
        "pulse-slow": "pulse 5s ease-in-out infinite",
        // Tambahan efek glow pelan menyala–padam
        "glow-pulse": "glow-pulse 6s ease-in-out infinite",
        // Tambahan efek shimmer lembut
        "glow-shimmer": "glow-shimmer 8s ease-in-out infinite",
      },
      colors: {
        darkBlue: "#0A0F1C",
        deepTeal: "#0F2027",
        accentCyan: "#00E0FF",
      },
      boxShadow: {
        glow: "0 0 40px rgba(0,224,255,0.4)",
      },
    },
  },
  plugins: [],
};