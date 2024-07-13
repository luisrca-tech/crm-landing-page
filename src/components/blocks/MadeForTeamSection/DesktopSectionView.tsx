import Image from 'next/image';

import Construct from '/public/images/Construct.png';
import Iphone from '/public/images/IphoneDesktop.png';
import WorkspaceAccessDesktop from '/public/images/WorkspaceAccessDesktop.png';
import DiscoveryCallDesktop from '/public/images/DiscoveryCallDesktop.png';
import { SectionsBoxes } from '../SectionsBoxes';

export function DesktopSectionView() {
  return (
    <div className="mt-8 hidden grid-cols-5 gap-8 md:grid md:grid-cols-4 lg:grid">
      <SectionsBoxes
        rootClassName=" lg:max-h-[579px] col-span-3 md:col-span-2"
        internalClassName="flex flex-col justify-between md:gap-2"
      >
        <div className="flex pl-10 pr-[4.625rem] pt-10">
          <h2 className="max-w-[30.75rem] text-lg font-normal tracking-[-0.2px] text-base-600">
            <span className="mr-2 font-semibold">
              Colaboração em tempo real.
            </span>
            Colabora com sua equipe inteira e faça toda tarefa de forma
            perfeita. Veja a mudança que todos fazem em tempo real.
          </h2>
        </div>
        <SectionsBoxes rootClassName="ml-6">
          <Image
            className="max-h-[378px] w-full"
            src={Construct}
            alt="Imagem de um espaço virtual de trabalho"
          />
        </SectionsBoxes>
      </SectionsBoxes>
      <SectionsBoxes
        rootClassName=" lg:max-h-[579px] col-span-2"
        internalClassName="flex flex-col justify-between gap-10 md:gap-4"
      >
        <div className="col-span-2 flex px-10 pt-10">
          <h2 className="max-w-[20.625rem] text-lg font-normal tracking-[-0.2px] text-base-600">
            <span className="mr-2 font-semibold">
              Construa de qualquer lugar.
            </span>
            Nosso mobile app te permite colaborar de qualquer lugar sem
            comprometer seu fluxo de trabalho.
          </h2>
        </div>
        <div className="md:px-20 lg:px-36">
          <Image
            className="w-full object-cover"
            src={Iphone}
            alt="Imagem de um espaço virtual de trabalho"
          />
        </div>
      </SectionsBoxes>
      <SectionsBoxes
        rootClassName=" lg:max-h-[579px] col-span-2"
        internalClassName="flex flex-col gap-10 md:gap-1"
      >
        <div className="flex p-10 md:pb-0">
          <h2 className="text-lg font-normal tracking-[-0.2px] text-base-600 md:max-w-[24rem]">
            <span className="mr-2 font-semibold">Controle de permissões.</span>
            Controle quem da sua equipe pode interagir com quais negócios e
            funcionalidades.
          </h2>
        </div>
        <Image
          className="w-full object-cover"
          src={WorkspaceAccessDesktop}
          alt="Imagem de um cadastro para lista de acesso de um espaço virtual"
        />
      </SectionsBoxes>
      <SectionsBoxes
        rootClassName=" lg:max-h-[579px] col-span-3 md:col-span-2"
        internalClassName="flex flex-col justify-between md:gap-10"
      >
        <div className="flex pl-10 pr-5 pt-10 ">
          <h2 className="max-w-[25.5rem] text-lg font-normal tracking-[-0.2px] text-base-600">
            <span className="mr-2 font-semibold">Guarde essa ideia.</span>
            Nunca perca uma ideia novamente. Com a colaboração em tempo real do
            Attio os colaboradores podem manter suas notas.
          </h2>
        </div>
        <SectionsBoxes rootClassName="max-w-[602px] ml-[90px] mr-5 md:ml-6">
          <Image
            className="w-full object-cover"
            src={DiscoveryCallDesktop}
            alt="Imagem de um cadastro para lista de acesso de um espaço virtual"
          />
        </SectionsBoxes>
      </SectionsBoxes>
    </div>
  );
}
