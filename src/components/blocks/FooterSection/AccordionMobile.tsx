import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '~/components/ui/accordion';
import { AccordionsItems } from '~/constants/AccordionsItems';

export function AccordionMobile() {
  return (
    <div className="lg:hidden">
      <Accordion className="flex flex-col gap-3" type="single" collapsible>
        {AccordionsItems.map((item) => {
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
                    {content}
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
