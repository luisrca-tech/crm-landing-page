import ContactUsForm from './ContactUs';

export function ReadyToBuildYourCrm() {
  return (
    <section>
      <div className="flex flex-col gap-8 pb-[61px] pt-[14px] md:hidden lg:hidden">
        <h2 className=" font-opensans text-[32px] font-bold italic leading-[38px] tracking-[-0.5px] text-[#A0BFF8]">
          Pronto para construir o CRM dos seus sonhos?
        </h2>
        <ContactUsForm />
      </div>
      <div className="hidden gap-10 pb-[61px] pt-5 md:flex lg:flex md:flex-col lg:flex-row md:items-center md:justify-center lg:items-center lg:justify-center">
        <h2 className="lg:max-w-[700px] md:max-w-full md:px-7 lg:px-0 text-center font-opensans text-[4rem] font-bold leading-[58px] tracking-[1.2px] text-[#A0BFF8]">
          Pronto para construir o
          <span className="text-[5rem] text-base-100"> CRM dos seus sonhos?</span>
        </h2>
        <div className="max-w-[740px] py-[7px]">
          <ContactUsForm />
        </div>
      </div>
    </section>
  );
}
