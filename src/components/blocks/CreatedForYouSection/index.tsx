import Image from 'next/image';

import Box from '/public/images/Box.png';
import Avatar from '/public/images/FristAvatar.png';

import { HeadingSection } from '~/components/ui/HeadingSection';
import { Testimonials } from '~/components/ui/Testimonials';
import { FeaturesBox } from './FeaturesBox';
import { MobileCarousel } from './MobileCarousel';

export function CreatedForYou() {
  return (
    <section className="flex w-full flex-col gap-16">
      <HeadingSection
        title="O CRM criado para ser seu!"
        description="Mova qualquer coisa e garanta que tudo esta de acordo com as necessidades do seu negócios, não o contrário!"
      />
      <MobileCarousel />
      <FeaturesBox />
      <Testimonials
        Avatar={Avatar}
        alt="Mulher morena de cabelo preto em um fundo preto"
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
    <div className="relative mt-[3.75rem] flex gap-6 lg:mt-[6.625rem]">
      <div className="w-full max-w-[2.125rem]">
        <Image
          className="absolute -left-3 top-1 z-10 lg:left-0 lg:top-3"
          src={Box}
          alt="Icone de caixa tridimensional"
        />
        <div className="absolute left-1 top-0 h-full w-[0.09375rem] rounded-lg bg-gradient-to-b from-[rgba(255,255,255,1)] via-[rgba(217,217,217,0.8)] to-[rgba(255,255,255,1)] lg:left-4"></div>
      </div>
      <CreatedForYou />
    </div>
  );
}
