import { forwardRef, type ComponentProps } from "react";
import { cn } from "~/lib/utils";

type Props = ComponentProps<"input">;

const Input = forwardRef<HTMLInputElement, Props>(
  ({ className, ...rest }, ref) => {
    return (
      <input
        {...rest}
        ref={ref}
        className={cn("w-full rounded-md border border-base-600 bg-base-100 px-4 py-1 text-md text-base-600", className)}
      />
    );
  },
);

Input.displayName = "Input";

export default Input;
