import { type Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.tsx'],
  theme: {
      extend: {
        screens: {
          '2xl': '87.5rem',
          '3xl': '100rem'
        },
      },
      colors: {
        base: {
          100: 'rgb(var(--base-100) / <alpha-value>)',
          200: 'rgb(var(--base-200) / <alpha-value>)',
          300: 'rgb(var(--base-300) / <alpha-value>)',
          400: 'rgb(var(--base-400) / <alpha-value>)',
          500: 'rgb(var(--base-500) / <alpha-value>)',
          600: 'rgb(var(--base-600) / <alpha-value>)',
        },
        'base-dark': {
          100: 'rgb(var(--base-dark-100) / <alpha-value>)',
          200: 'rgb(var(--base-dark-200) / <alpha-value>)',
          300: 'rgb(var(--base-dark-300) / <alpha-value>)',
          400: 'rgb(var(--base-dark-400) / <alpha-value>)',
          500: 'rgb(var(--base-dark-500) / <alpha-value>)',
          600: 'rgb(var(--base-dark-600) / <alpha-value>)',
        },
        blue: {
          100: 'rgb(var(--blue-100) / <alpha-value>)',
          200: 'rgb(var(--blue-200) / <alpha-value>)',
          300: 'rgb(var(--blue-300) / <alpha-value>)',
          400: 'rgb(var(--blue-400) / <alpha-value>)',
          500: 'rgb(var(--blue-500) / <alpha-value>)',
          600: 'rgb(var(--blue-600) / <alpha-value>)',
        },
      },
        fontFamily: {
        inter: ['var(--font-inter)'],
        opensans: ['var(--font-open_sans)']
      },
        keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
       animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
       },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;