import Image from 'next/image';

import Box from '../../../public/images/Box.png';
import TableView from '../../../public/images/TableView.png';
import Iphone from '../../../public/images/Iphone.png';
import WorkspaceAccess from '../../../public/images/WorkspaceAccess.png';
import Config from '../../../public/images/Config.png';
import DiscoveryCall from '../../../public/images/DiscoveryCall.png';
import Avatar from '../../../public/images/FourthAvatar.png';

import { HeaderSection } from './HeaderSection';
import { BoxSection } from './BoxSection';
import { Testimonials } from './Testimonials';

export function MadeForTeam() {
  return (
    <div className="ml-1 flex flex-col gap-7">
      <HeaderSection
        title="Feito para uso em equipe"
        description="O primeiro verdadeiro CRM para utilização em equipe. Afinal de contas, o melhor trabalho não vem sozinho."
      />
      <div className="mt-9 flex flex-col gap-7">
        <BoxSection
          title="Colaboração em tempo real."
          description="Colabor com sua equipe inteira e faça toda tarefa de forma perfeita. Veja a mudança que todos fazem em tempo real."
        >
          <div
            className={`ml-6 h-full w-full rounded-[28px] border border-base-200 bg-base-dark-100 p-[2px]`}
          >
            <div className="h-full w-full rounded-[28px] border border-base-dark-200 bg-base-100">
              <Image
                layout="responsive"
                width={578}
                height={358}
                className="w-full object-cover"
                src={TableView}
                alt="Imagem de um espaço virtual de trabalho"
              />
            </div>
          </div>
        </BoxSection>
        <BoxSection
          title="Contrua de qualquer lugar."
          description="Nosso mobile app te permite colaborar de qualquer lugar sem comprometer seu fluxo de trabalho."
        >
          <div className="mx-3">
            <Image
              layout="responsive"
              width={264.84}
              height={420.53}
              className="w-full object-cover"
              src={Iphone}
              alt="Imagem de um espaço virtual de trabalho"
            />
          </div>
        </BoxSection>
        <BoxSection
          title="Controle de permissões."
          description="Controle quem da sua equipe pode interagir com quais negócios e funcionalidades."
        >
          <div
            className={`h-full w-full rounded-tr-[26px] border border-base-200 bg-base-dark-100 p-[2px]`}
          >
            <div className="relative flex h-full w-full flex-col rounded-tr-[26px] bg-base-100">
              <>
                <Image
                  src={Config}
                  alt="Imagem ilustrativa de controle de permissões"
                  className="w-full object-cover"
                  layout="responsive"
                  width={430}
                  height={424}
                />
                <Image
                  layout="responsive"
                  className="absolute -bottom-1 left-6 w-full object-cover"
                  src={WorkspaceAccess}
                  alt="Imagem de um cadastro para lista de acesso de um espaço virtual"
                  width={372}
                  height={280.72}
                />
              </>
            </div>
          </div>
        </BoxSection>
        <BoxSection
          title="Guarde essa ideia."
          description="Nunca perca uma ideia novamente. Com a colaboração em tempo real do Attio os colaboradores podem manter suas notas."
        >
          <div
            className={`mb-10 ml-6 h-full w-full rounded-[28px] border border-base-200 bg-base-dark-100 p-[2px]`}
          >
            <div className="h-full w-full rounded-[28px] border border-base-dark-200 bg-base-100">
              <Image
                layout="responsive"
                width={602}
                height={342}
                className="w-full object-cover"
                src={DiscoveryCall}
                alt="Imagem de uma página de notações"
              />
            </div>
          </div>
        </BoxSection>
      </div>
      <Testimonials
        Avatar={Avatar}
        alt="Avatar de um homem vestido de preto"
        description="“Attio fez uma mudança crucial em escalar, construindo um novo modelo de markerting e vendas. Permitindo minha equipe a facilmente estar no topo de tudo!”"
        name="Alon Barthur"
        role="Co-founder & CEO, Dopt"
      />
    </div>
  );
}

export function MadeForTeamWithBoxLine() {
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
        <MadeForTeam />
      </div>
    </section>
  );
}
