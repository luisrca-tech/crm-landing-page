'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { CarouselItems } from '~/constants/CarouselItems';

export function FeaturesBox() {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  useEffect(() => {
    if (!selectedItem && CarouselItems.length > 0) {
      setSelectedItem(CarouselItems[0]?.id ?? null);
    }
  }, [selectedItem]);

  const selectedItemData = CarouselItems.find(
    (item) => item.id === selectedItem
  );

  return (
    <div className="hidden w-full rounded-[20px] bg-base-dark-100 p-1 md:block lg:block">
      <div className="flex w-full flex-col gap-16 rounded-[20px] border border-base-200 bg-base-100 px-10 pb-0 pt-6">
        <div className="flex gap-6">
          {CarouselItems.map((item) => (
            <div
              key={item.id}
              className="flex w-full cursor-pointer"
              onClick={() => setSelectedItem(item.id)}
            >
              <div className="flex max-w-[15.375rem] flex-col items-start gap-3">
                <div className="flex gap-[6px]">
                  <Image
                    className="mt-1 h-[1.125rem] w-[1.125rem]"
                    src={item.icon}
                    alt={item.altIcon}
                  />
                  <h2
                    className={`text-lg leading-[1.625rem] tracking-tight ${selectedItem === item.id ? 'font-semibold text-[#1D1F20]' : 'font-medium text-base-300'}`}
                  >
                    {item.title}
                  </h2>
                </div>
                <span
                  className={`text-base leading-6 tracking-tight ${selectedItem === item.id ? 'font-semibold text-[#1D1F20]' : 'font-medium text-base-300'}`}
                >
                  {item.description}
                </span>
              </div>
            </div>
          ))}
        </div>
        {selectedItemData?.imageDesktop && (
          <div className="flex max-h-[25rem] flex-col rounded-[20px] border border-base-200 bg-base-dark-100">
            <Image
              className="max-h-[25rem] w-full rounded-[20px] object-cover"
              src={selectedItemData.imageDesktop}
              alt={selectedItemData.alt}
            />
          </div>
        )}
      </div>
    </div>
  );
}
