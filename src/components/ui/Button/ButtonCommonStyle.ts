import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      outline: {
        primary:
          'flex items-center justify-center rounded-xl border text-base font-normal border border-base-200 text-base-500 hover:opacity-80 h-12 px-4 py-3',
        secondary:
          'flex items-center justify-center rounded-xl border text-base font-normal border border-blue-500 text-base-200 hover:opacity-80 h-12 px-4 py-3',
        tertiary:
          'flex items-center justify-center rounded-xl border text-base font-normal border border-base-500 text-base-100 hover:opacity-80 h-12 px-4 py-3'
      },
      filled: {
        primary:
          'flex items-center justify-center rounded-xl bg-base-600  text-base font-normal text-base-100 hover:opacity-80 h-12 px-4 py-3',
        secondary:
          'flex items-center justify-center rounded-xl bg-blue-500 text-base font-normal text-base-100 hover:opacity-80 h-12 px-4 py-3',
        tertiary:
          'flex items-center justify-center rounded-xl bg-base-500 text-base font-normal text-base-100 hover:opacity-80 h-12 px-4 py-3'
      }
    }
  }
);