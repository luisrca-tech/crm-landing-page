'use client';

import Link from 'next/link';
import { DesktopSectionView } from './DesktopSectionView';
import { MobileSectionView } from './MobileSectionView';

export function LovedByEnterprising() {
  return (
    <div className="flex w-full flex-col pb-20" id="depoimentos">
      <div className="flex flex-col gap-4 pt-10 lg:pt-32">
        <h2 className="text-center font-opensans text-[32px] italic leading-[38px] tracking-[-0.5px] text-base-100 md:text-[52px] md:leading-[58px] md:tracking-[-1.2px] lg:text-start lg:text-[52px] lg:leading-[58px] lg:tracking-[-1.2px]">
          <span className="text-base-300">Amados por</span> Empreendedores.
        </h2>
        <p className="text-lg font-normal tracking-[-0.2px] text-base-200 md:text-center md:text-[22px] md:leading-8 md:tracking-[-0.3px] lg:max-w-[31.875rem] lg:text-start lg:text-[22px] lg:leading-8 lg:tracking-[-0.3px]">
          Attio é um sistema de gerenciamento de relacionamento para todos que
          valorizam colaboração.
        </p>
        <Link href="#">
          <button className="mt-4 flex h-12 w-[13.625rem] items-center justify-center rounded-xl border border-base-500 px-3 py-4 text-base font-normal tracking-[-0.2px] text-base-200 hover:opacity-80">
            Mais histórias de clientes
          </button>
        </Link>
      </div>
      <MobileSectionView />
      <DesktopSectionView />
    </div>
  );
}
