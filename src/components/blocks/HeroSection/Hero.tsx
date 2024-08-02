import { ButtonLink } from '~/components/ui/Button/ButtonLink';

export function Hero() {
  return (
    <div className="mt-8 flex flex-col items-center justify-center gap-4 lg:gap-8">
      <h1 className="flex flex-col items-center justify-center font-opensans text-5xl font-bold italic leading-[3.5rem] tracking-tighter lg:text-[5.75rem] lg:leading-[5.5rem] lg:tracking-[-3.6px]">
        <span className="pl-6">A mágica do</span> relacionamento
      </h1>
      <p className="max-w-[34.25rem] text-center text-[1.375rem] font-normal leading-8 tracking-[-0.3px] text-base-500">
        <span className="lg:pl-6">Poderoso</span>, flexível e movido a dados,
        Attio traz o melhor CRM para as necessidades da sua empresa.
      </p>
      <ButtonLink href="#">Comece gratuitamente</ButtonLink>
    </div>
  );
}
