import Image from 'next/image';

import Workspaces from '/public/images/WorkspacesDesktop.png';
import Fluxo from '/public/images/FluxoDesktop.png';
import Object from '/public/images/ObjectDesktop.png';

import { BoxToolsImages } from '~/constants/BoxToolImages';
import { SectionsBoxes } from '../../ui/SectionsBoxes';

export function DesktopBoxView() {
  return (
    <div>
      <SectionsBoxes>
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
      </SectionsBoxes>
      <div className="mt-8 grid grid-cols-5 grid-rows-4 gap-8 md:max-h-[420px] lg:max-h-[608px]">
        <SectionsBoxes rootClassName="col-span-3 row-span-full w-full ">
          <div className="flex flex-col pt-10">
            <div className="flex max-w-[468px] pl-10 text-lg">
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
        </SectionsBoxes>
        <SectionsBoxes
          rootClassName="col-span-2 row-span-3"
          internalClassName="md:flex md:items-center md:justify-center"
        >
          <Image
            className="w-full object-cover"
            src={Object}
            alt="Imagem de um espaço virtual de trabalho"
          />
        </SectionsBoxes>
        <SectionsBoxes rootClassName="col-span-2">
          <div className="flex justify-around gap-3 px-6 py-7">
            {BoxToolsImages.map((box) => {
              return (
                <div
                  key={box.id}
                  className="flex items-center justify-center rounded-[9px] border border-[#E4E4E4] text-base-100 lg:h-16 lg:w-16"
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
        </SectionsBoxes>
      </div>
    </div>
  );
}
