import Link from 'next/link';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '~/components/ui/accordion';
import { FooterMenuOptions } from '~/constants/FooterMenuOptions';

export function AccordionMobile() {
  return (
    <div className="lg:hidden">
      <Accordion type="single" collapsible>
        <nav>
          <ul className="flex flex-col gap-3">
            {FooterMenuOptions.map((item) => {
              return (
                <li
                  key={item.value}
                  className="rounded-lg border border-base-dark-600 bg-base-dark-600 px-5 text-base font-medium text-[#979CA1]"
                >
                  <AccordionItem value={item.value} className="border-none">
                    <AccordionTrigger>
                      {item.title}
                    </AccordionTrigger>
                    {item.contents.map((content) => {
                      return (
                        <AccordionContent
                          className="text-center text-base text-base-400"
                          key={content}
                        >
                          <Link href="#">{content}</Link>
                        </AccordionContent>
                      );
                    })}
                  </AccordionItem>
                </li>
              );
            })}
          </ul>
        </nav>
      </Accordion>
    </div>
  );
}
