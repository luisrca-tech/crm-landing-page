import autoAnimate from '@formkit/auto-animate';
import { useEffect, useRef } from 'react';

type Props = {
  children?: React.ReactNode;
};

export default function ErrorMessage({ children }: Props) {
  const parent = useRef(null);

  useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, [parent]);

  return (
    <div ref={parent}>
      {children && (
        <p className="pt-1 text-xs font-semibold text-error-100">{children}</p>
      )}
    </div>
  );
}
