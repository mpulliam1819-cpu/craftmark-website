import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thank you",
  robots: { index: false, follow: true },
};

export default function QuoteThankYouPage() {
  return (
    <section className="mx-auto max-w-2xl px-4 py-20 sm:px-6">
      <h1 className="text-3xl font-semibold text-craftmark-text">Thank you — quote request received</h1>
      <p className="mt-4 text-craftmark-muted">
        Our estimating team will review your details and follow up with clarifying questions if
        needed. Clear information up front helps us protect timelines on projects of any size.
      </p>
      <p className="mt-4 text-sm text-craftmark-muted">
        If you selected materials from the Color Explorer, we will carry those notes into the
        conversation.
      </p>
      <Link href="/colors" className="mt-8 inline-block text-sm font-semibold text-craftmark-navy hover:underline">
        Back to Color Explorer
      </Link>
    </section>
  );
}
