import { PageIntro } from "@/components/PageIntro";
import { PageBannerImage } from "@/components/PageBannerImage";
import { ProjectImageStrip } from "@/components/ProjectImageStrip";
import projectsRaw from "@/data/projects.json";
import type { ProjectEntry } from "@/lib/project-types";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Process",
  description:
    "How Craftmark moves from conversation to templating, fabrication, and professional installation.",
};

const projects = projectsRaw as ProjectEntry[];

const steps = [
  {
    title: "Conversation",
    body: "We align on goals, scope, timing, and what good looks like for your project.",
  },
  {
    title: "Selection support",
    body: "Materials and details are chosen for performance, layout, and long-term satisfaction.",
  },
  {
    title: "Templating",
    body: "We capture real-site conditions after the right prep is in place.",
  },
  {
    title: "Fabrication",
    body: "Custom-built for your space—consistent quality whether the job is large or small.",
  },
  {
    title: "Professional installation",
    body: "Trained teams focused on fit, finish, and a clean handoff.",
  },
];

export default function ProcessPage() {
  return (
    <>
      <PageIntro eyebrow="Process" title="Clear steps. Honest timelines. Professional execution.">
        Craftmark is process-driven because surprises are expensive. The same disciplined approach
        applies across homeowners, builders, and commercial work—on projects of any size.
      </PageIntro>
      <PageBannerImage
        imageSrc={projects[9]?.image ?? "/images/colors/placeholder.svg"}
        imageAlt="Process banner"
        title="A process designed to reduce surprises"
        subtitle="From selection through install, each phase is built around clarity and consistency."
        variant="imageFirstMuted"
        textAlign="center"
        imagePosition="center bottom"
        frame="pill"
        layout="contained"
        height="compact"
      />
      <section className="mx-auto max-w-[100rem] px-4 py-14 sm:px-6">
        <ol className="space-y-8 border-l border-craftmark-line pl-7 sm:pl-8">
          {steps.map((s, i) => (
            <li key={s.title} className="relative pb-1">
              <span className="absolute -left-[40px] top-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-craftmark-navy text-sm font-semibold text-white sm:-left-[44px]">
                {i + 1}
              </span>
              <h2 className="text-lg font-semibold leading-tight text-craftmark-navy">{s.title}</h2>
              <p className="mt-2 leading-relaxed text-craftmark-muted">{s.body}</p>
            </li>
          ))}
        </ol>
      </section>
      <ProjectImageStrip
        projects={projects}
        title="From template to install"
        subtitle="Snapshots from completed jobs that follow the same disciplined process."
        count={3}
        offset={3}
      />
    </>
  );
}
