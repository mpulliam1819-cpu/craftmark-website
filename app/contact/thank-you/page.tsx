import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thank you",
  robots: { index: false, follow: true },
};

export default function ContactThankYouPage() {
  return (
    <section className="mx-auto max-w-2xl px-4 py-20 sm:px-6">
      <h1 className="text-3xl font-semibold text-craftmark-text">Message received</h1>
      <p className="mt-4 text-craftmark-muted">
        Thank you for reaching out. A team member will respond shortly. If this is urgent, call us
        and reference your message.
      </p>
      <Link href="/" className="mt-8 inline-block text-sm font-semibold text-craftmark-navy hover:underline">
        Return home
      </Link>
    </section>
  );
}
