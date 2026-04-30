import { AudienceCtas } from "@/components/AudienceCtas";
import { PageIntro } from "@/components/PageIntro";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Partners",
  description:
    "Craftmark partners with kitchen & bath dealers, builders, and fabricators for dependable fabrication, scheduling discipline, and accountable execution.",
};

export default function ProductsPartnersPage() {
  return (
    <>
      <PageIntro eyebrow="Products" title="Partners">
        Craftmark supplies professional-grade surfaces through relationships built on clear scope,
        repeatable quality, and schedules you can plan around. Whether you are a dealer supporting
        homeowners, a builder running production or custom work, or a fabricator needing overflow
        capacity, we align our shop and field teams to your workflow.
      </PageIntro>
      <section className="mx-auto max-w-[80rem] px-4 py-14 sm:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              title: "Dealers & showrooms",
              body: "Reliable fabrication and install support so your customers see fewer delays and cleaner handoffs—from templating through punch.",
            },
            {
              title: "Builders & developers",
              body: "Volume-ready production with documentation discipline and coordination that respects superintendent schedules and closing dates.",
            },
            {
              title: "Fabricators & trade partners",
              body: "Additional capacity when your backlog spikes, with consistent standards and communication so your brand promise stays intact.",
            },
          ].map((card) => (
            <div key={card.title} className="rounded-lg border border-craftmark-line bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-craftmark-navy">{card.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-craftmark-muted">{card.body}</p>
            </div>
          ))}
        </div>
        <p className="mt-10 max-w-3xl text-sm text-craftmark-muted">
          Tell us how you sell and how your sites run—we will map a practical path for quotes,
          samples, and production. Projects of any size.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/products"
            className="inline-flex rounded-md border border-craftmark-line px-5 py-3 text-sm font-semibold text-craftmark-text hover:bg-craftmark-surface"
          >
            Back to Products
          </Link>
        </div>
        <div className="mt-10 border-t border-craftmark-line pt-10">
          <AudienceCtas
            primaryHref="/contact"
            primaryLabel="Start a conversation"
            secondaryHref="/quote-request"
            secondaryLabel="Request a quote"
          />
        </div>
      </section>
    </>
  );
}

