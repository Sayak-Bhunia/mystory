"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Confess = () => {
  return (
    <div className="h-[500px] m-3">
      <div className="flex items-center justify-center h-full mt-10">
        <main className="w-[500px] p-4">
          <div className="border-indigo-600">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Are the Stories Protected?</AccordionTrigger>
              <AccordionContent>
                Yes, MyStory doesnt reveal the user detail publicly making it a
                full fledged place for expression and connection.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                How to Contribute as a Developer?
              </AccordionTrigger>
              <AccordionContent>
                MyStory is an opensource lead and welcome developer across the
                world. you can find more in its github repository and under
                readme file for more details.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                Is it safe for all to use MyStory?
              </AccordionTrigger>
              <AccordionContent>
                Yes, mystory doesn't allow vulgar words, hate speech and if any
                individual found breaking the community guideline, it might lead
                to account suspension.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Confess;
