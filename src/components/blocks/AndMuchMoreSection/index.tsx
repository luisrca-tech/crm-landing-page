import { DesktopSectionView } from './DesktopSectionView';
import { MobileCarousel } from './MobileCarousel';

export function AndMuchMore() {
  return (
    <div className="flex h-full w-full flex-col py-[60px] lg:gap-16">
      <div className="flex flex-col gap-4 md:max-w-[25rem] lg:max-w-[25rem]">
        <h2 className="font-opensans text-[32px] italic leading-[38px] tracking-[-0.5px] text-base-100 md:text-[52px] md:leading-[58px] md:tracking-[-1.2px] lg:text-[52px] lg:leading-[58px] lg:tracking-[-1.2px]">
          <span className="text-base-300">E</span> muito mais...
        </h2>
        <p className="text-lg font-normal tracking-[-0.2px] text-base-200 md:text-[22px] md:leading-8 md:tracking-[-0.3px] lg:text-[22px] lg:leading-8 lg:tracking-[-0.3px]">
          Seus clientes estão sempre conectados. Por que você seu CRM deveria
          ser diferente?
        </p>
      </div>
      <MobileCarousel />
      <DesktopSectionView />
    </div>
  );
}
