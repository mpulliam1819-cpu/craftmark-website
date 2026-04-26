import Link from "next/link";
import { SITE, directionsUrl, fullAddress } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-craftmark-line bg-craftmark-surface">
      <div className="mx-auto max-w-[112rem] px-4 py-12 sm:px-6 lg:px-12">
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between md:gap-14 lg:gap-20">
          <div className="flex flex-col items-center gap-3 md:flex-[1.3]">
            <div className="inline-flex justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={SITE.logoPath} alt={SITE.name} className="h-[4.5rem] w-auto sm:h-[5rem] lg:h-[5.5rem]" />
            </div>
            <p className="mt-2 whitespace-nowrap text-center text-sm font-medium leading-snug text-craftmark-text lg:text-base">
              Trusted since {SITE.foundingDate} · Custom-built · Projects of any size
            </p>
          </div>
          <div className="text-base text-craftmark-text md:flex-1">
            <p className="text-lg font-semibold text-craftmark-navy">Visit</p>
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
          <div className="text-base md:flex-1">
            <p className="text-lg font-semibold text-craftmark-navy">Quick links</p>
            <ul className="mt-2 space-y-2 text-craftmark-text">
              <li>
                <Link className="hover:text-craftmark-navyLight" href="/colors">
                  Color selector
                </Link>
              </li>
              <li>
                <Link className="hover:text-craftmark-navyLight" href="/remnants">
                  Remnants
                </Link>
              </li>
              <li>
                <Link className="hover:text-craftmark-navyLight" href="/resources">
                  Resources
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
      </div>
    </footer>
  );
}
