import { AudienceCtas } from "@/components/AudienceCtas";
import { PageIntro } from "@/components/PageIntro";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meet the Team",
  description:
    "Meet the Craftmark team behind project coordination, fabrication quality, and professional installation execution.",
};

const teamRoles = [
  {
    title: "Project Coordination",
    body: "Schedules, sequencing, and communication that keep projects moving cleanly.",
  },
  {
    title: "Template & Fabrication",
    body: "Technical detail and production discipline to protect final fit and finish.",
  },
  {
    title: "Installation Teams",
    body: "Field execution focused on precision, site respect, and clean handoff.",
  },
];

export default function MeetTheTeamPage() {
  return (
    <>
      <PageIntro eyebrow="Meet the Team" title="People who care about the details.">
        Craftmark teams are organized around planning, production quality, and dependable field
        execution—so outcomes stay predictable from start to finish.
      </PageIntro>
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          {teamRoles.map((role) => (
            <article key={role.title} className="rounded-lg border border-craftmark-line bg-white p-6">
              <h2 className="text-lg font-semibold text-craftmark-navy">{role.title}</h2>
              <p className="mt-3 text-sm text-craftmark-muted">{role.body}</p>
            </article>
          ))}
        </div>
        <AudienceCtas primaryHref="/book-consult" primaryLabel="Book Consult" />
      </section>
    </>
  );
}
