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
        100: '#FFFFFF',
        200: '#C1B6AB'
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
      title: ['var(--font-titleFont)', 'san-serif'],
      paragraph: ['var(--font-paragraphFont)', 'san-serif'],
    },
    gridTemplateColumns: {
      "gallery": 'repeat(auto-fit, minmax(300px, 1fr))',
    },
    variants: {
        extend: {
        },
    },
    extend: {
      lineClamp: {
        10: '10',
      },
    }
  },
  plugins: [],
}
export default config
