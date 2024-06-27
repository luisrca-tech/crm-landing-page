import { type ReactNode } from 'react';

interface BoxSectionProps {
  title?: string;
  description?: string;
  children: ReactNode;
  hasImagePadding?: boolean
}

export function BoxSection({
  title,
  description,
  children,
  hasImagePadding
}: BoxSectionProps) {
  return (
    <div className="flex h-full w-full flex-col">
      <div
        className={`flex  h-full w-full flex-col items-center justify-center rounded-[1.25rem] border-base-200 bg-base-dark-100 p-1`}
      >
        <div
          className={`flex h-full w-full flex-col gap-3 rounded-[1.25rem] border border-base-dark-200 bg-base-100 ${hasImagePadding && "pl-6"}`}
        >
          <div className="flex flex-col">
            <div className={`flex flex-col ${title && description && 'p-6'}`}>
              {title && description && (
                <>
                  <h2 className="text-base font-semibold tracking-[-0.2px]">
                    {title}
                  </h2>
                  <span className="font-normal leading-7 tracking-tight text-base-500">
                    {description}
                  </span>
                </>
              )}
            </div>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
