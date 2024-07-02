interface HeaderSectionProps {
  title: string;
  description: string;
}

export function HeaderSection({ title, description }: HeaderSectionProps) {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="flex font-opensans text-[2rem] font-bold italic leading-[2.375rem] tracking-[-0.5px] lg:max-w-[25rem] lg:text-[3.25rem] lg:leading-[3.625rem] lg:tracking-[-1.2px]">
        {title}
      </h1>
      <p className="text-lg font-normal leading-[1.625rem] tracking-[-0.2px] text-base-500 lg:max-w-[31.75rem] lg:text-[1.375rem] lg:leading-8 lg:tracking-[-0.3px]">
        {description}
      </p>
    </div>
  );
}
