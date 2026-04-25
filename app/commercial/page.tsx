import { AudienceCtas } from "@/components/AudienceCtas";
import { PageIntro } from "@/components/PageIntro";
import { PageBannerImage } from "@/components/PageBannerImage";
import { ProjectImageStrip } from "@/components/ProjectImageStrip";
import projectsRaw from "@/data/projects.json";
import type { ProjectEntry } from "@/lib/project-types";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Commercial contractors",
  description:
    "Reliability, repeatability, schedule discipline, and documentation readiness for commercial scopes. Projects of any size.",
};

const projects = projectsRaw as ProjectEntry[];

export default function CommercialPage() {
  return (
    <>
      <PageIntro
        eyebrow="Commercial contractors"
        title="Reduce risk with a partner built for professional workflows."
      >
        Commercial work rewards partners who communicate early, document clearly, and protect the
        schedule. Craftmark supports commercial scopes on projects of any size—from targeted
        interiors to larger rollouts.
      </PageIntro>
      <PageBannerImage
        imageSrc={projects[8]?.image ?? "/images/colors/placeholder.svg"}
        imageAlt="Commercial project banner"
        title="Commercial interiors delivered with schedule discipline"
        subtitle="Documentation-ready process and repeatable field execution."
        variant="imageFirstMuted"
        textAlign="left"
        imagePosition="right center"
        frame="soft"
        layout="splitLeft"
        height="compact"
      />
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-xl font-semibold text-craftmark-navy">Where we focus</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-craftmark-muted">
              <li>Schedule discipline and coordination</li>
              <li>Repeatable quality across phases</li>
              <li>Documentation readiness</li>
              <li>Risk reduction through clear handoffs</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-craftmark-navy">Projects of any size</h2>
            <p className="mt-4 text-craftmark-muted">
              Tell us about drivers, milestones, and coordination points. We will respond with a
              practical path forward.
            </p>
            <AudienceCtas
              primaryHref="/contact?intent=commercial"
              primaryLabel="Start a commercial conversation"
              secondaryHref="/quote-request"
              secondaryLabel="Request Quote"
            />
          </div>
        </div>
      </section>
      <ProjectImageStrip
        projects={projects}
        title="Commercial install highlights"
        subtitle="Project photos from office and mixed-use scopes with tight schedules."
        category="Commercial"
        count={3}
        offset={0}
      />
    </>
  );
}
