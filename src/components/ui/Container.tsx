import { type ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
}

export function Container({ children }: ContainerProps) {
  return (
    <div className="m-auto max-w-screen-2xl px-6 lg:px-8 3xl:px-0">
      {children}
    </div>
  );
}
