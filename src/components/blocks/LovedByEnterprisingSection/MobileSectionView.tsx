'use client';
import Image from 'next/image';

import Twitter from '/public/images/Twitter.png';

import { useState } from 'react';

import { LovedByEnterprisingItems } from '~/constants/LovedByEnterprisingItems';
import { BlackSectionsBoxes } from '~/components/ui/BlackSectionsBoxes';

export function MobileSectionView() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`relative mt-[60px] flex flex-col gap-6 ${isExpanded ? 'max-h-none' : 'max-h-[30rem]'} overflow-hidden lg:hidden`}
    >
      {LovedByEnterprisingItems.map((item) => {
        return (
          <BlackSectionsBoxes key={item.id} InternalclassName="p-10 px-7">
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
          </BlackSectionsBoxes>
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
  );
}
