import { PageIntro } from "@/components/PageIntro";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Care and cleaning guides, disclaimers, prep and instruction sheets, what to expect, and material selection help—downloadable documents from Craftmark.",
};

const resourceGroups = [
  {
    id: "care-cleaning",
    title: "Care & cleaning",
    description:
      "How to protect finishes, daily cleaning, approved products, and what to avoid so surfaces perform over the long term.",
  },
  {
    id: "disclaimers",
    title: "Disclaimers",
    description:
      "Scope, variation, and performance notes written in plain language so expectations stay aligned before work starts.",
  },
  {
    id: "prep-instructions",
    title: "Prep & instruction guides",
    description:
      "Cabinet and site readiness, access, and step-by-step notes for homeowners and trade partners before measure and install.",
  },
  {
    id: "what-to-expect",
    title: "What to expect",
    description:
      "Typical timelines, visit cadence, and how fabrication and install milestones line up from quote through punch.",
  },
  {
    id: "material-selection",
    title: "Choosing materials",
    description:
      "High-level comparisons and selection prompts—not a substitute for samples and shop consult, but a useful starting point.",
  },
] as const;

export default function ResourcesPage() {
  return (
    <>
      <PageIntro eyebrow="Resources" title="Documents, guides, and straight answers.">
        This library is where we publish care sheets, disclaimers, prep checklists, and other
        reference material in one place. Use it to prepare jobs, set expectations, and support
        customers after install. PDFs and updates are added as they are finalized—if you need
        something you do not see here, ask your Craftmark contact.
      </PageIntro>
      <section className="mx-auto max-w-[80rem] px-4 py-14 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {resourceGroups.map((group) => (
            <article
              key={group.id}
              id={group.id}
              className="scroll-mt-24 rounded-lg border border-craftmark-line bg-white p-6 shadow-sm"
            >
              <h2 className="text-lg font-semibold text-craftmark-navy">{group.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-craftmark-muted">{group.description}</p>
              <p className="mt-4 text-xs font-medium uppercase tracking-wide text-craftmark-muted">
                Downloads coming soon
              </p>
            </article>
          ))}
        </div>
        <div className="mt-12 rounded-lg border border-craftmark-line bg-craftmark-surface p-6 sm:p-8">
          <p className="text-sm text-craftmark-muted">
            Need a specific warranty excerpt, submittal language, or a branded version for your
            program?{" "}
            <Link href="/contact" className="font-semibold text-craftmark-navy hover:text-craftmark-navyLight">
              Contact Craftmark
            </Link>{" "}
            and we will route the request to the right team.
          </p>
        </div>
      </section>
    </>
  );
}

