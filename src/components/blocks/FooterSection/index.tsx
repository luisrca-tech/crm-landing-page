import Image from 'next/image';

import LogoAttio from '/public/images/LogoFooter.png';
import TwitterFooter from '/public/images/TwitterFooter.png';
import Linkedin from '/public/images/Linkedin.png';
import Dribbble from '/public/images/Dribbble.png';

import { AccordionMobile } from './AccordionMobile';
import { DesktopFooterSection } from './DesktopFooterSection';

export function Footer() {
  return (
    <div className="relative flex flex-col gap-10 pt-10">
      <div className="flex justify-between">
        <Image src={LogoAttio} alt="Logo da Attio CRM" />
        <div className="flex gap-3 lg:hidden">
          <Image
            width={13}
            height={13}
            src={TwitterFooter}
            alt="Twitter Logo"
          />
          <Image width={13} height={13} src={Dribbble} alt="Dribbble Logo" />
          <Image width={13} height={13} src={Linkedin} alt="Linkedin Logo" />
        </div>
      </div>
      <AccordionMobile />
      <DesktopFooterSection />
      <div className="flex items-center justify-center px-14 py-5 text-center">
        <p className="max-w-[260px] text-[10px] leading-4 tracking-[-0.1px] text-base-400">
          Este website foi construído durante uma mentoria fullstack. Nenhuma
          informação aqui deve ser levada como verdadeira. Para mais
          informações, acessar: www.mentoriafullstack.com{' '}
        </p>
      </div>
    </div>
  );
}
