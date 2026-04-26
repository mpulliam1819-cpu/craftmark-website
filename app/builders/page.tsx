import { AudienceCtas } from "@/components/AudienceCtas";
import { BuildersWhyGraphic } from "@/components/BuildersWhyGraphic";
import { PageIntro } from "@/components/PageIntro";
import { PageBannerImage } from "@/components/PageBannerImage";
import { ProjectImageStrip } from "@/components/ProjectImageStrip";
import projectsRaw from "@/data/projects.json";
import type { ProjectEntry } from "@/lib/project-types";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Builders",
  description:
    "Craftmark supports production homebuilding with repeatable fabrication, disciplined scheduling, and accountable handoffs—from custom homes through full community production.",
};

const projects = projectsRaw as ProjectEntry[];

export default function BuildersPage() {
  return (
    <>
      <PageIntro title="Builders" titleClassName="text-4xl sm:text-5xl">
        <p className="text-xl font-semibold tracking-tight text-craftmark-text sm:text-2xl">
          Built for builder timelines. Trusted for builder standards.
        </p>
        <p className="mt-6">
          For nearly half a century, Craftmark has been part of the production homebuilding supply chain.
          We don&apos;t just understand our business — we understand how builders operate, because we&apos;ve
          grown alongside the industry.
        </p>
        <p className="mt-4">
          From single custom homes to full community production, builders rely on Craftmark for repeatable
          fabrication, disciplined scheduling, and accountable handoffs. Our industry-leading processes are
          designed to protect timelines, maintain finish consistency, and scale smoothly as projects grow.
        </p>
        <p className="mt-4">
          This experience allows us to complete projects of any size on time, precisely, and without
          disruption to downstream trades — exactly what today&apos;s builders demand.
        </p>
      </PageIntro>
      <PageBannerImage
        imageSrc={
          projects.find((p) => p.id === "camelot-commercial-1")?.image ??
          "/images/colors/placeholder.svg"
        }
        imageAlt="Coordinated kitchen installation on a production builder schedule"
        title="Predictable production for real-world builder schedules"
        subtitle="From pre-construction planning through final install, our teams execute consistently, helping builders protect closing dates and reduce coordination friction."
        titleClassName="text-2xl font-semibold tracking-tight text-craftmark-text sm:text-3xl lg:text-4xl"
        subtitleClassName="text-base leading-relaxed text-craftmark-muted sm:text-lg lg:text-xl"
        variant="imageFirstMuted"
        textAlign="center"
        imagePosition="center center"
        frame="pill"
        layout="contained"
        height="tall"
      />
      <BuildersWhyGraphic />
      <section className="mx-auto max-w-[100rem] px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-craftmark-navy sm:text-3xl">
              Why builders rely on Craftmark
            </h2>
            <ul className="mt-5 list-disc space-y-3 pl-5 text-base leading-relaxed text-craftmark-muted sm:text-lg">
              <li>Scheduling reliability that protects closing timelines</li>
              <li>Repeatable quality from first lot through final phase</li>
              <li>Clear communication and accountable field coordination</li>
              <li>Scalable capacity for custom, production, and mixed pipelines</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-craftmark-navy sm:text-3xl">
              Execution built for scale
            </h2>
            <p className="mt-5 text-base leading-relaxed text-craftmark-muted sm:text-lg">
              Our process aligns to your cadence, site readiness, and superintendent workflows, keeping
              installations coordinated and quality consistent across every handoff.
            </p>
            <AudienceCtas
              primaryHref="/contact"
              primaryLabel="Start a conversation"
              secondaryHref="/quote-request"
              secondaryLabel="Request a quote"
            />
          </div>
        </div>
      </section>
      <ProjectImageStrip
        projects={projects}
        title="Across scopes and schedules"
        subtitle="Kitchen and bath installs from production runs to multifamily turnover—consistent execution, coordinated field work."
        highlightIds={["brookmont-kitchen-1", "chestnut-multifamily-1", "oxford-custom-2"]}
        count={3}
      />
    </>
  );
}
