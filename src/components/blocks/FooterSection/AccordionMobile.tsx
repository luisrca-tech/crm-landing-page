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
      <Accordion className="flex flex-col gap-3" type="single" collapsible>
        {FooterMenuOptions.map((item) => {
          return (
            <AccordionItem
              className="rounded-lg border border-base-dark-600 bg-base-dark-600 px-5 text-base font-medium text-[#979CA1]"
              value={item.value}
              key={item.value}
            >
              <AccordionTrigger>{item.title}</AccordionTrigger>
              {item.contents.map((content) => {
                return (
                  <AccordionContent
                    className=" text-center text-base text-base-400"
                    key={content}
                  >
                    <Link href="#">{content}</Link>
                  </AccordionContent>
                );
              })}
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
}
