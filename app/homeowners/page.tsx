import { AudienceCtas } from "@/components/AudienceCtas";
import { PageIntro } from "@/components/PageIntro";
import { PageBannerImage } from "@/components/PageBannerImage";
import { ProjectImageStrip } from "@/components/ProjectImageStrip";
import projectsRaw from "@/data/projects.json";
import type { ProjectEntry } from "@/lib/project-types";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Homeowners",
  description:
    "Kitchen and bath remodels with professional install, fit and finish, and fewer surprises. Craftmark works on projects of any size.",
};

const projects = projectsRaw as ProjectEntry[];

export default function HomeownersPage() {
  return (
    <>
      <PageIntro eyebrow="Homeowners" title="Professional results for real homes.">
        Craftmark brings pro-grade fabrication and installation to kitchen and bath remodels—
        with clear guidance and fewer surprises along the way. Whether it is a single surface or
        a full home refresh, Craftmark works on projects of any size.
      </PageIntro>
      <PageBannerImage
        imageSrc={projects[1]?.image ?? "/images/colors/placeholder.svg"}
        imageAlt="Homeowner project banner"
        title="Kitchen and bath results you can picture in your home"
        subtitle="Professional install quality with clean handoff and lasting finish."
        variant="imageFirst"
        textAlign="left"
        imagePosition="left center"
        frame="rounded"
        layout="contained"
      />
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-xl font-semibold text-craftmark-navy">What we emphasize</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-craftmark-muted">
              <li>Kitchen and bath remodels</li>
              <li>Fit and finish you can see at install</li>
              <li>Professional installation teams</li>
              <li>Clear expectations from templating through completion</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-craftmark-navy">Projects of any size</h2>
            <p className="mt-4 text-craftmark-muted">
              From a single vanity top to a full kitchen and multiple baths, the same standards
              apply. Tell us what you are planning—we will help you understand the path forward.
            </p>
            <AudienceCtas primaryHref="/book-consult" primaryLabel="Book Consult" />
          </div>
        </div>
      </section>
      <ProjectImageStrip
        projects={projects}
        title="Homeowner project snapshots"
        subtitle="Recent kitchen and bath installs completed by Craftmark teams."
        category="Kitchen"
        count={3}
        offset={0}
      />
    </>
  );
}
