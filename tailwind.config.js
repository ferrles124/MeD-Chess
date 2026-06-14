/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ui: {
          bg:     '#0f0f1a',
          panel:  '#16213e',
          border: '#2a2a4a',
          gold:   '#e8c97e',
          text:   '#c0c0d8',
          muted:  '#6a6a8a',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      }
    }
  },
  plugins: [],
}
