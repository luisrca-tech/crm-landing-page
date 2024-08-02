import { type VariantProps } from 'class-variance-authority';
import Link from 'next/link';
import * as React from 'react';

import { cn } from '~/lib/utils';
import { buttonVariants } from './Button/ButtonCommonStyle';

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
