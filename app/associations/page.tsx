import { PageIntro } from "@/components/PageIntro";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Associations",
  description:
    "Professional and industry associations that inform Craftmark standards and long-term project quality.",
};

const associations = [
  {
    name: "Builder and Trade Partnerships",
    note: "Active working relationships with local builders, designers, and specialty trades.",
  },
  {
    name: "Material Vendor Networks",
    note: "Consistent sourcing partnerships that support quality and schedule predictability.",
  },
  {
    name: "Regional Industry Groups",
    note: "Ongoing engagement with standards and best practices relevant to fabrication and installation.",
  },
];

export default function AssociationsPage() {
  return (
    <>
      <PageIntro eyebrow="Associations" title="Connected to the standards that matter.">
        Craftmark values industry alignment and strong partnerships that improve quality outcomes for
        homeowners, builders, and commercial teams.
      </PageIntro>
      <section className="mx-auto max-w-[80rem] px-4 py-14 sm:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          {associations.map((association) => (
            <article
              key={association.name}
              className="rounded-lg border border-craftmark-line bg-white p-6"
            >
              <h2 className="text-lg font-semibold text-craftmark-navy">{association.name}</h2>
              <p className="mt-3 text-sm text-craftmark-muted">{association.note}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

