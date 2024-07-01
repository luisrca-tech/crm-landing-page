import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  hasBgBlack?: boolean;
}

export function Container({ children, hasBgBlack }: ContainerProps) {
  return (
    <div
      className={`m-auto ${hasBgBlack ? 'bg-base-600' : 'bg-base-100'} max-w-screen-2xl px-6 lg:px-8 3xl:px-0`}
    >
      {children}
    </div>
  );
}
