import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

import { CarouselCrm } from './CarouselCrm';

import Grapich from '../../public/images/Graphic.svg';
import Box from '../../public/images/box.svg';

export function Hero() {
  return (
    <div className="mt-8 flex flex-col items-center justify-center gap-4">
      <h1 className="flex flex-col items-center justify-center font-opensans text-5xl font-bold italic leading-[3.5rem] tracking-tighter">
        <span className="ml-6">A mágica do</span> relacionamento
      </h1>
      <p className="text-center text-[1.375rem] font-normal leading-8 tracking-tight text-base-500">
        Poderoso, flexível e movido a dados, Attio traz o melhor CRM para as
        necessidades da sua empresa.
      </p>
      <Link href="#">
        <button className="mt-4 flex h-12 w-[12.625rem] items-center justify-center rounded-xl border bg-base-600 px-3 py-4 text-base font-normal text-base-100">
          Comece gratuitamente
        </button>
      </Link>

      <div className="flex h-[17.375rem] w-full items-center justify-center">
        <Image src={Grapich as StaticImageData} alt="" />
      </div>

      <div className="relative flex gap-2">
        <div className="flex h-full w-[2.125rem] flex-col items-center justify-center">
          <Image
            className="absolute -left-3 top-1"
            src={Box as StaticImageData}
            alt=""
          />
          <div className="h-full w-[0.09375rem] rounded-lg bg-gradient-to-b from-[rgba(255,255,255,1)] via-[rgb(217,217,217,1)] to-[rgba(255,255,255,1)]"></div>
        </div>
        <CarouselCrm />
      </div>
    </div>
  );
}
