import Image from 'next/image';
import { BlackSectionsBoxes } from '~/components/ui/BlackSectionsBoxes';
import { MuchMoreItems } from '~/constants/MuchMoreItems';

export function DesktopSectionView() {
  return (
    <div className="hidden lg:flex">
      <div className="flex flex-wrap gap-7 lg:justify-center 2xl:justify-start">
        {MuchMoreItems.map((item) => {
          return (
            <BlackSectionsBoxes key={item.id} rootClassName="lg:max-w-[420px]">
              <Image src={item.image} alt={item.alt} />
              <div className="flex flex-col gap-[6px]">
                <h3 className="text-xl font-medium leading-8 tracking-[-0.3px] text-base-200">
                  {item.title}
                </h3>
                <p className="text-base font-normal tracking-[-0.2px] text-base-300">
                  {item.description}
                </p>
              </div>
            </BlackSectionsBoxes>
          );
        })}
      </div>
    </div>
  );
}
