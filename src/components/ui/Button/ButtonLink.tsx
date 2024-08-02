import { Link } from 'lucide-react';
import React from 'react';
import { cn } from '~/lib/utils';
import { ButtonCommonProps } from '~/types/Button.type';
import { buttonVariants } from './ButtonCommonStyle';

type ButtonLinkProps = React.ComponentProps<typeof Link> & ButtonCommonProps;

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

export { ButtonLink };
