import Link from "next/link";

export function AudienceCtas({
  primaryHref,
  primaryLabel,
  secondaryHref = "/quote-request",
  secondaryLabel = "Request Quote",
}: {
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  return (
    <div className="mt-8 flex flex-wrap gap-3">
      <Link
        href={primaryHref}
        className="inline-flex items-center justify-center rounded-md bg-craftmark-navy px-5 py-3 text-base font-semibold text-white hover:bg-craftmark-navyLight"
      >
        {primaryLabel}
      </Link>
      <Link
        href={secondaryHref}
        className="inline-flex items-center justify-center rounded-md border border-craftmark-navy px-5 py-3 text-base font-semibold text-craftmark-navy hover:bg-craftmark-surface"
      >
        {secondaryLabel}
      </Link>
    </div>
  );
}
