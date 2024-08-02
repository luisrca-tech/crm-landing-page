import { cva, type VariantProps } from 'class-variance-authority';
import Link from 'next/link';
import * as React from 'react';

import { cn } from '~/lib/utils';

const buttonVariants = cva(
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

type CommonProps = VariantProps<typeof buttonVariants>;

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & CommonProps;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, filled, outline, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ filled, outline, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

type ButtonLinkProps = React.ComponentProps<typeof Link> & CommonProps;

const ButtonLink = React.forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  ({ className, filled, outline, ...props }, ref) => {
    return (
      <Link
        className={cn(buttonVariants({ filled, outline, className }))}
        {...props}
      ></Link>
    );
  }
);

ButtonLink.displayName = 'ButtonLink';

export { Button, ButtonLink, buttonVariants };
