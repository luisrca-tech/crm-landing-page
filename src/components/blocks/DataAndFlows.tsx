'use client';

import Image from 'next/image';

import Avatar from '../../../public/images/SecondAvatar.png';
import Workspaces from '../../../public/images/Workspaces.png';
import Fluxo from '../../../public/images/Fluxo.png';
import Object from '../../../public/images/Object.png';
import { BoxToolsImages } from '~/constant/box-tools-images';
import { HeaderSection } from './HeaderSection';
import { BoxSection } from './BoxSection';
import { Testimonials } from './Testimonials';

import Box from '../../../public/images/Box.png';

export function YourDataAndFlows() {
  return (
    <div className="ml-1 flex flex-col gap-7">
      <HeaderSection
        title="Modele seus dados e fluxos."
        description="Um CRM precisa ir além de negociações. Attio é construído para qualquer processo de negócio."
      />

      <div className="mt-9 flex flex-col gap-7">
        <BoxSection
          title="Sempre conecte aos seus dados."
          description="Sincronize continuamente com seu produto, despesas e relacionamentos em sua área de trabalho."
        >
          <div className="ml-6 rounded-[1.25rem] border-[0.0225rem] border-base-dark-100 bg-blue-100">
            <div className="h-full w-full overflow-hidden rounded-[1.25rem] bg-[#F9F9FB]">
              <Image
                className="w-full object-cover"
                src={Workspaces}
                alt="Imagem de um espaço virtual de trabalho"
                width={519}
                height={347.25}
                layout="responsive"
              />
            </div>
          </div>
        </BoxSection>
        <BoxSection
          title="Um CRM para qualquer caso."
          description="Facilmente crie objetos customizados para conectar seu negócio a uma estrutura de dados unica."
        >
          <div className="rounded-b-[1.20rem] border-[0.0225rem] border-base-dark-100 bg-blue-100">
            <div className="h-full w-full overflow-hidden rounded-lg bg-[#F9F9FB]">
              <Image
                className="w-full rounded-lg object-cover"
                src={Fluxo}
                alt="Imagem de um fluxograma"
                layout="responsive"
                width={303}
                height={239}
              />
            </div>
          </div>
        </BoxSection>
        <BoxSection>
          <div className="rounded-[1.25rem] border-[0.0225rem] border-base-dark-100 bg-blue-100">
            <div className="h-full w-full overflow-hidden rounded-[1.25rem] bg-[#F9F9FB]">
              <Image
                className="w-full rounded-lg object-cover"
                src={Object}
                alt="Imagem de um fluxograma"
                layout="responsive"
                width={299}
                height={357}
              />
            </div>
          </div>
        </BoxSection>
        <div className="flex h-[4.6875rem] w-full items-center justify-center rounded-[1.25rem] border-base-200 bg-base-dark-100 p-1">
          <div className="flex h-[4.1875rem] w-full items-center justify-center gap-[11.2px] rounded-[1.25rem] border border-base-dark-200 bg-base-100">
            {BoxToolsImages.map((box) => {
              return (
                <div
                  key={box.id}
                  className="flex h-9 w-9 items-center justify-center rounded-[9px] border border-[#E4E4E4] text-base-100"
                >
                  <div className="flex items-center justify-center gap-3">
                    <Image
                      className="h-full w-full object-cover"
                      src={box.image}
                      alt="Imagens de icones de aplicativos de ferramentas web"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Testimonials
        Avatar={Avatar}
        alt="Imagem de perfil de um homem loiro"
        description="“Attio é um produto flexivel, você pode construir qualquer coisa nele. Com as ferramentas que você precisa, pode construir um CRM que é exatamente o melhor para sua empresa, seus dados e seus processos."
        name="John Doe"
        role="Founder"
      />
    </div>
  );
}

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
