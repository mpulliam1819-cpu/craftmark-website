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
const credibilityItems = [
  {
    icon: "✓",
    title: "Process you can trust",
    body: "Pros rely on a proven process with clear handoffs and accountability. Homeowners get clarity, coordination, and less stress.",
  },
  {
    icon: "◇",
    title: "Precision that shows",
    body: "Tight tolerances and exact fits lead to cleaner seams and better finishes.",
  },
  {
    icon: "⏱",
    title: "Timelines you can rely on",
    body: "Dependable fabrication and installation schedules reduce delays and surprises.",
  },
  {
    icon: "⚙",
    title: "Advanced capabilities",
    body: "Our shop handles complex details and materials without cutting corners.",
  },
  {
    icon: "★",
    title: "Results that last",
    body: "Built to professional standards-not just for move-in day, but long-term performance.",
  },
  {
    icon: "⌂",
    title: "Family-owned accountability",
    body: "Family-owned since 1979, delivering owner-level accountability and long-term value.",
  },
];

export default function HomeownersPage() {
  return (
    <>
      <PageIntro
        eyebrow="Who the Pros Use."
        eyebrowClassName="text-5xl font-bold italic tracking-tight text-craftmark-navy sm:text-6xl"
        title="Homeowners"
        titleClassName="hidden"
        bodyClassName="mt-8 max-w-6xl text-xl leading-relaxed text-craftmark-muted sm:text-2xl"
      >
        <p className="text-xl font-semibold tracking-tight text-craftmark-text sm:text-2xl">
          The standards professionals trust-now for homeowners
        </p>
        <p className="mt-4 leading-[1.8]">
          Craftmark is who the pros use-and now, we&apos;re open to homeowners. We bring the same
          fabrication standards, disciplined process, and professional-grade execution trusted by
          builders and contractors into your home renovation. That means better planning, cleaner
          installs, and results that hold up long after the project is complete. Whether you&apos;re
          updating a single space or tackling a full home refresh, our team delivers pro-level
          craftsmanship with clear communication and fewer surprises-from first measurement to final
          handoff. Professional process. Professional results. Because when the work behind the scenes
          is done right, everything you see-and don&apos;t see-lasts.
        </p>
      </PageIntro>
      <div className="lg:-mt-4 lg:mb-10">
        <PageBannerImage
          imageSrc={projects[1]?.image ?? "/images/colors/placeholder.svg"}
          imageAlt="Homeowner project banner"
          title="Kitchen and bath results you can picture in your home"
          subtitle="Craftmark surfaces are fabricated with advanced equipment and installed by experienced crews who do this work every day. The result is a clean handoff, precise fit, and a finish that looks right - and stays right."
          contentClassName="mt-10 sm:mt-12"
          containerClassName="max-w-7xl px-4 sm:px-6"
          titleClassName="max-w-6xl text-3xl font-semibold tracking-tight text-craftmark-text sm:text-4xl"
          subtitleClassName="max-w-6xl text-xl leading-relaxed text-craftmark-muted sm:text-2xl"
          imageShellClassName="mx-auto max-w-6xl lg:h-[34rem]"
          height="tall"
          variant="imageFirst"
          textAlign="left"
          imagePosition="left center"
          frame="rounded"
          layout="contained"
        />
      </div>
      <section className="border-t border-craftmark-line bg-craftmark-surface">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
          <h2 className="text-2xl font-semibold tracking-tight text-craftmark-text sm:text-3xl">
            Why professionals choose Craftmark - and why that matters for your home
          </h2>
          <p className="mt-4 max-w-4xl text-lg text-craftmark-muted">
            Professionals choose Craftmark because our process is predictable, precise, and proven.
            Homeowners benefit from that same discipline through smoother installs, fewer surprises,
            and results that last.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {credibilityItems.map((item) => (
              <article key={item.title} className="rounded-lg border border-craftmark-line bg-white p-5">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-craftmark-surface text-2xl font-bold text-craftmark-navy">
                  {item.icon}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-craftmark-text">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-craftmark-muted">{item.body}</p>
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-lg border border-craftmark-line bg-white p-6">
            <h3 className="text-lg font-semibold text-craftmark-navy">Homeowner advantage</h3>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-craftmark-muted">
              <li>Less stress through clear communication</li>
              <li>Better results through professional standards</li>
              <li>Peace of mind from a process trusted by pros</li>
            </ul>
            <p className="mt-4 text-base font-semibold text-craftmark-text">
              Trusted by the pros. Built for your home.
            </p>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-xl font-semibold text-craftmark-navy">Professional standards that show up at home</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-craftmark-muted">
              <li>Advanced fabrication capabilities</li>
              <li>Timely production and installation</li>
              <li>Careful installation with lasting results</li>
              <li>Responsive service and long-term satisfaction</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-craftmark-navy">Solid as stone. Peace of mind, built in.</h2>
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
        containerClassName="max-w-7xl px-4 sm:px-6 lg:px-6"
      />
    </>
  );
}
