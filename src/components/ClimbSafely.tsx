import Image from 'next/image';
import Link from 'next/link';
import { SecurityCertificates } from '~/constants/security-certificates';

export function ClimbSafely() {
  return (
    <section className="relative mt-20 w-full">
      <div className="absolute border border-base-200 py-6">
        <div className="flex w-full flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center">
            <h2 className="font-opensans text-[28px] font-bold italic leading-[38px] tracking-[-0.5px] text-base-600">
              Escale com <span className="text-base-300">segurança</span>
            </h2>
            <span className="mt-[6px] px-6 text-center text-sm font-normal tracking-[-0.2px] text-base-600">
              Attio é auditado e certificado pelas principais certificações da
              industria.
            </span>
            <Link className="flex items-center justify-center" href="#">
              <button className="mt-5 flex h-12 items-center justify-center rounded-xl border border-base-400 bg-base-600 px-3 py-4 text-base font-normal tracking-[-0.2px] text-base-100">
                Comece gratuitamente
              </button>
            </Link>
          </div>
          <div className="my-10 w-full border-t border-base-200"></div>
          <div className="flex w-full flex-wrap items-center justify-center gap-8">
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
    </section>
  );
}
