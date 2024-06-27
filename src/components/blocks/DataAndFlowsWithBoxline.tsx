import Image from 'next/image';
import { YourDataAndFlows } from './DataAndFlows';

import Box from '../../../public/images/Box.png';

export function DataAndFlowsWithBoxline() {
  return (
    <section className="xsm:hidden">
      <div className="relative flex h-full w-full gap-3">
        <div className="flex h-full w-[2.125rem] flex-col items-center justify-center">
          <Image
            className="absolute -left-3 top-1"
            src={Box}
            alt="Icone de caixa tridimensional"
          />
          <div className="h-full w-[0.09375rem] rounded-lg bg-gradient-to-b from-[rgba(255,255,255,1)] via-[rgba(217,217,217,0.8)] to-[rgba(255,255,255,1)]"></div>
        </div>
        <YourDataAndFlows />
      </div>
    </section>
  );
}
