import Image from 'next/image';

import { SectionsBoxes } from '~/components/ui/SectionsBoxes';
import Construct from '/public/images/Construct.png';
import DiscoveryCallDesktop from '/public/images/DiscoveryCallDesktop.png';
import Iphone from '/public/images/IphoneDesktop.png';
import WorkspaceAccessDesktop from '/public/images/WorkspaceAccessDesktop.png';

export function DesktopSectionView() {
  return (
    <div className="mt-8 hidden w-full gap-8 pb-7 md:grid lg:grid">
      <div className="grid grid-cols-4 gap-8">
        <SectionsBoxes
          rootClassName="col-span-2 max-h-[36.1875rem]"
          internalClassName="flex flex-col gap-[4rem] justify-between"
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
          <SectionsBoxes rootClassName="ml-6 ">
            <Image
              className="w-full object-cover"
              src={Construct}
              alt="Imagem de um espaço virtual de trabalho"
            />
          </SectionsBoxes>
        </SectionsBoxes>
        <SectionsBoxes
          rootClassName="col-span-2 max-h-[36.1875rem]"
          internalClassName="flex flex-col gap-[4rem] justify-between"
        >
          <div className="flex pl-10 pr-[4.625rem] pt-10">
            <h2 className="max-w-[30.75rem] text-lg font-normal tracking-[-0.2px] text-base-600">
              <span className="mr-2 font-semibold">
                Construa de qualquer lugar.
              </span>
              Nosso mobile app te permite colaborar de qualquer lugar sem
              comprometer seu fluxo de trabalho.
            </h2>
          </div>
          <Image
            className="w-full object-cover md:px-20 lg:px-28 2xl:px-44"
            src={Iphone}
            alt="Imagem de um espaço virtual de trabalho"
          />
        </SectionsBoxes>
      </div>
      <div className="grid grid-cols-6 gap-8">
        <SectionsBoxes
          internalClassName="flex flex-col justify-between"
          rootClassName="lg:col-span-2 md:col-span-3 max-h-[36.1875rem]"
        >
          <div className="flex p-10">
            <h2 className="text-lg font-normal tracking-[-0.2px] text-base-600">
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
          internalClassName="flex flex-col justify-between"
          rootClassName="lg:col-span-4 md:col-span-3 max-h-[36.1875rem]"
        >
          <div className="flex p-10 pr-5">
            <h2 className="max-w-[24rem] text-lg font-normal tracking-[-0.2px] text-base-600">
              <span className="mr-2 font-semibold">Guarde essa ideia.</span>
              Nunca perca uma ideia novamente. Com a colaboração em tempo real
              do Attio os colaboradores podem manter suas notas.
            </h2>
          </div>
          <div className="md:pl-10 md:pr-2 lg:pl-[5.625rem] lg:pr-5">
            <SectionsBoxes>
              <Image
                className="w-full object-cover"
                src={DiscoveryCallDesktop}
                alt="Imagem de um cadastro para lista de acesso de um espaço virtual"
              />
            </SectionsBoxes>
          </div>
        </SectionsBoxes>
      </div>
    </div>
  );
}
