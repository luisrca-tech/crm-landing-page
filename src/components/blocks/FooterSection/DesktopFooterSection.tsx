import Link from 'next/link';
import { FooterMenuOptions } from '~/constants/FooterMenuOptions';

export function DesktopFooterSection() {
  return (
    <div className="hidden lg:flex">
      <div className="flex w-full justify-between">
        {FooterMenuOptions.map((item) => {
          return (
            <div
              key={item.value}
              className="flex max-w-[189px] flex-col gap-3 text-sm font-normal"
            >
              <h4 className=" text-base-300">{item.title}</h4>
              <div className="flex flex-col gap-[6px]">
                {item.contents.map((content) => {
                  return (
                    <span className="text-base-400 hover:text-base-300">
                      {content}
                    </span>
                  );
                })}
              </div>
            </div>
          );
        })}
        <div className="flex flex-col gap-4">
          <span className="text-start text-base font-medium text-base-300">
            Pronto para construir?
          </span>
          <Link
            className="flex h-12 w-[296px] items-center justify-center rounded-xl bg-base-500 px-4 py-3 text-base text-base-100 hover:opacity-70"
            href="#"
          >
            Comece gratuitamente
          </Link>
        </div>
      </div>
    </div>
  );
}
