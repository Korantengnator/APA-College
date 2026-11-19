import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import SectionHeading from "./SectionHeading";
import React from "react";

export interface Faq {
  question: string;
  answer: string;
}

export default function FaqSection({ faqs }: { faqs: Faq[] }) {
  if (faqs.length === 0) return null;
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="FAQ" title="Frequently Asked Questions" />
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((f, i) => (
            <AccordionItem key={f.question} value={`faq-${i}`}>
              <AccordionTrigger className="text-left text-lg font-semibold text-[#0D3B66]">
                {f.question}
              </AccordionTrigger>
              <AccordionContent className="text-base text-gray-700 leading-relaxed">
                {f.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
