import { type ReactNode } from 'react';
import { cn } from '~/lib/utils';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={cn('m-auto max-w-screen-2xl px-6 lg:px-8 3xl:px-0', className)}
    >
      {children}
    </div>
  );
}
