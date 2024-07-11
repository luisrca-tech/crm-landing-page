import Image from 'next/image';

import Twitter from '/public/images/Twitter.png';

import { LovedByEnterprisingItems } from '~/constants/LovedByEnterprisingItems';
import { BlackSectionsBoxes } from '~/components/ui/BlackSectionsBoxes';

export function DesktopSectionView() {
  return (
    <div className="mt-[68px] hidden lg:flex">
      <div className="flex flex-wrap gap-7 lg:justify-center 2xl:justify-start">
        {LovedByEnterprisingItems.map((item) => {
          return (
            <BlackSectionsBoxes
              key={item.id}
              rootClassName="2xl:max-w-[401px] lg:max-w-[301px]"
              InternalclassName="p-10 px-7 h-auto"
            >
              <div className="h- flex flex-col gap-6">
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
      </div>
    </div>
  );
}
