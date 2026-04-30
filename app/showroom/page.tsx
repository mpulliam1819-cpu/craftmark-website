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
      <section className="mx-auto max-w-[80rem] px-4 py-16 sm:px-8 sm:py-24">
        <p className="text-xl font-semibold text-craftmark-navy">Craftmark</p>
        <h1 className="mt-6 text-4xl font-semibold leading-tight text-craftmark-text sm:text-5xl lg:text-6xl">
          Professional fabrication and installation at any scale.
        </h1>
        <p className="mt-8 text-2xl text-craftmark-muted">
          Homeowners, builders, commercial teams, and partners rely on the same disciplined process.
        </p>
      </section>
      <PageBannerImage
        imageSrc={projects[4]?.image ?? "/images/colors/placeholder.svg"}
        imageAlt="Showroom banner"
        title="Visual-first project highlights"
        subtitle="Showroom-ready visuals that reflect real field execution across residential and commercial scopes."
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
          Quartz, natural stone, and solid surface applications for kitchens, baths, commercial
          workspaces, and architectural features.
        </p>
      </section>
      <PageBannerImage
        imageSrc={projects[0]?.image ?? "/images/colors/placeholder.svg"}
        imageAlt="Showroom visual insert one"
        height="tall"
        variant="imageFirst"
        textAlign="center"
        imagePosition="center center"
        frame="soft"
        layout="fullBleed"
      />

      <section className="border-t border-craftmark-line bg-craftmark-surface px-4 py-16 sm:px-8 sm:py-20">
        <h2 className="text-3xl font-semibold text-craftmark-navy sm:text-4xl">Projects of any size</h2>
        <p className="mt-6 max-w-3xl text-2xl leading-relaxed text-craftmark-text">
          From single-room updates to production communities and national commercial programs, we
          scale without sacrificing consistency.
        </p>
      </section>
      <PageBannerImage
        imageSrc={projects[10]?.image ?? "/images/colors/placeholder.svg"}
        imageAlt="Showroom visual insert two"
        height="tall"
        variant="imageFirst"
        textAlign="center"
        imagePosition="center center"
        frame="soft"
        layout="fullBleed"
      />

      <section className="border-t border-craftmark-line bg-white px-4 py-16 sm:px-8 sm:py-20">
        <h2 className="text-3xl font-semibold text-craftmark-navy sm:text-4xl">Book a consult</h2>
        <p className="mt-6 max-w-3xl text-2xl text-craftmark-muted">
          Keep next steps simple on the floor: book a consultation or request a quote.
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
      <PageBannerImage
        imageSrc={projects[8]?.image ?? "/images/colors/placeholder.svg"}
        imageAlt="Showroom visual insert three"
        height="tall"
        variant="imageFirst"
        textAlign="center"
        imagePosition="center center"
        frame="soft"
        layout="fullBleed"
      />
      <section className="border-t border-craftmark-line bg-craftmark-surface px-4 py-12 sm:px-8 sm:py-16">
        <h2 className="text-3xl font-semibold text-craftmark-navy sm:text-4xl">More project visuals</h2>
        <p className="mt-4 max-w-3xl text-xl text-craftmark-muted sm:text-2xl">
          Scroll through additional fabrication, install, and closeout visuals before the detailed project cards.
        </p>
        <div className="mt-8 overflow-x-auto pb-2">
          <div className="flex w-max gap-4">
            {[...projects, ...projects].map((project, index) => (
              <figure
                key={`${project.id}-showroom-scroll-${index}`}
                className="h-52 w-80 shrink-0 overflow-hidden rounded-xl border border-craftmark-line bg-white"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.image}
                  alt={project.caption}
                  className="h-full w-full object-cover"
                  style={project.imagePosition ? { objectPosition: project.imagePosition } : undefined}
                />
              </figure>
            ))}
          </div>
        </div>
      </section>
      <ProjectImageStrip
        projects={projects}
        title="Showroom project reel"
        subtitle="Recent installations you can reference during in-person consultations and partner conversations."
        count={6}
        offset={6}
      />
      <ProjectImageStrip
        projects={projects}
        title="Additional installation views"
        subtitle="More kitchens, baths, multifamily, healthcare, and commercial examples for client walkthroughs."
        count={6}
        offset={0}
      />
    </div>
  );
}
