import Link from "next/link";
import { SITE, directionsUrl, fullAddress } from "@/lib/site";

const nav = [
  { href: "/homeowners", label: "Homeowners" },
  { href: "/builders", label: "Builders" },
  { href: "/commercial", label: "Commercial" },
  { href: "/products", label: "Products" },
  { href: "/process", label: "Process" },
  { href: "/projects", label: "Projects" },
  { href: "/colors", label: "Color Explorer" },
  { href: "/remnants", label: "Remnants" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="border-b border-craftmark-line bg-white">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link href="/" className="inline-flex items-center text-lg font-semibold text-craftmark-navy">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={SITE.logoPath} alt={SITE.name} className="h-10 w-auto sm:h-12" />
        </Link>
        <nav className="flex flex-wrap items-center justify-end gap-x-2 gap-y-2 text-base font-semibold text-craftmark-text sm:gap-x-3">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-2 py-1.5 transition-colors hover:bg-craftmark-surface hover:text-craftmark-navy"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex w-full shrink-0 gap-3 sm:w-auto">
          <Link
            href="/book-consult"
            className="inline-flex flex-1 items-center justify-center rounded-md bg-craftmark-navy px-3 py-2 text-sm font-semibold text-white hover:bg-craftmark-navyLight sm:flex-none"
          >
            Book Consult
          </Link>
          <Link
            href="/quote-request"
            className="inline-flex flex-1 items-center justify-center rounded-md border border-craftmark-navy px-3 py-2 text-sm font-semibold text-craftmark-navy hover:bg-craftmark-surface sm:flex-none"
          >
            Request Quote
          </Link>
        </div>
        <div className="w-full text-xs text-craftmark-muted">
          <span>{fullAddress()}</span>
          <span className="mx-2">·</span>
          <a href={directionsUrl()} target="_blank" rel="noreferrer" className="hover:underline">
            Get Directions
          </a>
        </div>
      </div>
    </header>
  );
}
