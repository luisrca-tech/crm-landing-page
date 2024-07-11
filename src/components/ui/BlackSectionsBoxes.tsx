import { type ReactNode } from 'react';
import { cn } from '~/lib/utils';

interface BlackSectionsBoxesProps {
  children: ReactNode;
  rootClassName?: string;
  InternalclassName?: string;
}

export function BlackSectionsBoxes({
  children,
  rootClassName,
  InternalclassName
}: BlackSectionsBoxesProps) {
  return (
    <div
      className={cn(
        'w-full rounded-3xl border border-base-500 bg-base-dark-600 p-1',
        rootClassName
      )}
      style={{ height: 'fit-content' }} // Add this line to set the height of the outer div
    >
      <div
        className={cn(
          `flex h-full w-full flex-col gap-4 rounded-3xl border border-base-dark-500 bg-base-dark-600 p-6`,
          InternalclassName
        )}
      >
        {children}
      </div>
    </div>
  );
}
