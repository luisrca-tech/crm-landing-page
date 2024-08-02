import * as React from 'react';

import { cn } from '~/lib/utils';
import { ButtonCommonProps } from '~/types/Button.type';
import { buttonVariants } from './ButtonCommonStyle';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  ButtonCommonProps;

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

export { Button };
