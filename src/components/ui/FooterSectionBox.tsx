import { type ReactNode } from 'react';

interface FooterSectionBoxProps {
  children: ReactNode;
}

export function FooterSectionBox({ children }: FooterSectionBoxProps) {
  return (
    <div className="w-full rounded-3xl border border-base-500 bg-base-dark-600 p-1">
      <div className="flex h-full w-full flex-col gap-4 rounded-3xl border border-base-dark-500 bg-base-dark-600 p-10 px-7">
        {children}
      </div>
    </div>
  );
}
