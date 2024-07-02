'use client';

import { useState } from 'react';

import Image from 'next/image';
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  useActiveIndex
} from '../ui/carousel';
import { CarouselItems } from '~/Constant/carousel-items';

import Avatar from '../../../public/images/FristAvatar.png';
import Box from '../../../public/images/Box.png';

export function CreatedForYou() {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const activeIndex = useActiveIndex(api);

  return (
    <div className="flex flex-col gap-4">
      <h1 className="flex font-opensans text-[2rem] font-bold italic leading-[2.375rem] tracking-tighter">
        O CRM criado para ser seu!
      </h1>
      <p className="text-lg font-normal leading-[1.625rem] tracking-tight text-base-500">
        Mova qualquer coisa e garanta que tudo esta de acordo com as
        necessidades do seu negócios, não o contrário!
      </p>

      <Carousel setApi={setApi}>
        <CarouselContent className="flex h-[22.125rem] w-[17.6875rem] gap-4">
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
                      <h2 className="text-lg font-medium leading-[1.625rem] tracking-tight text-base-600">
                        {item.title}
                      </h2>
                    </div>
                    <span className="text-base font-medium leading-6 tracking-tight text-base-600">
                      {item.description}
                    </span>
                  </div>
                  <div className="absolute bottom-1 right-1 w-[16rem] overflow-hidden rounded-lg border-[0.0225rem] border-base-dark-100 bg-blue-100">
                    <div className="h-[11rem] w-full overflow-hidden rounded-lg bg-[#F9F9FB]">
                      <Image
                        className="w-full"
                        src={item.image}
                        alt={item.alt}
                      />
                    </div>
                  </div>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <div className="flex h-[3.25rem] items-center justify-center gap-2 px-6">
          <div
            className={`h-1 w-[1.375rem] rounded-sm ${activeIndex === 0 ? 'bg-base-300' : 'bg-base-200'}`}
          ></div>
          <div
            className={`h-1 w-[1.375rem] rounded-sm ${activeIndex === 1 ? 'bg-base-300' : 'bg-base-200'}`}
          ></div>
          <div
            className={`h-1 w-[1.375rem] rounded-sm ${activeIndex === 2 ? 'bg-base-300' : 'bg-base-200'}`}
          ></div>
          <div
            className={`h-1 w-[1.375rem] rounded-sm ${activeIndex === 3 ? 'bg-base-300' : 'bg-base-200'}`}
          ></div>
        </div>
      </Carousel>
      <div className="flex flex-col items-start justify-start gap-6">
        <Image src={Avatar} alt="Imagem de uma mulher com um fundo preto" />
        <h3 className="text-lg font-normal leading-[1.625rem] tracking-tight text-base-600">
          “Minha equipe ama trabalhar com os relatórios do Attio porque são
          muito dinamicos.”
        </h3>
      </div>
      <div className="flex flex-col gap-[2px]">
        <span className="text-sm font-normal leading-5 tracking-[-0.1px] text-base-500">
          John Doe
        </span>
        <span className="text-sm font-normal leading-5 tracking-[-0.1px] text-base-400">
          Founder
        </span>
      </div>
    </div>
  );
}

export function CreatedForYouAndBoxline() {
  return (
    <section className="xsm:hidden">
      <div className="relative flex h-full w-full gap-3">
        <div className="flex h-full w-[2.125rem] flex-col items-center justify-center">
          <Image
            className="absolute -left-3 top-1"
            src={Box}
            alt="Icone de caixa tridimensional"
          />
          <div className="h-full w-[0.09375rem] rounded-lg bg-gradient-to-b from-[rgba(255,255,255,1)] via-[rgba(217,217,217,0.8)] to-[rgba(255,255,255,1)]"></div>
        </div>
        <CreatedForYou />
      </div>
    </section>
  );
}
