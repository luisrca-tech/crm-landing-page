import Image, { StaticImageData } from "next/image";

interface FeedbacksProps {
  Avatar: StaticImageData;
  alt: string;
  description: string;
  name: string;
  role: string;
}

export function Feedbacks({ Avatar, alt, description, name, role }: FeedbacksProps) {
  return (
    <>
      <div className="flex flex-col items-start justify-start gap-6 mt-10">
        <Image src={Avatar} alt={alt} />
        <h3 className="text-lg font-normal leading-[1.625rem] tracking-tight text-base-600">
          {description}
        </h3>
      </div>
      <div className="flex flex-col gap-[2px]">
        <span className="text-sm font-normal leading-5 tracking-[-0.1px] text-base-500">
          {name}
        </span>
        <span className="text-sm font-normal leading-5 tracking-[-0.1px] text-base-400">
          {role}
        </span>
      </div>
    </>
  );
}
