import { RemnantRequestForm } from "@/components/forms/RemnantRequestForm";
import { PageIntro } from "@/components/PageIntro";
import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Request a remnant",
  description: "Submit a remnant request. Our team will confirm availability and next steps.",
};

export default function RemnantRequestPage() {
  return (
    <>
      <PageIntro eyebrow="Remnants" title="Request a remnant">
        Tell us what you are looking for. Availability changes quickly; submissions help our team
        match you with what is in the yard today.
      </PageIntro>
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <Suspense fallback={<p className="text-sm text-craftmark-muted">Loading form…</p>}>
          <RemnantRequestForm />
        </Suspense>
      </section>
    </>
  );
}
