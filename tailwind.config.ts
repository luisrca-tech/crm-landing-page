import { type Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.tsx'],
  theme: {
      fontFamily: {
        Inter: ['var(--font-inter)'],
        OpenSans: ['var(--font-open_sans)']
      },
      fontSize: {
        '3xl-desktop': [
          '5.75rem', {
            lineHeight: '6rem',
            letterSpacing: '-3.6px',
          }],
          '2xl-desktop': [
          '3.25rem', {
            lineHeight: '3.625rem',
            letterSpacing: '-1.2px',
          }],
          'xl-desktop': [
          '2.5rem', {
            lineHeight: '2.75rem',
            letterSpacing: '-0.8px',
          }],
          '3xl-mobile': [
          '5.75rem', {
            lineHeight: '3.5rem',
            letterSpacing: '-1.5px',
          }],
          '2xl-mobile': [
          '2rem', {
            lineHeight: '2.375rem',
            letterSpacing: '-0.5px',
          }],
          'xl-mobile': [
          '1.5rem', {
            lineHeight: '1.625rem',
            letterSpacing: '-0.8px',
          }],
          '2xl': [
          '1.375rem', {
            lineHeight: '2rem',
            letterSpacing: '-0.3px',
          }],
          'xl': [
          '1.25rem', {
            lineHeight: '1.75rem',
            letterSpacing: '-0.2px',
          }],
          'lg': [
          '1.125rem', {
            lineHeight: '1.625rem',
            letterSpacing: '-0.2px',
          }],
          'md': [
          '1rem', {
            lineHeight: '1.5rem',
            letterSpacing: '-0.2px',
          }],
          'base': [
          '0.875rem', {
            lineHeight: '1.25rem',
            letterSpacing: '-0.1px',
          }],
          'sm': [
          '0.75rem', {
            lineHeight: '1.125rem',
          }],
          'xsm': [
          '0.625rem', {
            lineHeight: '0.875rem',
            letterSpacing: '0.6px',
          }],
    }
  },
  plugins: []
} satisfies Config;
