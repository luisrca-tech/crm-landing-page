import { type FC } from 'react';

interface CarouselIndicatorProps {
  activeIndex: number;
  totalItems: number;
}

export const CarouselIndicator: FC<CarouselIndicatorProps> = ({
  activeIndex,
  totalItems
}) => {
  return (
    <div className="mt-7 flex items-center justify-center gap-2 px-6">
      {Array.from({ length: totalItems }, (_, index) => (
        <div
          key={index}
          className={`h-2 w-2 rounded-full ${
            activeIndex === index ? 'bg-blue-600' : 'bg-base-500'
          }`}
        ></div>
      ))}
    </div>
  );
};
