import { type ReactNode } from 'react';
import { cn } from '~/lib/utils';

interface BoxSectionProps {
  children: ReactNode;
  className?: string;
}

export function BoxSection({ children, className }: BoxSectionProps) {
  return (
    <div
      className={cn(
        'w-full rounded-[20px] border border-base-200 bg-base-dark-100 p-[3px]',
        className
      )}
    >
      <div className="h-full w-full overflow-hidden rounded-[20px] border border-base-200 bg-base-100">
        {children}
      </div>
    </div>
  );
}
