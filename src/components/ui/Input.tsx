import { forwardRef, type ComponentProps } from 'react';
import { cn } from '~/lib/utils';

type Props = ComponentProps<'input'>;

const Input = forwardRef<HTMLInputElement, Props>(({ className, ...rest }, ref) => {
  return (
    <input {...rest} ref={ref} className={cn('p-2 rounded-full w-full', className)} />
  );
});

Input.displayName = 'Input';

export default Input;