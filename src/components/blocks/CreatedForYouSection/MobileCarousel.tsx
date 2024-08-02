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
import { SectionsBoxes } from '../../ui/SectionsBoxes';

export function MobileCarousel() {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const activeIndex = useActiveIndex(api);

  return (
    <Carousel className='lg:hidden md:hidden' setApi={setApi}>
      <CarouselContent className="justify-between">
        {CarouselItems.map((item) => {
          return (
            <CarouselItem key={item.id} className="pr-6">
              <SectionsBoxes className="h-[23rem]">
                <div className="flex flex-col gap-3 p-6">
                  <div className="flex items-center gap-3">
                    <Image
                      className="h-[1.125rem] w-[1.125rem]"
                      src={item.icon}
                      alt={item.altIcon}
                    />
                    <h2 className="text-lg font-semibold leading-[1.625rem] tracking-tight text-base-600">
                      {item.title}
                    </h2>
                  </div>
                  <span className="text-lg font-semibold leading-6 tracking-tight text-base-600">
                    {item.description}
                  </span>
                </div>
                <div className="mb-auto ml-6 w-full rounded-lg border-[0.0225rem] border-base-dark-100 bg-blue-100">
                  <div className="rounded-lg bg-[#F9F9FB]">
                    <Image
                      className="w-full object-cover"
                      src={item.image}
                      alt={item.alt}
                    />
                  </div>
                </div>
              </SectionsBoxes>
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
