import { AudienceCtas } from "@/components/AudienceCtas";
import { PageIntro } from "@/components/PageIntro";
import { PageBannerImage } from "@/components/PageBannerImage";
import { ProjectImageStrip } from "@/components/ProjectImageStrip";
import projectsRaw from "@/data/projects.json";
import type { ProjectEntry } from "@/lib/project-types";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Builders",
  description:
    "Volume capability, repeatability, and scheduling reliability. From one project to hundreds—Craftmark scales with you.",
};

const projects = projectsRaw as ProjectEntry[];

export default function BuildersPage() {
  return (
    <>
      <PageIntro eyebrow="Builders" title="From one project to hundreds — Craftmark scales with you.">
        Builders choose partners that protect schedule and deliver repeatable quality. Craftmark is
        built for volume, documentation, and professional install—on projects of any size.
      </PageIntro>
      <PageBannerImage
        imageSrc={projects[6]?.image ?? "/images/colors/placeholder.svg"}
        imageAlt="Builder project banner"
        title="Reliable production for repeating schedules"
        subtitle="From custom homes to program work, every install follows the same standards."
        variant="imageFirstMuted"
        textAlign="right"
        imagePosition="center center"
        frame="pill"
        layout="splitRight"
        height="tall"
      />
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-xl font-semibold text-craftmark-navy">Built for your job sites</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-craftmark-muted">
              <li>Volume capability without sacrificing standards</li>
              <li>Repeatable fabrication and install rhythm</li>
              <li>Scheduling reliability your supers can trust</li>
              <li>Single home through full developments</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-craftmark-navy">Projects of any size</h2>
            <p className="mt-4 text-craftmark-muted">
              Custom homes, production communities, and mixed scopes—tell us your cadence and
              constraints. We align process to the way you build.
            </p>
            <AudienceCtas
              primaryHref="/contact"
              primaryLabel="Start a conversation"
              secondaryHref="/quote-request"
              secondaryLabel="Request Quote"
            />
          </div>
        </div>
      </section>
      <ProjectImageStrip
        projects={projects}
        title="Builder program highlights"
        subtitle="Examples from repeatable schedules and multi-home workflows."
        category="Custom Home"
        count={3}
        offset={1}
      />
    </>
  );
}
