import { type ReactNode } from 'react';
interface BlackSectionsBoxesProps {
  children: ReactNode;
  hasDifferentPadding?: boolean;
}
export function BlackSectionsBoxesBox({
  children,
  hasDifferentPadding
}: BlackSectionsBoxesProps) {
  return (
    <div className="w-full rounded-3xl border border-base-500 bg-base-dark-600 p-1">
      <div
        className={`flex h-full w-full flex-col gap-4 rounded-3xl border border-base-dark-500 bg-base-dark-600 ${hasDifferentPadding ? 'p-6' : 'p-10 px-7'}`}
      >
        {children}
      </div>
    </div>
  );
}
