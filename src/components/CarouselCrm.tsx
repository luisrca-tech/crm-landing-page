'use client';

import { useEffect, useState } from 'react';

import Image, { StaticImageData } from 'next/image';
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem
} from './ui/carousel';
import Grid from '../../public/images/grid.svg';

import construct from '../../public/images/fristFrame.svg';
import Refine from '../../public/images/refine.svg';
import Work from '../../public/images/work.svg';
import Shiny from '../../public/images/shiny.svg';
import Chart from '../../public/images/chart.svg';
import Avatar from '../../public/images/avatarcarousel.svg';

export function CarouselCrm() {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  useEffect(() => {
    if (api) {
      const handleSlideChange = () => {
        setActiveIndex(api.selectedScrollSnap());
      };
      api.on('select', handleSlideChange);
      return () => {
        api.off('select', handleSlideChange);
      };
    }
  }, [api]);

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
          <CarouselItem>
            <div className="relative flex h-[22.2rem] w-[18.2rem] flex-col items-center justify-center rounded-[1.25rem] border-base-200 bg-base-dark-100">
              <div className="flex h-[21.8rem] w-[17.6875rem] flex-col gap-3 rounded-[1.25rem] border border-base-dark-200 bg-base-100 p-6">
                <div className="flex gap-[0.375rem]">
                  <Image src={Grid as StaticImageData} alt="" />
                  <h2 className="text-lg font-medium leading-[1.625rem] tracking-tight text-base-600">
                    Construa
                  </h2>
                </div>
                <span className="text-base font-medium leading-6 tracking-tight text-base-600">
                  Crie o CRM dos seus sonhos com poderosos e flexiveis templates
                  para cada caso.
                </span>
              </div>
              <div className="absolute bottom-1 right-1 w-[16rem] overflow-hidden rounded-lg border-[0.0225rem] border-base-dark-100 bg-blue-100">
                <div className="h-[11rem] w-full overflow-hidden rounded-lg bg-[#F9F9FB]">
                  <Image
                    className="w-full"
                    src={construct as StaticImageData}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="relative flex h-[22.2rem] w-[18.2rem] flex-col items-center justify-center rounded-[1.25rem] border-base-200 bg-base-dark-100">
              <div className="flex h-[21.8rem] w-[17.6875rem] flex-col gap-3 rounded-[1.25rem] border border-base-dark-200 bg-base-100 p-6">
                <div className="flex gap-[0.375rem]">
                  <Image src={Grid as StaticImageData} alt="" />
                  <h2 className="text-lg font-medium leading-[1.625rem] tracking-tight text-base-600">
                    Refina
                  </h2>
                </div>
                <span className="text-base font-normal leading-6 tracking-tight text-base-600">
                  Use a interface intuitiva do Attio e blocos
                  ultrapersonalizáveis ​​para criar seus fluxos de trabalho
                  ideais.
                </span>
              </div>
              <div className="absolute bottom-1 right-1 w-[16rem] overflow-hidden rounded-lg border-[0.0225rem] border-base-dark-100 bg-blue-100">
                <div className="h-[11rem] w-full overflow-hidden rounded-lg bg-[#F9F9FB]">
                  <Image
                    className="w-full"
                    src={Refine as StaticImageData}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="relative flex h-[22.2rem] w-[18.2rem] flex-col items-center justify-center rounded-[1.25rem] border-base-200 bg-base-dark-100">
              <div className="flex h-[21.8rem] w-[17.6875rem] flex-col gap-3 rounded-[1.25rem] border border-base-dark-200 bg-base-100 p-6">
                <div className="flex gap-[0.375rem]">
                  <Image src={Shiny as StaticImageData} alt="" />
                  <h2 className="text-lg font-medium leading-[1.625rem] tracking-tight text-base-600">
                    Trabalhe
                  </h2>
                </div>
                <span className="text-base font-medium leading-6 tracking-tight text-base-600">
                  Colabore com sua equipe em tempo real para criar o CRM
                  perfeito para o seu negócio.
                </span>
              </div>
              <div className="absolute bottom-1 right-1 w-[16rem] overflow-hidden rounded-lg border-[0.0225rem] border-base-dark-100 bg-blue-100">
                <div className="h-[11rem] w-full overflow-hidden rounded-lg bg-[#F9F9FB]">
                  <Image
                    className="w-full"
                    src={Work as StaticImageData}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="relative flex h-[22.2rem] w-[18.2rem] flex-col items-center justify-center rounded-[1.25rem] border-base-200 bg-base-dark-100">
              <div className="flex h-[21.8rem] w-[17.6875rem] flex-col gap-3 rounded-[1.25rem] border border-base-dark-200 bg-base-100 p-6">
                <div className="flex gap-[0.375rem]">
                  <Image src={Chart as StaticImageData} alt="" />
                  <h2 className="text-lg font-medium leading-[1.625rem] tracking-tight text-base-600">
                    Relatório
                  </h2>
                </div>
                <span className="text-base font-medium leading-6 tracking-tight text-base-600">
                  Comece com um CRM tão flexível quanto você. Nenhum código é
                  necessário
                </span>
              </div>
              <div className="absolute bottom-1 right-1 w-[16rem] overflow-hidden rounded-lg border-[0.0225rem] border-base-dark-100 bg-blue-100">
                <div className="h-[11rem] w-full overflow-hidden rounded-lg bg-[#F9F9FB]">
                  <Image
                    className="w-full"
                    src={Work as StaticImageData}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </CarouselItem>
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
        <Image src={Avatar as StaticImageData} alt="" />
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
