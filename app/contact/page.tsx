import { ContactForm } from "@/components/forms/ContactForm";
import { PageIntro } from "@/components/PageIntro";
import { SITE, directionsUrl, fullAddress } from "@/lib/site";
import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${SITE.name} — ${fullAddress()}`,
};

export default function ContactPage() {
  return (
    <>
      <PageIntro eyebrow="Contact" title="Start a conversation">
        Share the basics and we will route your inquiry appropriately. For commercial projects, use
        the commercial path so we can respond with the right questions up front.
      </PageIntro>
      <section className="mx-auto max-w-[80rem] px-4 py-12 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="text-sm text-craftmark-muted">
            <div className="overflow-hidden rounded-lg border border-craftmark-line">
              <iframe
                title="Craftmark location map"
                src={`https://www.google.com/maps?q=${encodeURIComponent(fullAddress())}&output=embed`}
                className="h-64 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="mt-6">
              <p className="font-semibold text-craftmark-text">Visit</p>
              <p className="mt-2">{fullAddress()}</p>
              <p className="mt-2">
                <a href={directionsUrl()} target="_blank" rel="noreferrer" className="hover:underline">
                  Get Directions
                </a>
              </p>
              <p className="mt-2">
                Phone: <a href={`tel:${SITE.phone.replace(/\D/g, "")}`}>{SITE.phone}</a>
              </p>
              <p className="mt-2">
                Email: <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
              </p>
            </div>
          </div>
          <Suspense fallback={<p className="text-sm text-craftmark-muted">Loading form…</p>}>
            <ContactForm />
          </Suspense>
        </div>
      </section>
    </>
  );
}

