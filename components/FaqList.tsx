import type { ReactNode } from "react";
import type { FAQItem } from "@/lib/faq-data";

export function FaqList({ items, footer }: { items: FAQItem[]; footer?: ReactNode }) {
  return (
    <div className="divide-y divide-craftmark-line rounded-lg border border-craftmark-line bg-white">
      {items.map((item) => (
        <details key={item.question} className="group px-4 py-4 sm:px-6">
          <summary className="cursor-pointer list-none font-semibold text-craftmark-text marker:hidden [&::-webkit-details-marker]:hidden">
            <span className="flex items-start justify-between gap-4">
              {item.question}
              <span className="text-craftmark-muted transition group-open:rotate-45">+</span>
            </span>
          </summary>
          <p className="mt-3 text-sm leading-relaxed text-craftmark-muted">{item.answer}</p>
        </details>
      ))}
      {footer ? (
        <div className="px-4 py-4 text-center sm:px-6 sm:py-5">
          {footer}
        </div>
      ) : null}
    </div>
  );
}
