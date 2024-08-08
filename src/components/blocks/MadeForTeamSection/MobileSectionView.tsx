import Image from 'next/image';

import { SectionsBoxes } from '~/components/ui/SectionsBoxes';

import Config from '/public/images/Config.png';
import DiscoveryCall from '/public/images/DiscoveryCall.png';
import Iphone from '/public/images/Iphone.png';
import TableView from '/public/images/TableView.png';
import WorkspaceAccess from '/public/images/WorkspaceAccess.png';

export function MobileSectionView() {
  return (
    <div className="mt-9 flex flex-col gap-7 md:hidden lg:hidden">
      <SectionsBoxes>
        <div className="flex p-6">
          <h2 className="flex flex-col gap-1 text-lg font-normal tracking-[-0.2px] text-base-600">
            <span className="font-semibold">Colaboração em tempo real.</span>
            Colabora com sua equipe inteira e faça toda tarefa de forma
            perfeita. Veja a mudança que todos fazem em tempo real.
          </h2>
        </div>
        <SectionsBoxes rootClassName="mb-1 ml-6">
          <Image
            className="w-full object-cover"
            src={TableView}
            alt="Imagem de um espaço virtual de trabalho"
          />
        </SectionsBoxes>
      </SectionsBoxes>
      <SectionsBoxes>
        <div className="flex p-6">
          <h2 className="flex flex-col gap-1 text-lg font-normal tracking-[-0.2px] text-base-600">
            <span className="font-semibold">Construa de qualquer lugar.</span>
            Nosso mobile app te permite colaborar de qualquer lugar sem
            comprometer seu fluxo de trabalho.
          </h2>
        </div>
        <div className="mx-3">
          <Image
            className="w-full object-cover"
            src={Iphone}
            alt="Imagem de um espaço virtual de trabalho"
          />
        </div>
      </SectionsBoxes>
      <SectionsBoxes>
        <div className="flex p-6">
          <h2 className="flex flex-col gap-1 text-lg font-normal tracking-[-0.2px] text-base-600">
            <span className="font-semibold">Controle de permissões.</span>
            Controle quem da sua equipe pode interagir com quais negócios e
            funcionalidades.
          </h2>
        </div>
        <div className="h-full w-full rounded-tr-[26px] border border-base-200 bg-base-dark-100 p-[2px]">
          <div className="relative flex h-full w-full flex-col overflow-hidden rounded-tr-[26px] bg-base-100">
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
                className="absolute left-5 top-10 w-full object-cover"
                src={WorkspaceAccess}
                alt="Imagem de um cadastro para lista de acesso de um espaço virtual"
                width={372}
                height={280.72}
              />
            </>
          </div>
        </div>
      </SectionsBoxes>
      <SectionsBoxes>
        <div className="flex p-6">
          <h2 className="text-lg font-normal tracking-[-0.2px] text-base-600">
            <span className="mr-1 font-semibold">Guarde essa ideia.</span>
            Nunca perca uma ideia novamente. Com a colaboração em tempo real do
            Attio os colaboradores podem manter suas notas.
          </h2>
        </div>
        <SectionsBoxes rootClassName="mb-10 ml-6 ">
          <Image
            width={602}
            height={342}
            className="w-full object-cover"
            src={DiscoveryCall}
            alt="Imagem de uma página de notações"
          />
        </SectionsBoxes>
      </SectionsBoxes>
    </div>
  );
}
