import Link from 'next/link';
import React from 'react';
import { cn } from '~/lib/utils';
import { type ButtonCommonProps } from '~/types/Button.type';
import { buttonVariants } from './ButtonCommonStyle';

type ButtonLinkProps = React.ComponentProps<typeof Link> & ButtonCommonProps;

const ButtonLink = React.forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  ({ className, filled, outline, ...props }, ref) => {
    return (
      <Link
        ref={ref}
        className={cn(buttonVariants({ filled, outline, className }))}
        {...props}
      ></Link>
    );
  }
);

ButtonLink.displayName = 'ButtonLink';

export { ButtonLink };
