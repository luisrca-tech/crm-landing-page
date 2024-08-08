'use client';

import Image from 'next/image';

import Avatar from '/public/images/SecondAvatar.png';
import { Testimonials } from '../../ui/Testimonials';

import Box from '/public/images/Box.png';
import { DesktopBoxView } from './DesktopBoxView';
import { HeadingSection } from '../../ui/HeadingSection';
import { MobileBoxView } from './MobileBoxView';

export function YourDataAndFlows() {
  return (
    <div className="ml-6 flex flex-col gap-7">
      <HeadingSection
        title="Modele seus dados e fluxos."
        description="Um CRM precisa ir além de negociações. Attio é construído para qualquer processo de negócio."
      />
      <div className="block lg:hidden md:hidden">
        <MobileBoxView />
      </div>
      <div className="hidden lg:block md:block">
        <DesktopBoxView />
      </div>
      <Testimonials
        Avatar={Avatar}
        alt="Imagem de perfil de um homem loiro"
        description="“Attio é um produto flexivel, você pode construir qualquer coisa nele. Com as ferramentas que você precisa, pode construir um CRM que é exatamente o melhor para sua empresa, seus dados e seus processos."
        name="John Doe"
        role="Founder"
        descriptionDesktop="“Attio é um produto flexivel, você pode construir qualquer coisa nele. Com as ferramentas que você precisa, pode construir um CRM que é exatamente o melhor para sua empresa, seus dados e seus processos."
        nameDesktop="Filip Mark"
        roleDesktop="Chief of Staff, Passionfroot"
      />
    </div>
  );
}

export function DataAndFlowsWithBoxline() {
  return (
    <div className="relative mt-[3.75rem] lg:ml-6 lg:mt-[6.625rem]">
      <div className="w-full max-w-[2.125rem]">
        <Image
          className="absolute -left-3 top-0 z-10 lg:-left-7 lg:top-3"
          src={Box}
          alt="Icone de caixa tridimensional"
        />
        <div className="absolute left-1 top-6 h-full w-[0.09375rem] rounded-lg bg-gradient-to-b from-[rgba(255,255,255,1)] via-[rgba(217,217,217,0.8)] to-[rgba(255,255,255,1)] lg:-left-3 lg:top-9"></div>
      </div>
      <YourDataAndFlows />
    </div>
  );
}
