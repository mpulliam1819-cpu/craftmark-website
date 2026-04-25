import { ProjectImageStrip } from "@/components/ProjectImageStrip";
import { PageBannerImage } from "@/components/PageBannerImage";
import projectsRaw from "@/data/projects.json";
import type { ProjectEntry } from "@/lib/project-types";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Showroom mode",
  description:
    "Large-type, visual-forward overview for showroom screens and sales conversations.",
};

const projects = projectsRaw as ProjectEntry[];

export default function ShowroomPage() {
  return (
    <div className="bg-craftmark-surface">
      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-8 sm:py-24">
        <p className="text-xl font-semibold text-craftmark-navy">Craftmark</p>
        <h1 className="mt-6 text-4xl font-semibold leading-tight text-craftmark-text sm:text-5xl lg:text-6xl">
          Who the pros use — now open to homeowners.
        </h1>
        <p className="mt-8 text-2xl text-craftmark-muted">
          Professional-grade surfaces. Projects of any size.
        </p>
      </section>
      <PageBannerImage
        imageSrc={projects[4]?.image ?? "/images/colors/placeholder.svg"}
        imageAlt="Showroom banner"
        title="Visual-first project highlights"
        subtitle="Showroom-ready imagery to support in-person design conversations."
        height="tall"
        variant="imageFirst"
        textAlign="center"
        imagePosition="center center"
        frame="soft"
        layout="fullBleed"
      />

      <section className="border-t border-craftmark-line bg-white px-4 py-16 sm:px-8 sm:py-20">
        <h2 className="text-3xl font-semibold text-craftmark-navy sm:text-4xl">What we build</h2>
        <p className="mt-6 max-w-3xl text-2xl leading-relaxed text-craftmark-text">
          Quartz, natural stone, solid surface, and custom bath surfaces—built to order and
          installed by professional teams.
        </p>
      </section>

      <section className="border-t border-craftmark-line bg-craftmark-surface px-4 py-16 sm:px-8 sm:py-20">
        <h2 className="text-3xl font-semibold text-craftmark-navy sm:text-4xl">Projects of any size</h2>
        <p className="mt-6 max-w-3xl text-2xl leading-relaxed text-craftmark-text">
          Single kitchens, custom homes, multi-unit programs, and commercial interiors—the same
          disciplined process.
        </p>
      </section>

      <section className="border-t border-craftmark-line bg-white px-4 py-16 sm:px-8 sm:py-20">
        <h2 className="text-3xl font-semibold text-craftmark-navy sm:text-4xl">Book a consult</h2>
        <p className="mt-6 max-w-3xl text-2xl text-craftmark-muted">
          Ready when you are. Keep it simple on the floor: book a consultation or request a quote.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/book-consult"
            className="inline-flex items-center justify-center rounded-md bg-craftmark-navy px-8 py-4 text-lg font-semibold text-white hover:bg-craftmark-navyLight"
          >
            Book Consult
          </Link>
          <Link
            href="/quote-request"
            className="inline-flex items-center justify-center rounded-md border-2 border-craftmark-navy px-8 py-4 text-lg font-semibold text-craftmark-navy hover:bg-craftmark-surface"
          >
            Request Quote
          </Link>
        </div>
      </section>
      <ProjectImageStrip
        projects={projects}
        title="Showroom project reel"
        subtitle="Recent installations you can reference during in-person consultations."
        count={3}
        offset={6}
      />
    </div>
  );
}
