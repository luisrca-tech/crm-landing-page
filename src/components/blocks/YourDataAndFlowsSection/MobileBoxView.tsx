import Image from 'next/image';

import Workspaces from '/public/images/Workspaces.png';
import Fluxo from '/public/images/Fluxo.png';
import Object from '/public/images/Object.png';

import { BoxToolsImages } from '~/constants/BoxToolImages';
import { BoxSection } from '../BoxSection';

export function MobileBoxView() {
  return (
    <div className="mt-9 flex flex-col gap-7 lg:flex-row">
      <BoxSection>
        <div className="flex p-6 text-base font-normal tracking-[-0.2px]">
          <h2 className="flex flex-col gap-1 text-lg ">
            <span className="font-semibold">
              Sempre conecte aos seus dados.
            </span>
            Sincronize continuamente com seu produto, despesas e relacionamentos
            em sua área de trabalho.
          </h2>
        </div>
        <div className="ml-6">
          <Image
            className="w-full object-cover"
            src={Workspaces}
            alt="Imagem de um espaço virtual de trabalho"
            width={519}
            height={347.25}
          />
        </div>
      </BoxSection>
      <BoxSection>
        <div className="flex p-6 text-base font-normal tracking-[-0.2px]">
          <h2 className="flex flex-col gap-1 text-lg ">
            <span className="font-semibold">Um CRM para qualquer caso.</span>
            Facilmente crie objetos customizados para conectar seu negócio a uma
            estrutura de dados unica.
          </h2>
        </div>
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
  );
}
