import Image from 'next/image';

import Construct from '/public/images/Construct.png';
import Iphone from '/public/images/IphoneDesktop.png';
import WorkspaceAccessDesktop from '/public/images/WorkspaceAccessDesktop.png';
import DiscoveryCallDesktop from '/public/images/DiscoveryCallDesktop.png';

import { SectionsBoxes } from '../SectionsBoxes';

export function DesktopSectionView() {
  return (
    <div className="mt-9 hidden w-full flex-col gap-7 md:flex lg:flex">
      <div className="flex max-h-[579px] gap-7 md:max-h-none md:flex-col lg:flex-row">
        <SectionsBoxes internalClassName="flex flex-col justify-between md:gap-10">
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
              className="w-full object-cover"
              src={Construct}
              alt="Imagem de um espaço virtual de trabalho"
            />
          </SectionsBoxes>
        </SectionsBoxes>
        <SectionsBoxes internalClassName="flex flex-col justify-between gap-10">
          <div className="flex px-10 py-10">
            <h2 className="max-w-[20.625rem] text-lg font-normal tracking-[-0.2px] text-base-600">
              <span className="mr-2 font-semibold">
                Construa de qualquer lugar.
              </span>
              Nosso mobile app te permite colaborar de qualquer lugar sem
              comprometer seu fluxo de trabalho.
            </h2>
          </div>
          <div className="lg:mx-[8.25rem] md:mx-44">
            <Image
              className="w-full object-cover"
              src={Iphone}
              alt="Imagem de um espaço virtual de trabalho"
            />
          </div>
        </SectionsBoxes>
      </div>
      <div className="flex lg:max-h-[552px] gap-7 md:max-h-none md:flex-col lg:flex-row">
        <SectionsBoxes rootClassName="flex-1 max-w-[25.9375rem] md:max-w-none">
          <div className="flex p-10">
            <h2 className="text-lg font-normal tracking-[-0.2px] text-base-600 md:max-w-[24rem] ">
              <span className="mr-2 font-semibold">
                Controle de permissões.
              </span>
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
          rootClassName="flex-3 lg:max-w-[45.625rem] md:max-w-none"
          internalClassName="flex flex-col justify-between md:gap-10"
        >
          <div className="flex pl-10 pr-5 pt-10">
            <h2 className="max-w-[25.5rem] text-lg font-normal tracking-[-0.2px] text-base-600">
              <span className="mr-2 font-semibold">Guarde essa ideia.</span>
              Nunca perca uma ideia novamente. Com a colaboração em tempo real
              do Attio os colaboradores podem manter suas notas.
            </h2>
          </div>
          <SectionsBoxes rootClassName="lg:max-w-[37.625rem] lg:ml-[5.625rem] md:max-w-none md:ml-6">
            <Image
              className=" w-full object-cover"
              src={DiscoveryCallDesktop}
              alt="Imagem de um cadastro para lista de acesso de um espaço virtual"
            />
          </SectionsBoxes>
        </SectionsBoxes>
      </div>
    </div>
  );
}
