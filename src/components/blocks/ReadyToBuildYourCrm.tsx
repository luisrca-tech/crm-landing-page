import Image, { StaticImageData } from 'next/image';

import Blocks from '../../../public/images/Blocks.png'

import Link from 'next/link';

export function ReadyToBuildYourCrm() {
  return (
    <section>
      <div className="flex flex-col gap-8">
        <h2 className="pt-[14px] font-opensans text-[32px] font-bold italic leading-[38px] tracking-[-0.5px] text-[#A0BFF8]">
          Pronto para construir o CRM dos seus sonhos?
        </h2>
        <Link
          className="h-12 rounded-xl bg-blue-500 px-4 py-3 text-center text-base font-normal tracking-[-0.2px] text-base-100"
          href="#"
        >
          Comece gratuitamente
        </Link>
        <Image className="mt-8 pb-6" src={Blocks as StaticImageData} alt="Imagem de cubos e blocos com fundo azul" />
      </div>
    </section>
  );
}
