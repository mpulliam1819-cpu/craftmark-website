import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thank you",
  robots: { index: false, follow: true },
};

export default function RemnantThankYouPage() {
  return (
    <section className="mx-auto max-w-2xl px-4 py-20 sm:px-6">
      <h1 className="text-3xl font-semibold text-craftmark-text">Request received</h1>
      <p className="mt-4 text-craftmark-muted">
        Our team will review current remnant availability against your notes and follow up with
        options or clarifying questions.
      </p>
      <p className="mt-4 text-sm text-craftmark-muted">
        If you have flexibility on color family or thickness, include that in a reply when we reach
        out—it often helps us find a fit faster.
      </p>
      <Link href="/remnants" className="mt-8 inline-block text-sm font-semibold text-craftmark-navy hover:underline">
        Back to remnants
      </Link>
    </section>
  );
}
