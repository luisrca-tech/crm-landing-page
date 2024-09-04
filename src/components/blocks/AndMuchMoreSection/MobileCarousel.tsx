'use client';

import Image from 'next/image';

import { BlackSectionsBoxes } from '~/components/ui/BlackSectionsBoxes';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  useActiveIndex,
  type CarouselApi
} from '~/components/ui/carousel';

import { useState } from 'react';
import { MuchMoreItems } from '~/constants/MuchMoreItems';
import { CarouselIndicator } from './CarouselIndicator';

export function MobileCarousel() {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const activeIndex = useActiveIndex(api);

  return (
    <Carousel setApi={setApi} className="lg:hidden">
      <CarouselContent className="mt-16 flex h-full w-full gap-4">
        {MuchMoreItems.map((item) => {
          return (
            <CarouselItem key={item.id}>
              <BlackSectionsBoxes>
                <Image src={item.image} alt={item.alt} />
                <div className="flex flex-col gap-[6px] md:max-w-[400px]">
                  <h3 className="text-xl font-medium leading-8 tracking-[-0.3px] text-base-200 md:text-[22px]">
                    {item.title}
                  </h3>
                  <p className="text-base font-normal tracking-[-0.2px] text-base-300 md:text-[22px]">
                    {item.description}
                  </p>
                </div>
              </BlackSectionsBoxes>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <div className="mt-7 flex items-center justify-center gap-2 px-6">
        <CarouselIndicator
          activeIndex={activeIndex}
          totalItems={MuchMoreItems.length}
        />
      </div>
    </Carousel>
  );
}
