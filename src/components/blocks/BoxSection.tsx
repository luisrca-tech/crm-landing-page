import { type ReactNode } from 'react';

interface BoxSectionProps {
  height: string;
  title?: string;
  description?: string;
  children: ReactNode;
}

export function BoxSection({
  height,
  title,
  description,
  children
}: BoxSectionProps) {
  return (
    <div className="flex w-full flex-col">
      <div
        className={`flex h-[${height}rem]  w-full flex-col items-center justify-center rounded-[1.25rem] border-base-200 bg-base-dark-100 p-1 relative`}
      >
        <div className="flex h-full w-full flex-col gap-3 rounded-[1.25rem] border border-base-dark-200 bg-base-100">
          <div className="flex flex-col gap-1 p-6">
            <h2 className="text-base font-semibold tracking-[-0.2px]">
              {title}
            </h2>
            <span className="font-normal leading-7 tracking-tight text-base-500">
              {description}
            </span>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}
