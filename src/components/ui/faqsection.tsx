"use client";

import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { HelpCircle, Sparkles } from "lucide-react";

export type FAQItem = {
  question: string;
  answer: string;
};

export interface FAQSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  buttonLabel?: string;
  onButtonClick?: () => void;
  faqsLeft: FAQItem[];
  faqsRight: FAQItem[];
  className?: string;
}

export function FAQSection({
  title = "Frequently Asked Questions",
  subtitle = "Everything You Need to Know",
  description = "Get clear, immediate answers to questions about our engineering architecture, timelines, ERP integrations, and deployment methodology.",
  buttonLabel = "Schedule Strategy Session →",
  onButtonClick,
  faqsLeft,
  faqsRight,
  className,
}: FAQSectionProps) {
  return (
    <section id="faq" className={cn("w-full max-w-6xl mx-auto py-20 px-4 sm:px-6 lg:px-8", className)}>
      {/* Header */}
      <div className="text-center mb-12 space-y-3">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3.5 py-1 text-xs font-mono font-semibold text-primary">
          <HelpCircle className="size-3.5" /> {subtitle}
        </div>
        <h2 className="font-space text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
          {title}
        </h2>
        <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
        <div className="pt-2">
          <Button
            variant="default"
            className="rounded-full px-6 py-2.5 font-semibold shadow-md shadow-primary/20 hover:shadow-primary/30 transition-all cursor-pointer"
            onClick={onButtonClick}
          >
            {buttonLabel}
          </Button>
        </div>
      </div>

      {/* FAQs 2-Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 text-left">
        {[faqsLeft, faqsRight].map((faqColumn, columnIndex) => (
          <Accordion
            key={columnIndex}
            type="single"
            collapsible
            className="space-y-3"
          >
            {faqColumn.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${columnIndex}-${i}`}
                className="rounded-2xl border border-border/70 bg-card/60 px-5 py-1 backdrop-blur-sm transition-colors hover:bg-card/90"
              >
                <AccordionTrigger className="text-sm sm:text-base font-semibold text-foreground hover:no-underline hover:text-primary transition-colors py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed pt-1 pb-4">
                  <div className="min-h-[40px] transition-all duration-200 ease-in-out">
                    {faq.answer}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        ))}
      </div>
    </section>
  );
}

export default FAQSection;
