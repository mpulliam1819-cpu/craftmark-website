import { AudienceCtas } from "@/components/AudienceCtas";
import { PageIntro } from "@/components/PageIntro";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Craftmark’s approach, standards, and commitment to professional surface fabrication and installation.",
};

export default function AboutUsPage() {
  return (
    <>
      <PageIntro eyebrow="About Us" title="Built on standards, not shortcuts.">
        Craftmark serves homeowners, builders, and commercial teams with a process-first approach to
        templating, fabrication, and installation. We focus on consistency, communication, and clean
        handoffs.
      </PageIntro>
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-xl font-semibold text-craftmark-navy">How we work</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-craftmark-muted">
              <li>Clear scope alignment before production</li>
              <li>Measured process from template to install</li>
              <li>Quality checks that protect finish and fit</li>
              <li>Professional communication with every stakeholder</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-craftmark-navy">Who we support</h2>
            <p className="mt-4 text-craftmark-muted">
              From one-room remodels to larger rolling programs, Craftmark scales with your project
              without changing the standards behind the work.
            </p>
            <AudienceCtas primaryHref="/contact" primaryLabel="Start a conversation" />
          </div>
        </div>
      </section>
    </>
  );
}
