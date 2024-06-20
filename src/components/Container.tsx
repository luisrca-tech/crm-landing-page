import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode
}


export function Container({ children }: ContainerProps) {
  return (
    <div className="px-6 max-w-screen-2xl m-auto lg:px-8 3xl:px-0">{children}</div>
  )
}