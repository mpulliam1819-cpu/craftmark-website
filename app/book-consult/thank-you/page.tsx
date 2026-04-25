import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thank you",
  robots: { index: false, follow: true },
};

export default function BookConsultThankYouPage() {
  return (
    <section className="mx-auto max-w-2xl px-4 py-20 sm:px-6">
      <h1 className="text-3xl font-semibold text-craftmark-text">Thank you — we received your request</h1>
      <p className="mt-4 text-craftmark-muted">
        A member of our team will follow up using the contact information you provided. If your
        project is time-sensitive, you are welcome to call us directly.
      </p>
      <p className="mt-4 text-sm text-craftmark-muted">
        Next steps: we may ask for photos or rough dimensions, confirm scheduling constraints, and
        outline templating timing so fabrication stays predictable.
      </p>
      <Link href="/" className="mt-8 inline-block text-sm font-semibold text-craftmark-navy hover:underline">
        Return home
      </Link>
    </section>
  );
}
