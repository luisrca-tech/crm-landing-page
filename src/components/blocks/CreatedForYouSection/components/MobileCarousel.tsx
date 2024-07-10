'use client';

import Image from 'next/image';
import { useState } from 'react';
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  useActiveIndex
} from '~/components/ui/carousel';
import { CarouselItems } from '~/constants/CarouselItems';

export function MobileCarousel() {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const activeIndex = useActiveIndex(api);

  return (
    <Carousel setApi={setApi} >
      <CarouselContent className="w-[17.6875rem] gap-4">
        {CarouselItems.map((item) => {
          return (
            <CarouselItem key={item.id}>
              <div className="relative flex h-[22.2rem] w-[18.2rem] flex-col items-center justify-center rounded-[1.25rem] border-base-200 bg-base-dark-100">
                <div className="flex h-[21.8rem] w-[17.6875rem] flex-col gap-3 rounded-[1.25rem] border border-base-dark-200 bg-base-100 p-6">
                  <div className="flex items-center gap-[0.375rem]">
                    <Image
                      className="h-[1.125rem] w-[1.125rem]"
                      src={item.icon}
                      alt={item.altIcon}
                    />
                    <h2 className="text-lg font-semibold leading-[1.625rem] tracking-tight text-base-600">
                      {item.title}
                    </h2>
                  </div>
                  <span className="text-base font-semibold leading-6 tracking-tight text-[#1D1F20]">
                    {item.description}
                  </span>
                </div>
                <div className="absolute bottom-1 right-1 w-[16rem] overflow-hidden rounded-lg border-[0.0225rem] border-base-dark-100 bg-blue-100">
                  <div className="h-[11rem] w-full overflow-hidden rounded-lg bg-[#F9F9FB]">
                    <Image className="w-full" src={item.image} alt={item.alt} />
                  </div>
                </div>
              </div>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <div className="flex h-[3.25rem] items-center justify-center gap-2 px-6 md:hidden">
        {CarouselItems.map((_, index) => (
          <div
            key={index}
            className={`h-1 w-[1.375rem] rounded-sm ${activeIndex === index ? 'bg-base-300' : 'bg-base-200'}`}
          ></div>
        ))}
      </div>
    </Carousel>
  );
}
