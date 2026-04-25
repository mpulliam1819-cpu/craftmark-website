import { PageIntro } from "@/components/PageIntro";
import { PageBannerImage } from "@/components/PageBannerImage";
import { ProjectGallery } from "@/components/ProjectGallery";
import type { ProjectEntry } from "@/lib/project-types";
import projectsRaw from "@/data/projects.json";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Craftmark supports projects of any size—small remodels, custom homes, multi-unit work, and commercial scopes.",
};

const projects = projectsRaw as ProjectEntry[];

export default function ProjectsPage() {
  return (
    <>
      <PageIntro eyebrow="Projects" title="Craftmark supports projects of any size.">
        Whether you are updating one bath, building a custom home, delivering a development program,
        or executing commercial interiors, Craftmark scales the same professional approach to fit
        your scope.
      </PageIntro>
      <PageBannerImage
        imageSrc={projects[10]?.image ?? "/images/colors/placeholder.svg"}
        imageAlt="Projects banner"
        title="Completed projects across every scope"
        subtitle="Explore kitchens, baths, multifamily, and commercial applications."
        height="compact"
        variant="imageFirst"
        textAlign="right"
        imagePosition="center center"
        frame="rounded"
        layout="wide"
      />
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <ProjectGallery projects={projects} showFilters />
      </section>
    </>
  );
}
