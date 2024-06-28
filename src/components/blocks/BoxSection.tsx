import { type ReactNode } from 'react';
interface BoxSectionProps {
  title?: string;
  description?: string;
  children: ReactNode;
}
export function BoxSection({ title, description, children }: BoxSectionProps) {
  return (
    <div className="h-full w-full rounded-[20px] border border-base-200 bg-base-dark-100 p-1">
      <div className="flex h-full w-full flex-col overflow-hidden rounded-[20px] border border-base-200 bg-base-100">
        {title && description && (
          <div
            className={`flex flex-col gap-1 ${title && description && 'p-6'} mb-6`}
          >
            <h3 className="text-base font-semibold tracking-[-0.2px]">
              {title}
            </h3>
            <h3 className="text-base font-normal tracking-[-0.2px] text-base-500">
              {description}
            </h3>
          </div>
        )}
        {children}
      </div>
    </div>
  );
}
