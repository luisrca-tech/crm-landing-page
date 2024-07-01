'use client';

import Image from 'next/image';
import { useState } from 'react';

import Twitter from '../../../public/images/Twitter.png';
import { LovedByItems } from '~/constants/loved-by-items';
import { FooterSectionBox } from '../ui/FooterSectionBox';
import Link from 'next/link';

export function LovedBy() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section>
      <div className="flex w-full flex-col">
        <div className="flex flex-col gap-4">
          <h2 className="text-center font-opensans text-[32px] italic leading-[38px] tracking-[-0.5px] text-base-100">
            <span className="text-base-300">Amados por</span> Empreendedores.
          </h2>
          <p className="text-lg font-normal tracking-[-0.2px] text-base-200">
            Attio é um sistema de gerenciamento de relacionamento para todos que
            valorizam colaboração.
          </p>
          <Link href="#">
            <button className="mt-4 flex h-12 w-[13.625rem] items-center justify-center rounded-xl border border-base-500 px-3 py-4 text-base font-normal tracking-[-0.2px] text-base-200 hover:opacity-80">
              Mais histórias de clientes
            </button>
          </Link>
        </div>
        <div
          className={`relative mt-[60px] flex flex-col gap-6 ${isExpanded ? 'max-h-none' : 'max-h-[30rem]'} overflow-hidden`}
        >
          {LovedByItems.map((item) => {
            return (
              <FooterSectionBox key={item.id} hasDifferentPadding>
                <div className="flex flex-col gap-6">
                  <div className="flex justify-between">
                    <div className="flex gap-2">
                      <Image
                        width={34}
                        height={34}
                        src={item.Avatar}
                        alt="Imagem do avatar do twitter"
                      />
                      <div className="flex flex-col">
                        <h3 className="text-xs font-medium text-base-300">
                          {item.name}
                        </h3>
                        <span className="text-xs font-normal text-base-400">
                          {item.user}
                        </span>
                      </div>
                    </div>
                    <Image
                      width={24}
                      height={24}
                      src={Twitter}
                      alt="Logo do twitter"
                    />
                  </div>
                  <p className="text-base font-normal tracking-[-0.2px] text-base-200">
                    {item.description}
                  </p>
                  <span className="text-xs font-medium text-base-400">
                    {item.publishedAt}
                  </span>
                </div>
              </FooterSectionBox>
            );
          })}
          <div className="absolute bottom-0 left-0 flex h-40 w-full items-center justify-center bg-gradient-to-r from-[#222529]/50 to-[#222529]">
            <button
              className="flex h-11 items-center justify-center rounded-xl border border-base-500 bg-base-dark-600 px-9 py-[10px] text-base font-normal tracking-[-0.2px] text-base-200 backdrop-blur-sm"
              onClick={toggleExpand}
            >
              {isExpanded ? 'Carregar menos' : 'Carregar mais'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
