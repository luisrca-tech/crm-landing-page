import Image from 'next/image';

import Workspaces from '/public/images/WorkspacesDesktop.png';
import Fluxo from '/public/images/FluxoDesktop.png';

import { BoxSection } from '../BoxSection';
import { BoxToolsImages } from '~/constants/BoxToolImages';

export function DesktopBoxView() {
  return (
    <div>
      <BoxSection>
        <div className="flex gap-16 pt-10">
          <div className="flex pl-10 text-lg">
            <h2 className="font-normal">
              <span className="font-semibold">
                Sempre conecte aos seus dados.
              </span>
              <span className="ml-1">
                Sincronize continuamente com seu produto, despesas e
                relacionamentos em sua área de trabalho.
              </span>
            </h2>
          </div>
          <Image
            className="w-full object-cover"
            src={Workspaces}
            alt="Imagem de um espaço virtual de trabalho"
          />
        </div>
      </BoxSection>
      <div className='grid max-h-[608px] grid-cols-5 gap-8 mt-8 grid-rows-4'>
        <BoxSection className='w-full row-span-full col-span-3 '>
          <div className="flex flex-col gap-16 pt-10">
            <div className="flex pl-10 text-lg">
              <h2 className="font-normal">
                <span className="font-semibold">
                  Sempre conecte aos seus dados.
                </span>
                <span className="ml-1">
                  Sincronize continuamente com seu produto, despesas e
                  relacionamentos em sua área de trabalho.
                </span>
              </h2>
            </div>
            <Image
              className="w-full object-cover"
              src={Workspaces}
              alt="Imagem de um espaço virtual de trabalho"
            />
          </div>
        </BoxSection>
        <BoxSection className="flex-1 row-span-3 col-span-2">
          <div className="flex flex-col gap-20 pt-10">
            <div className="max-w-[29rem] pl-10 pr-1 text-lg">
              <h2 className="font-normal">
                <span className="font-semibold">
                  Um CRM para qualquer caso.
                </span>
                <span className="ml-1">
                  Facilmente crie objetos customizados para conectar seu negócio
                  a uma estrutura de dados unica.
                </span>
              </h2>
            </div>
            <Image
              className="w-full object-cover"
              src={Fluxo}
              alt="Imagem de um espaço virtual de trabalho"
            />
          </div>
        </BoxSection>
        <BoxSection className='col-span-2'>
          <div className="flex justify-around gap-3 px-6 py-7">
            {BoxToolsImages.map((box) => {
              return (
                <div
                  key={box.id}
                  className="flex h-16 w-16 items-center justify-center rounded-[9px] border border-[#E4E4E4] text-base-100"
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
        </BoxSection>
      </div >
    </div >
  );
}
