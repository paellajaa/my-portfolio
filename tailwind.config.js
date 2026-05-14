/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Core palette
        'charcoal': '#1A1A1A',
        'charcoal-light': '#2A2A2A',
        'charcoal-lighter': '#3A3A3A',
        // Win95 system colors
        'win-teal': '#008080',
        'win-teal-light': '#00b3b3',
        'win-silver': '#C0C0C0',
        'win-silver-dark': '#808080',
        'win-blue': '#000080',
        'win-white': '#dfdfdf',
        // Accent neons (retro-modern)
        'neo-yellow': '#ffe600',
        'neo-pink': '#ff00ea',
        'neo-cyan': '#00f0ff',
        'neo-green': '#00ff00',
      },
      fontFamily: {
        'mono': ['"JetBrains Mono"', '"Space Mono"', 'monospace'],
        'sans': ['"Inter"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'neo-brutalist': '4px 4px 0px 0px rgba(0,128,128,0.6)',
        'neo-brutalist-lg': '8px 8px 0px 0px rgba(0,128,128,0.4)',
        'neo-brutalist-sm': '2px 2px 0px 0px rgba(0,128,128,0.6)',
        'aero': '0 8px 32px rgba(0,128,128,0.15), inset 0 0 0 1px rgba(255,255,255,0.08)',
        'aero-lg': '0 16px 48px rgba(0,128,128,0.2), inset 0 0 0 1px rgba(255,255,255,0.1)',
        'glow-teal': '0 0 20px rgba(0,128,128,0.3), 0 0 60px rgba(0,128,128,0.1)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-fast': 'float 4s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 10px rgba(0,128,128,0.2)' },
          '50%': { boxShadow: '0 0 30px rgba(0,128,128,0.5), 0 0 60px rgba(0,128,128,0.2)' },
        },
      },
      backdropBlur: {
        'aero': '16px',
      }
    },
  },
  plugins: [],
}