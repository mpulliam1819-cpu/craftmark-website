import { PageIntro } from "@/components/PageIntro";
import { PageBannerImage } from "@/components/PageBannerImage";
import { ProjectImageStrip } from "@/components/ProjectImageStrip";
import projectsRaw from "@/data/projects.json";
import type { ProjectEntry } from "@/lib/project-types";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Quartz, natural stone, solid surface, and custom bath surfaces—built to order. Projects of any size.",
};

const projects = projectsRaw as ProjectEntry[];

export default function ProductsPage() {
  return (
    <>
      <PageIntro eyebrow="Products" title="Built to order. Installed professionally.">
        Craftmark fabricates and installs surfaces for kitchens, baths, and commercial interiors.
        Explore colors in the Color Explorer, then request a quote when you are ready to talk
        specifics.
      </PageIntro>
      <PageBannerImage
        imageSrc={projects[2]?.image ?? "/images/colors/placeholder.svg"}
        imageAlt="Products application banner"
        title="See materials installed in real spaces"
        subtitle="Quartz, stone, and solid surface options across kitchens, baths, and mixed scopes."
        variant="imageFirst"
        textAlign="left"
        imagePosition="center center"
        frame="rounded"
        layout="wide"
      />
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-8 md:grid-cols-2">
          {[
            { title: "Quartz countertops", body: "Durable, low-maintenance options for busy kitchens." },
            { title: "Natural stone countertops", body: "Timeless materials with professional templating and install." },
            { title: "Solid surface countertops", body: "Seam-forward applications where design calls for it." },
            { title: "Custom bath surfaces", body: "Vanities, surrounds, and details coordinated to your scope." },
          ].map((card) => (
            <div key={card.title} className="rounded-lg border border-craftmark-line bg-white p-6">
              <h2 className="text-lg font-semibold text-craftmark-navy">{card.title}</h2>
              <p className="mt-2 text-sm text-craftmark-muted">{card.body}</p>
            </div>
          ))}
        </div>
        <p className="mt-10 text-sm text-craftmark-muted">
          Craftmark works on projects of any size—from a single vanity to full-building packages.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/colors"
            className="inline-flex rounded-md bg-craftmark-navy px-5 py-3 text-sm font-semibold text-white hover:bg-craftmark-navyLight"
          >
            Open Color Explorer
          </Link>
          <Link
            href="/quote-request"
            className="inline-flex rounded-md border border-craftmark-navy px-5 py-3 text-sm font-semibold text-craftmark-navy hover:bg-craftmark-surface"
          >
            Request a quote
          </Link>
        </div>
      </section>
      <ProjectImageStrip
        projects={projects}
        title="Product applications in real projects"
        subtitle="See how selected surfaces are applied across kitchens, baths, and mixed scopes."
        count={3}
        offset={2}
      />
    </>
  );
}
