import Link from 'next/link';

export function ClimbSafely() {
  return (
    <section>
      <div className="flex h-full w-full px-6 py-12"></div>
      <div className="flex items-center justify-center">
        <div className="flex flex-col px-6 pb-[50px] pt-[30px]">
          <h2 className="font-opensans text-[32px] font-bold italic leading-[38px] tracking-[-0.5px] text-base-600">
            Escale com <span className="text-base-300">segurança</span>
          </h2>
          <span className="mt-[6px] px-6 text-center text-base font-normal tracking-[-0.2px] text-base-600">
            Attio é auditado e certificado pelas principais certificações da
            industria.
          </span>
          <Link className="flex items-center justify-center" href="#">
            <button className="mt-5 flex h-12 items-center justify-center rounded-xl border border-base-400 bg-base-600 px-3 py-4 text-base font-normal tracking-[-0.2px] text-base-100">
              Comece gratuitamente
            </button>
          </Link>
        </div>
        <div></div>
      </div>
    </section>
  );
}
