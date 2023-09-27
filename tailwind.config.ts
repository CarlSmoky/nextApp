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
      prime: {100: '#FAF5F2'},
      grey: {
        100: '#484349',
        200: '#495159',
        300: '#FFD090',
        400: '#FDB866',
        500: '#F89D3C',
        600: '#F3841B',
      },
    },
    fontFamily: {
      orbitron: ['var(--font-orbitron)', 'san-serif'],
    }
  },
  plugins: [],
}
export default config
