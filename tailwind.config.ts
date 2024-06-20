import { type Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

export default {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
    screens: {
      '2xl': '87.5rem',
      '3xl': '100rem'
    },
    }
  },
  plugins: []
} satisfies Config;
