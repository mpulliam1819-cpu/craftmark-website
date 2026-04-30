import { BookConsultForm } from "@/components/forms/BookConsultForm";
import { PageIntro } from "@/components/PageIntro";
import { ProjectImageStrip } from "@/components/ProjectImageStrip";
import projectsRaw from "@/data/projects.json";
import type { ProjectEntry } from "@/lib/project-types";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a design consultation",
  description: "Schedule a conversation with Craftmark about your kitchen, bath, or commercial scope.",
};

const projects = projectsRaw as ProjectEntry[];

export default function BookConsultPage() {
  return (
    <>
      <PageIntro
        eyebrow="Book consult"
        title="Book a design consultation"
      >
        Share a few details so we can prepare for a productive first conversation. Craftmark works on
        projects of any size.
      </PageIntro>
      <section className="mx-auto max-w-[80rem] px-4 py-12 sm:px-6">
        <BookConsultForm />
      </section>
      <ProjectImageStrip
        projects={projects}
        title="Recent work before your consult"
        subtitle="A few completed installs to help frame your conversation with our team."
        count={3}
        offset={4}
      />
    </>
  );
}

