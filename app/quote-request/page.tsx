import { QuoteRequestForm } from "@/components/forms/QuoteRequestForm";
import { PageIntro } from "@/components/PageIntro";
import { ProjectImageStrip } from "@/components/ProjectImageStrip";
import projectsRaw from "@/data/projects.json";
import type { ProjectEntry } from "@/lib/project-types";
import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Request a quote",
  description:
    "Request a quote for quartz, stone, or solid surface—lead inquiry only, no online pricing.",
};

const projects = projectsRaw as ProjectEntry[];

export default function QuoteRequestPage() {
  return (
    <>
      <PageIntro eyebrow="Quote" title="Request a quote">
        Tell us about your scope and timing. We will respond with next steps and what we need to
        move forward—without publishing pricing online. Craftmark works on projects of any size.
      </PageIntro>
      <section className="mx-auto max-w-[100rem] px-4 py-12 sm:px-6">
        <Suspense fallback={<p className="text-sm text-craftmark-muted">Loading form…</p>}>
          <QuoteRequestForm />
        </Suspense>
      </section>
      <ProjectImageStrip
        projects={projects}
        title="Scope examples"
        subtitle="Comparable project snapshots to help communicate your scope and finish direction."
        count={3}
        offset={5}
      />
    </>
  );
}
