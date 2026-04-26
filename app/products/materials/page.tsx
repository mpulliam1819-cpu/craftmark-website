import { PageIntro } from "@/components/PageIntro";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Materials",
  description:
    "Compare quartz, natural stone, and solid surface for kitchens, baths, and commercial interiors, with practical selection guidance from Craftmark.",
};

const materialCards = [
  {
    title: "Quartz",
    body: "Low-maintenance performance with broad color consistency, ideal for high-use kitchens and schedule-sensitive installs.",
  },
  {
    title: "Natural stone",
    body: "Unique movement and character with natural variation. Great when design calls for one-of-a-kind visual depth.",
  },
  {
    title: "Solid surface",
    body: "Seam-forward fabrication and integrated detailing for commercial workspaces, healthcare, and clean-line applications.",
  },
] as const;

const selectionFactors = [
  "Application type (kitchen, bath, workspace, feature wall)",
  "Traffic level and maintenance expectations",
  "Budget range and lead-time requirements",
  "Color consistency vs. natural variation preferences",
  "Edge profile, sink integration, and seam planning",
] as const;

export default function ProductsMaterialsPage() {
  return (
    <>
      <PageIntro eyebrow="Products" title="Materials">
        Material selection affects performance, maintenance, lead times, and final visual outcome.
        Craftmark helps you choose the right surface for the scope, then aligns fabrication and
        installation details so expectations and field execution stay in sync.
      </PageIntro>

      <section className="border-t border-craftmark-line bg-craftmark-surface">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <div className="grid gap-6 md:grid-cols-3">
            {materialCards.map((card) => (
              <article
                key={card.title}
                className="rounded-lg border border-craftmark-line bg-white p-6 shadow-sm"
              >
                <h2 className="text-xl font-semibold text-craftmark-navy">{card.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-craftmark-muted">{card.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-craftmark-line bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <h2 className="text-2xl font-semibold text-craftmark-text">What to consider before you choose</h2>
          <ul className="mt-6 list-disc space-y-2 pl-5 text-craftmark-muted">
            {selectionFactors.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-craftmark-line bg-craftmark-surface">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <p className="text-sm text-craftmark-muted">
            <Link href="/products" className="font-semibold text-craftmark-navy hover:text-craftmark-navyLight">
              Back to Products
            </Link>
            {" · "}
            <Link href="/colors" className="font-semibold text-craftmark-navy hover:text-craftmark-navyLight">
              Color Explorer
            </Link>
            {" · "}
            <Link href="/quote-request" className="font-semibold text-craftmark-navy hover:text-craftmark-navyLight">
              Request a quote
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
