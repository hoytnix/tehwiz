/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./config/**/*.{js,ts,jsx,tsx}",
    "./data/**/*.{js,ts,jsx,tsx}",
    "./hooks/**/*.{js,ts,jsx,tsx}",
    "./*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'void': '#030712',
        'obsidian': '#080d1a',
        'surface': '#0f172a',
        'glass-base': '#030712',
        'glass-panel': 'rgba(15, 23, 42, 0.65)',
        'glass-border': 'rgba(255, 255, 255, 0.08)',
        'glass-accent': '#6366f1',
        'glass-highlight': '#a5b4fc',
        'leet-black': '#090d16',
        'leet-green': '#38bdf8',
        'leet-cyan': '#38bdf8',
        'leet-purple': '#c084fc',
        'leet-gray': '#1e293b',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', '"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.01))',
        'deep-space': 'radial-gradient(ellipse at 50% 0%, #1e1b4b 0%, #030712 100%)',
        'mesh-glow': 'radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.15) 0%, transparent 60%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2.5s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' }
        }
      }
    }
  },
  plugins: [],
};
