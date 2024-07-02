import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

import HeroImage from '../../../public/images/Hero.png';

export function Hero() {
  return (
    <section>
      <div className="mt-8 flex flex-col items-center justify-center gap-4 lg:gap-8">
        <h1 className="flex flex-col items-center justify-center font-opensans text-5xl font-bold italic leading-[3.5rem] tracking-tighter lg:text-[5.75rem] lg:leading-[5.5rem] lg:tracking-[-3.6px]">
          <span className="pl-6">A mágica do</span> relacionamento
        </h1>
        <p className="max-w-[34.25rem] text-center text-[1.375rem] font-normal leading-8 tracking-[-0.3px] text-base-500">
          <span className="lg:pl-6">Poderoso</span>, flexível e movido a dados,
          Attio traz o melhor CRM para as necessidades da sua empresa.
        </p>
        <Link
          href="#"
          className="flex h-12 w-[12.625rem] items-center justify-center rounded-xl border bg-base-600 px-4 py-3 text-base font-normal text-base-100 hover:opacity-80 mt-4 lg:mt-0"
        >
          Comece gratuitamente
        </Link>

        <Image
          priority
          src={HeroImage as StaticImageData}
          alt="Imagem de um gráfico de tarefas"
        />
      </div>
    </section>
  );
}
