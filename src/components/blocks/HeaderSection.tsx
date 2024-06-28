interface HeaderSectionProps {
  title: string;
  description: string;
}
export function HeaderSection({ title, description }: HeaderSectionProps) {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="font-opensans text-[2rem] font-bold italic leading-[2.375rem] tracking-tighter">
        {title}
      </h1>
      <p className="text-start text-lg font-normal leading-[1.625rem] tracking-tight text-base-500">
        {description}
      </p>
    </div>
  );
}
