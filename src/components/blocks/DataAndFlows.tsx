'use client';

import Image from 'next/image';

import Avatar from '../../../public/images/SecondAvatar.png';
import Workspaces from '../../../public/images/Workspaces.png';
import Fluxo from '../../../public/images/Fluxo.png';
import Object from '../../../public/images/Object.png';
import { BoxToolsImages } from '~/constant/box-tools-images';
import { Feedbacks } from './Feedbacks';
import { HeaderSection } from './HeaderSection';
import { BoxSection } from './BoxSection';

export function YourDataAndFlows() {
  return (
    <div className="flex flex-col gap-7 px-6">
      <HeaderSection
        title="Modele seus dados e fluxos."
        description="Um CRM precisa ir além de negociações. Attio é construído para qualquer processo de negócio."
      />

      <div className="mt-9 flex flex-col gap-7">
        <BoxSection
          height="32"
          title="Sempre conecte aos seus dados."
          description="Sincronize continuamente com seu produto, despesas e relacionamentos em sua área de trabalho."
        >
          <div className="absolute bottom-1 right-1 h-[20rem] w-[17rem] rounded-tl-[19.5px] border-[0.0225rem] border-base-dark-100 bg-blue-100">
            <div className="h-full w-full overflow-hidden rounded-lg bg-[#F9F9FB]">
              <Image
                priority
                className="w-full rounded-lg object-cover"
                src={Workspaces}
                alt="Imagem de um espaço virtual de trabalho"
              />
            </div>
          </div>
        </BoxSection>
        <BoxSection
          height="26.3"
          title="Um CRM para qualquer caso."
          description="Facilmente crie objetos customizados para conectar seu negócio a uma estrutura de dados unica."
        >
          <div className="absolute bottom-[6.5px] w-[18.5625rem] rounded-b-[1.20rem] border-[0.0225rem] border-base-dark-100 bg-blue-100">
            <div className="h-full w-full overflow-hidden rounded-lg bg-[#F9F9FB]">
              <Image
                priority
                className="w-full rounded-lg object-cover"
                src={Fluxo}
                alt="Imagem de um fluxograma"
              />
            </div>
          </div>
        </BoxSection>
        <BoxSection height="20">
          <div className="absolute h-full w-full rounded-[1.25rem] border-[0.0225rem] border-base-dark-100 bg-blue-100 p-1">
            <div className="h-full w-full overflow-hidden rounded-[1.25rem] bg-[#F9F9FB]">
              <Image
                priority
                className="w-full rounded-lg object-cover"
                src={Object}
                alt="Imagem de um fluxograma"
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
                      alt=""
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Feedbacks
        Avatar={Avatar}
        alt="Imagem de perfil de um homem loiro"
        description="“Attio é um produto flexivel, você pode construir qualquer coisa nele. Com as ferramentas que você precisa, pode construir um CRM que é exatamente o melhor para sua empresa, seus dados e seus processos."
        name="John Doe"
        role="Founder"
      />
    </div>
  );
}
