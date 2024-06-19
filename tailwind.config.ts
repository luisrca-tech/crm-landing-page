import { type Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

export default {
  content: ['./src/**/*.tsx'],
  theme: {
      colors: {
        'base': {
          100: '#FFF',
          200: '#EDEFF0',
          300: '#9098A0',
          400: '#555E67',
          500: '#31373D',
          600: '#1D1E20',
        },
        'base-dark': {
          100: '#F4F5F6',
          200: '#D3D5D9',
          300: '#B2B6BD',
          400: '#9CA1AA',
          500: '#4B4F58',
          600: '#232529',
        },
        'blue': {
          100: '#F5F8FE',
          200: '#D9E5FC',
          300: '#B3CCFA',
          400: '#79A5F6',
          500: '#538BF3',
          600: '#266DF0',
        },
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', ...fontFamily.sans]
    }
  },
  plugins: []
} satisfies Config;
