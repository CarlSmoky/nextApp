import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      prime: {
        100: '#FAF5F2'
      },
      white: {
        100: '#FFFFFF'
      },
      black: {
        100: '#000000'
      },
      grey: {
        100: '#484349',
        200: '#495159',
      },
      red: {
        100: '#DF2935'
      }
    },
    fontFamily: {
      orbitron: ['var(--font-orbitron)', 'san-serif'],
    },
    gridTemplateColumns: {
      "gallery": 'repeat(auto-fit, minmax(300px, 1fr))',
    }
  },
  plugins: [],
}
export default config
