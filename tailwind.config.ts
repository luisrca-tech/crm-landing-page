import { type Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

export default {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
    maxWidth: {
      'screen-2xl': '87.5rem',
    },
    }
  },
  plugins: []
} satisfies Config;
