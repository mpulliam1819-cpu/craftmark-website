import { FaqList } from "@/components/FaqList";
import { JsonLd } from "@/components/JsonLd";
import { FAQ_ITEMS } from "@/lib/faq-data";
import { faqPageJsonLd } from "@/lib/faq-jsonld";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers about timelines, materials, seams, service area, quoting, and projects of any size—without online pricing.",
};

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqPageJsonLd()} />
      <section className="border-b border-craftmark-line bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <h1 className="text-3xl font-semibold tracking-tight text-craftmark-text sm:text-4xl">
            Frequently asked questions
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-craftmark-muted">
            Practical answers for homeowners, builders, and commercial contractors—including how we
            think about timelines, scope, and projects of any size.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="max-w-3xl">
          <FaqList items={FAQ_ITEMS} />
        </div>
      </section>
    </>
  );
}
