import Image from 'next/image';

import Avatar from '../../../../public/images/FristAvatar.png';
import Box from '../../../../public/images/Box.png';

import { MobileCarousel } from './MobileCarousel';
import { FeaturesBox } from './FeaturesBox';
import { HeaderSection } from '../HeaderSection';
import { Testimonials } from '../Testimonials';

export function CreatedForYou() {
  return (
    <section className="flex w-full flex-col gap-16">
      <HeaderSection
        title="O CRM criado para ser seu!"
        description="Mova qualquer coisa e garanta que tudo esta de acordo com as necessidades do seu negócios, não o contrário!"
      />
      <div className="lg:hidden">
        <MobileCarousel />
      </div>
      <div className="hidden lg:block">
        <FeaturesBox />
      </div>
      <Testimonials
        Avatar={Avatar}
        alt='Mulher morena de cabelo preto em um fundo preto'
        description="“Minha equipe ama trabalhar com os relatórios do Attio porque são muito dinamicos.”"
        name="John Doe"
        role="Founder"
        descriptionDesktop="“Minha equipe ama trabalhar com os relatórios do Attio porque são muito dinamicos. Nós podemos separar nossos dados em tantas formas diferentes.”"
        nameDesktop="DeGrasse Schrader"
        roleDesktop="Chief of Staff, Pallet"
      />
    </section>
  );
}

export function CreatedForYouWithBoxline() {
  return (
      <div className="relative flex h-full w-full gap-3 mt-14">
        <div className="flex h-full w-[2.125rem] flex-col items-center justify-center">
          <Image
            className="absolute -left-3 top-0 z-10 lg:left-0 lg:top-3"
            src={Box}
            alt="Icone de caixa tridimensional"
          />
          <div className="absolute left-1 top-0 h-full w-[0.09375rem] rounded-lg bg-gradient-to-b from-[rgba(255,255,255,1)] via-[rgba(217,217,217,0.8)] to-[rgba(255,255,255,1)] lg:left-4"></div>
        </div>
        <CreatedForYou />
      </div>
  );
}
