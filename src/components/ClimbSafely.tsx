import Image from 'next/image';
import Link from 'next/link';
import { SecurityCertificates } from '~/constants/SecurityCertificates';

export function ClimbSafely() {
  return (
    <div className="mt-20 border border-x-0 border-base-200 px-4">
      <div className="flex w-full items-center justify-center border border-y-0 border-base-200 py-6">
        <div className="flex w-full flex-col items-center justify-center lg:flex-row">
          <div className="relative flex w-full flex-col items-center justify-center lg:items-start lg:px-14 lg:pl-16">
            <h2 className="font-opensans text-[28px] font-bold italic leading-[38px] tracking-[-0.5px] text-base-600 lg:text-[40px] lg:leading-[44px]">
              Escale com <span className="text-base-300">segurança</span>
            </h2>
            <span className="mt-[6px] px-6 text-center text-sm font-normal tracking-[-0.2px] text-base-600 lg:max-w-[388px] lg:px-0 lg:text-start lg:text-xl">
              Attio é auditado e certificado pelas principais certificações da
              industria.
            </span>
            <Link
              className="mt-5 flex h-12 items-center justify-center rounded-xl border border-base-400 bg-base-600 px-3 py-4 text-base font-normal tracking-[-0.2px] text-base-100"
              href="#"
            >
              Comece gratuitamente
            </Link>
          </div>
          <div className="my-10 w-full border-t border-base-200 lg:hidden"></div>
          <div className="flex w-full flex-wrap items-center justify-around gap-8 lg:max-h-5 lg:flex-nowrap lg:gap-12 lg:border lg:border-base-200 lg:px-11 lg:py-28">
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
      </div>
    </div>
  );
}
