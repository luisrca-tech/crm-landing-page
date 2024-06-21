'use client';
import { useEffect } from 'react';

type ModalProps = {
  onClickCallback?: () => void;
};

export default function ModalBlur({ onClickCallback }: ModalProps) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div
      className="fixed bottom-0 top-0 z-[999] flex h-full min-h-full w-full min-w-full items-center justify-center bg-base-dark-600/85 p-6"
      onClick={onClickCallback}
    ></div>
  );
}
