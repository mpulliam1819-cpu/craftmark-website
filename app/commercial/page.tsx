import { AudienceCtas } from "@/components/AudienceCtas";
import { PageIntro } from "@/components/PageIntro";
import { PageBannerImage } from "@/components/PageBannerImage";
import { ProjectImageStrip } from "@/components/ProjectImageStrip";
import projectsRaw from "@/data/projects.json";
import type { ProjectEntry } from "@/lib/project-types";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Commercial",
  description:
    "Nationwide fabrication and shipping for commercial contractors, dealers, and fabricators. High-volume production discipline, repeatable quality, and accountable coordination.",
};

const projects = projectsRaw as ProjectEntry[];

export default function CommercialPage() {
  return (
    <>
      <PageIntro
        eyebrow="Commercial"
        eyebrowClassName="text-5xl font-bold italic tracking-tight text-craftmark-navy sm:text-6xl"
        title="Commercial"
        titleClassName="hidden"
        bodyClassName="mt-8 max-w-6xl text-xl leading-relaxed text-craftmark-muted sm:text-2xl"
      >
        <p className="text-xl font-semibold tracking-tight text-craftmark-text sm:text-2xl">
          Built for commercial scale. Trusted by professionals nationwide.
        </p>
        <p className="mt-4 leading-[1.8]">
          Craftmark provides large-scale fabrication capacity for commercial projects nationwide, with
          domestic cut-to-size production shipped in planned releases so material arrives as you need it
          instead of all at once—helping support stronger cash flow and cleaner site coordination. From
          commercial workspaces to architectural features in solid surface, natural stone, and quartz, our
          teams deliver repeatable quality with disciplined scheduling and accountable handoffs.
        </p>
      </PageIntro>
      <div className="lg:-mt-4 lg:mb-10">
        <PageBannerImage
          imageSrc="/images/commercial-fabrication-hero.png"
          imageAlt="Commercial fabrication floor and staged stone shipments for national programs"
          title="Fabrication and shipping built for national reach"
        subtitle="From regional builds to multi-site programs, our fabrication and logistics are designed for scale—delivering consistent quality, predictable throughput, and disciplined coordination from start to finish. The result is a partner that helps reduce complexity and support long-term operational success."
        contentClassName="mt-10 sm:mt-12"
        subtitleClassName="mt-5 max-w-6xl text-xl leading-relaxed text-craftmark-muted sm:text-2xl"
        imageShellClassName="mx-auto max-w-6xl lg:h-[34rem]"
          variant="imageFirstMuted"
          textAlign="left"
          imagePosition="center center"
          frame="soft"
          layout="contained"
        height="tall"
          containerClassName="max-w-7xl px-4 sm:px-6"
        />
      </div>
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-xl font-semibold text-craftmark-navy">
              A production partner contractors can rely on
            </h2>
            <p className="mt-3 pl-2 text-base font-semibold text-craftmark-text sm:text-lg">
              Why commercial partners choose Craftmark
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-7 text-craftmark-muted">
              <li>Nationwide fabrication and shipping support</li>
              <li>Proven high-volume shop with consistent output</li>
              <li>Reliable lead times and predictable production</li>
              <li>Clean handoffs and clear communication</li>
              <li>Scalable capacity for small projects and large programs alike</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-craftmark-navy">Trusted by other professionals</h2>
            <p className="mt-4 text-craftmark-muted">
              Kitchen & bath dealers and fabricators rely on Craftmark as a fabrication partner when volume,
              timelines, or specialization demand more capacity. Our role is simple: execute accurately,
              communicate clearly, and deliver on schedule.
            </p>
            <AudienceCtas
              primaryHref="/contact?intent=commercial"
              primaryLabel="Start a conversation"
              secondaryHref="/quote-request"
              secondaryLabel="Commercial pricing & partnership"
            />
          </div>
        </div>
      </section>
      <ProjectImageStrip
        projects={projects}
        title="Volume, repetition, national reach"
        subtitle="Multifamily turnover, coordinated commercial programs, and installs built for throughput—not one-off showcase work."
        highlightIds={["chestnut-multifamily-1", "camelot-commercial-2", "chestnut-multifamily-2"]}
        count={3}
        containerClassName="max-w-7xl px-4 sm:px-6 lg:px-6"
      />
    </>
  );
}
