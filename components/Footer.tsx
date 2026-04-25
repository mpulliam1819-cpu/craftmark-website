import Link from "next/link";
import { SITE, directionsUrl, fullAddress } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-craftmark-line bg-craftmark-surface">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="inline-flex items-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={SITE.logoPath} alt={SITE.name} className="h-8 w-auto" />
            </div>
            <p className="mt-2 text-sm text-craftmark-muted">{SITE.tagline}</p>
            <p className="mt-4 text-sm font-medium text-craftmark-text">
              Trusted since {SITE.foundingDate} · Custom-built · Projects of any size
            </p>
          </div>
          <div className="text-sm text-craftmark-text">
            <p className="font-semibold text-craftmark-navy">Visit</p>
            <p className="mt-2">{fullAddress()}</p>
            <p className="mt-2">
              <a className="hover:underline" href={directionsUrl()} target="_blank" rel="noreferrer">
                Get Directions
              </a>
            </p>
            <p className="mt-2">
              <a className="hover:underline" href={`tel:${SITE.phone.replace(/\D/g, "")}`}>
                {SITE.phone}
              </a>
            </p>
            <p className="mt-2">
              <a className="hover:underline" href={`mailto:${SITE.email}`}>
                {SITE.email}
              </a>
            </p>
          </div>
          <div className="text-sm">
            <p className="font-semibold text-craftmark-navy">Quick links</p>
            <ul className="mt-2 space-y-2 text-craftmark-text">
              <li>
                <Link className="hover:text-craftmark-navyLight" href="/book-consult">
                  Book a design consultation
                </Link>
              </li>
              <li>
                <Link className="hover:text-craftmark-navyLight" href="/quote-request">
                  Request a quote
                </Link>
              </li>
              <li>
                <Link className="hover:text-craftmark-navyLight" href="/remnants">
                  Remnants
                </Link>
              </li>
              <li>
                <Link className="hover:text-craftmark-navyLight" href="/showroom">
                  Showroom mode
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <p className="mt-10 text-xs text-craftmark-muted">
          Lead inquiries only. No online pricing or checkout.
        </p>
      </div>
    </footer>
  );
}
