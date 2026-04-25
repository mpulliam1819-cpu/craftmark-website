import { FaqList } from "@/components/FaqList";
import { JsonLd } from "@/components/JsonLd";
import { PageBannerImage } from "@/components/PageBannerImage";
import { ProjectGallery } from "@/components/ProjectGallery";
import type { ProjectEntry } from "@/lib/project-types";
import { HOME_FAQ_PREVIEW } from "@/lib/faq-data";
import { faqPageJsonLd } from "@/lib/faq-jsonld";
import { SITE } from "@/lib/site";
import projectsRaw from "@/data/projects.json";
import Link from "next/link";

const projects = projectsRaw as ProjectEntry[];

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqPageJsonLd()} />
      <section className="border-b border-craftmark-line bg-craftmark-surface">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <p className="text-sm font-semibold uppercase tracking-wide text-craftmark-navy">
            {SITE.tagline}
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-craftmark-text sm:text-5xl">
            The countertops the pros use — now open to homeowners.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-craftmark-muted">
            Craftmark serves homeowners, builders, commercial contractors, and large projects. We
            work on projects of any size—from a single kitchen refresh to multi-unit developments—
            with the same professional standards.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="/homeowners"
              className="inline-flex items-center justify-center rounded-md bg-craftmark-navy px-6 py-3 text-sm font-semibold text-white hover:bg-craftmark-navyLight"
            >
              For Homeowners
            </Link>
            <Link
              href="/builders"
              className="inline-flex items-center justify-center rounded-md bg-craftmark-navy px-6 py-3 text-sm font-semibold text-white hover:bg-craftmark-navyLight"
            >
              For Builders
            </Link>
            <Link
              href="/commercial"
              className="inline-flex items-center justify-center rounded-md bg-craftmark-navy px-6 py-3 text-sm font-semibold text-white hover:bg-craftmark-navyLight"
            >
              For Commercial Contractors
            </Link>
          </div>
          <p className="mt-10 text-sm font-medium text-craftmark-text">
            Trusted since {SITE.foundingDate} · Custom-built · Projects of any size
          </p>
        </div>
      </section>
      <PageBannerImage
        imageSrc={projects[0]?.image ?? "/images/colors/placeholder.svg"}
        imageAlt="Completed project banner"
        title="Craftsmanship that stands out at first glance"
        subtitle="A signature look from completed kitchen, bath, and whole-home projects."
        height="hero"
        variant="imageFirst"
        textAlign="center"
        imagePosition="center"
        frame="soft"
        layout="wide"
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="rounded-lg border border-craftmark-line bg-white p-6">
            <h2 className="text-lg font-semibold text-craftmark-navy">Homeowners</h2>
            <p className="mt-2 text-sm text-craftmark-muted">
              Kitchen and bath remodels with professional install and fewer surprises.
            </p>
            <Link href="/homeowners" className="mt-4 inline-block text-sm font-semibold text-craftmark-navyLight hover:underline">
              Learn more
            </Link>
          </div>
          <div className="rounded-lg border border-craftmark-line bg-white p-6">
            <h2 className="text-lg font-semibold text-craftmark-navy">Builders</h2>
            <p className="mt-2 text-sm text-craftmark-muted">
              Repeatability, scheduling reliability, and scale from one home to hundreds.
            </p>
            <Link href="/builders" className="mt-4 inline-block text-sm font-semibold text-craftmark-navyLight hover:underline">
              Learn more
            </Link>
          </div>
          <div className="rounded-lg border border-craftmark-line bg-white p-6">
            <h2 className="text-lg font-semibold text-craftmark-navy">Commercial</h2>
            <p className="mt-2 text-sm text-craftmark-muted">
              Documentation readiness, schedule discipline, and risk reduction.
            </p>
            <Link href="/commercial" className="mt-4 inline-block text-sm font-semibold text-craftmark-navyLight hover:underline">
              Learn more
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-craftmark-line bg-craftmark-surface">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <h2 className="text-2xl font-semibold text-craftmark-text">Recent completed projects</h2>
              <p className="mt-2 max-w-2xl text-craftmark-muted">
                Browse recent installations across kitchens, baths, custom homes, and commercial spaces.
              </p>
            </div>
          </div>
          <div className="mt-8">
            <ProjectGallery
              projects={projects}
              showFilters={false}
              limit={6}
              ctaHref="/projects"
              ctaLabel="View all projects"
            />
          </div>
        </div>
      </section>

      <section className="border-t border-craftmark-line bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <h2 className="text-2xl font-semibold text-craftmark-text">Questions we hear often</h2>
              <p className="mt-2 max-w-2xl text-craftmark-muted">
                Timelines, materials, service area, and how quoting works—without pricing hype.
              </p>
            </div>
            <Link
              href="/faq"
              className="text-sm font-semibold text-craftmark-navy hover:text-craftmark-navyLight"
            >
              View all FAQs
            </Link>
          </div>
          <div className="mt-10 max-w-3xl">
            <FaqList items={HOME_FAQ_PREVIEW} />
          </div>
        </div>
      </section>
    </>
  );
}
