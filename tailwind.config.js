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
        ink: '#0A0B10',
        card: '#12141C',
        edge: '#232633',
        bone: '#F4F2EC',
        muted: '#A7AEBD',
        accent: '#8B7CFF',
        live: '#E8B34',
        'void': '#0A0B10',
        'obsidian': '#0A0B10',
        'surface': '#12141C',
      },
      fontFamily: {
        sans: ['"Inter"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        display: ['"Fraunces"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      maxWidth: {
        magazine: '1120px',
      },
      spacing: {
        section: '96px',
      },
    }
  },
  plugins: [],
};
