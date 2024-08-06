import Image from 'next/image';

import Box from '/public/images/Box.png';
import Avatar from '/public/images/FourthAvatar.png';

import { HeadingSection } from '~/components/ui/HeadingSection';
import { Testimonials } from '~/components/ui/Testimonials';
import { DesktopSectionView } from './DesktopSectionView';
import { MobileSectionView } from './MobileSectionView';

export function MadeForTeam() {
  return (
    <div className="flex flex-col gap-7">
      <HeadingSection
        title="Feito para uso em equipe"
        description="O primeiro verdadeiro CRM para utilização em equipe. Afinal de contas, o melhor trabalho não vem sozinho."
      />
      <MobileSectionView />
      <DesktopSectionView />
      <Testimonials
        Avatar={Avatar}
        alt="Avatar de um homem vestido de preto"
        description="“Attio fez uma mudança crucial em escalar, construindo um novo modelo de markerting e vendas. Permitindo minha equipe a facilmente estar no topo de tudo!”"
        name="Alon Barthur"
        role="Co-founder & CEO, Dopt"
        descriptionDesktop="“Attio fez uma mudança crucial em escalar, construindo um novo modelo de markerting e vendas. Permitindo minha equipe a facilmente estar no topo de tudo!”"
        nameDesktop="Alon Bartur"
        roleDesktop="Co-founder & CEO, Dopt"
      />
    </div>
  );
}

export function MadeForTeamWithBoxLine() {
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
      <MadeForTeam />
    </div>
  );
}
