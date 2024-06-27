import Image from 'next/image';
import { CreatedForYou } from './CreatedForYou';

import Box from '../../../public/images/Box.png';

export function CreatedForYouAndBoxline() {
  return (
    <section>
      <div className="w-full h-full relative flex gap-3">
        <div className="flex h-full w-[2.125rem] flex-col items-center justify-center">
          <Image
            className="absolute -left-3 top-1"
            src={Box}
            alt=""
          />
          <div className="h-full w-[0.09375rem] rounded-lg bg-gradient-to-b from-[rgba(255,255,255,1)] via-[rgba(217,217,217,0.8)] to-[rgba(255,255,255,1)]"></div>
        </div>
        <CreatedForYou />
      </div>
    </section>
  );
}
