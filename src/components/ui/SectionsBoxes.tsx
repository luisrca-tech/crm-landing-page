import { type ReactNode } from 'react';
import { cn } from '~/lib/utils';

interface SectionsBoxesProps {
  children: ReactNode;
  rootClassName?: string;
  internalClassName?: string;
}

export function SectionsBoxes({
  children,
  rootClassName,
  internalClassName
}: SectionsBoxesProps) {
  return (
    <div
      className={cn(
        'w-full rounded-[20px] border border-base-200 bg-base-dark-100 p-[3px]',
        rootClassName
      )}
    >
      <div
        className={cn(
          'h-full w-full overflow-hidden rounded-[20px] border border-base-200 bg-base-100',
          internalClassName
        )}
      >
        {children}
      </div>
    </div>
  );
}
