'use client';

import Image from 'next/image';

import { FooterSectionBox } from '../ui/FooterSectionBox';
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  useActiveIndex
} from '../ui/carousel';
import { useState } from 'react';
import { MuchMoreItems } from '~/constants/much-more-items';

export function MuchMore() {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const activeIndex = useActiveIndex(api);

  return (
    <section>
      <div className="flex h-full w-full flex-col py-[60px]">
        <div className="flex flex-col gap-4">
          <h2 className="font-opensans text-[32px] italic leading-[38px] tracking-[-0.5px] text-base-100">
            <span className="text-base-300">E</span> muito mais...
          </h2>
          <p className="text-lg font-normal tracking-[-0.2px] text-base-200">
            Seus clientes estão sempre conectados. Por que você seu CRM deveria
            ser diferente?
          </p>
        </div>
        <Carousel setApi={setApi}>
          <CarouselContent className="mt-16 flex h-full w-full gap-4">
            {MuchMoreItems.map((item) => {
              return (
                <CarouselItem key={item.id}>
                  <FooterSectionBox>
                    <Image src={item.image} alt={item.alt} />
                    <div className="flex flex-col gap-[6px]">
                      <h3 className="text-xl font-medium leading-8 tracking-[-0.3px] text-base-200">
                        {item.title}
                      </h3>
                      <p className="text-base font-normal tracking-[-0.2px] text-base-300">
                        {item.description}
                      </p>
                    </div>
                  </FooterSectionBox>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <div className="flex items-center justify-center gap-2 px-6">
            <div
              className={`h-2 w-2 rounded-full ${activeIndex === 0 ? 'bg-blue-600' : 'bg-base-500'}`}
            ></div>
            <div
              className={`h-2 w-2 rounded-full ${activeIndex === 1 ? 'bg-blue-600' : 'bg-base-500'}`}
            ></div>
            <div
              className={`h-2 w-2 rounded-full ${activeIndex === 2 ? 'bg-blue-600' : 'bg-base-500'}`}
            ></div>
            <div
              className={`h-2 w-2 rounded-full ${activeIndex === 3 ? 'bg-blue-600' : 'bg-base-500'}`}
            ></div>
            <div
              className={`h-2 w-2 rounded-full ${activeIndex === 4 ? 'bg-blue-600' : 'bg-base-500'}`}
            ></div>
            <div
              className={`h-2 w-2 rounded-full ${activeIndex === 5 ? 'bg-blue-600' : 'bg-base-500'}`}
            ></div>
          </div>
        </Carousel>
      </div>
    </section>
  );
}
