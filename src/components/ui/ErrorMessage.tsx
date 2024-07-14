import { useEffect, useRef } from 'react';
import autoAnimate from '@formkit/auto-animate';

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
        <p className="text-error-100 pt-1 text-xs font-semibold">{children}</p>
      )}
    </div>
  );
}