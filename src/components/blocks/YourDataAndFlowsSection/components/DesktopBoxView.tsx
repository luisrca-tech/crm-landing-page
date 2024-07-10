import Image from 'next/image';

import Workspaces from '/public/images/WorkspacesDesktop.png';
import Fluxo from '/public/images/FluxoDesktop.png';
import Object from '/public/images/ObjectDesktop.png';

import { BoxSection } from '../../BoxSection';
import { BoxToolsImages } from '~/constants/BoxToolImages';

export function DesktopBoxView() {
  return (
    <div className="flex w-full flex-col justify-between gap-7">
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

      <div className="flex gap-7">
        <BoxSection className="flex-1">
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
        <div className="flex flex-1 flex-col gap-6">
          <BoxSection>
            <Image
              src={Object}
              alt="Imagem ilustrativa de um fluxo de objetos"
              className="w-full object-cover"
            />
          </BoxSection>

          <BoxSection>
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
        </div>
      </div>
    </div>
  );
}
