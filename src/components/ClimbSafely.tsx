import Image from 'next/image';
import { SecurityCertificates } from '~/constants/SecurityCertificates';
import { ButtonLink } from './ui/Button/ButtonLink';

export function ClimbSafely() {
  return (
    <div className="mt-20 border border-x-0 border-base-200 px-4">
      <div className="relative flex w-full items-center justify-center border border-y-0 border-base-200 py-6">
        <div className="absolute left-[-0.9px] top-[-1rem] h-4 w-[0.8px] bg-base-200" />
        <div className="absolute right-[-0.9px] top-[-1rem] h-4 w-[0.8px] bg-base-200" />

        <div className="flex w-full flex-col items-center justify-center xl:flex-row">
          <div className="flex w-full flex-col items-center justify-center py-10 xl:items-start xl:px-14 xl:pl-16">
            <h2 className="font-opensans text-[28px] font-bold italic leading-[38px] tracking-[-0.5px] text-base-600 xl:text-[40px] xl:leading-[44px]">
              Escale com <span className="text-base-300">segurança</span>
            </h2>
            <span className="mt-[6px] px-6 text-center text-sm font-normal tracking-[-0.2px] text-base-600 xl:max-w-[388px] xl:px-0 xl:text-start xl:text-xl">
              Attio é auditado e certificado pelas principais certificações da
              industria.
            </span>
            <ButtonLink href="#" filled="primary" className="mt-5 py-4">
              Comece gratuitamente
            </ButtonLink>
          </div>
          <div className="w-full border-t border-base-200 xl:hidden"></div>
          <div className="flex w-full flex-wrap items-center justify-around gap-8 px-4 py-10 xl:max-h-5 xl:flex-nowrap xl:gap-12 xl:border xl:border-base-200 xl:px-11 xl:py-28">
            {SecurityCertificates.map((item) => {
              return (
                <Image
                  key={item.id}
                  src={item.image}
                  alt="Certificados de segurança Attios"
                />
              );
            })}
          </div>
        </div>

        <div className="absolute bottom-[-1rem] left-[-0.9px] h-4 w-[0.8px] bg-base-200" />
        <div className="absolute bottom-[-1rem] right-[-0.9px] h-4 w-[0.8px] bg-base-200" />
      </div>
    </div>
  );
}
