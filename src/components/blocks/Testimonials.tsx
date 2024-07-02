import Image, { StaticImageData } from 'next/image';

interface TestimonialsProps {
  Avatar: StaticImageData;
  alt: string;
  description: string;
  descriptionDesktop?: string;
  name: string;
  nameDesktop?: string;
  role: string;
  roleDesktop?: string;
}

export function Testimonials({
  Avatar,
  alt,
  description,
  descriptionDesktop,
  name,
  nameDesktop,
  role,
  roleDesktop
}: TestimonialsProps) {
  return (
    <div className="flex flex-col items-start justify-start gap-6 lg:items-center">
      <Image src={Avatar} width={44} height={44} alt={alt} />
      <h3 className="text-lg font-normal leading-[1.625rem] tracking-tight text-base-600 lg:hidden">
        {description}
      </h3>
      <h3 className="hidden max-w-[38.125rem] text-[1.375rem] font-normal leading-8 tracking-[-0.3px] text-base-600 lg:block">
        {descriptionDesktop}
      </h3>
      <div className="flex flex-col gap-[2px] lg:hidden">
        <span className="text-sm font-normal leading-5 tracking-[-0.1px] text-base-500">
          {name}
        </span>
        <span className="text-sm font-normal leading-5 tracking-[-0.1px] text-base-400">
          {role}
        </span>
      </div>
      <div className="hidden flex-col gap-[2px] lg:flex">
        <span className="text-sm font-normal leading-5 tracking-[-0.1px] text-base-500">
          {nameDesktop}
        </span>
        <span className="text-sm font-normal leading-5 tracking-[-0.1px] text-base-400">
          {roleDesktop}
        </span>
      </div>
    </div>
  );
}
