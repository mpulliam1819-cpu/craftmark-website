"use client";

import Link from "next/link";
import { useState } from "react";
import { SITE, directionsUrl, fullAddress } from "@/lib/site";

type NavItem = {
  href: string;
  label: string;
  children?: Array<{ href: string; label: string }>;
};

const nav: NavItem[] = [
  { href: "/homeowners", label: "Homeowners" },
  { href: "/builders", label: "Builders" },
  { href: "/commercial", label: "Commercial" },
  {
    href: "/products",
    label: "Products",
    children: [
      { href: "/colors", label: "Color Explorer" },
      { href: "/remnants", label: "Remnants" },
    ],
  },
  { href: "/process", label: "Process" },
  {
    href: "/projects",
    label: "Projects",
    children: [
      { href: "/faq", label: "FAQ" },
      { href: "/contact", label: "Contact" },
    ],
  },
];

export function Header() {
  const [openMobileMenu, setOpenMobileMenu] = useState<string | null>(null);

  return (
    <header className="border-b border-craftmark-line bg-white">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link href="/" className="inline-flex items-center text-lg font-semibold text-craftmark-navy">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={SITE.logoPath} alt={SITE.name} className="h-10 w-auto sm:h-12" />
        </Link>
        <nav className="w-full sm:w-auto">
          <ul className="flex flex-wrap items-center justify-end gap-x-1 gap-y-1 text-base font-semibold text-craftmark-text sm:gap-x-2">
            {nav.map((item) => (
              <li key={item.href} className="group relative">
                <div className="inline-flex items-center gap-1">
                  <Link
                    href={item.href}
                    className="rounded-md px-2 py-1.5 transition-colors hover:bg-craftmark-surface hover:text-craftmark-navy"
                  >
                    {item.label}
                  </Link>
                  {item.children ? (
                    <button
                      type="button"
                      className="rounded-md px-1 py-1 text-xs text-craftmark-muted hover:bg-craftmark-surface sm:hidden"
                      aria-label={`Toggle ${item.label} submenu`}
                      onClick={() =>
                        setOpenMobileMenu((prev) => (prev === item.label ? null : item.label))
                      }
                    >
                      {openMobileMenu === item.label ? "-" : "+"}
                    </button>
                  ) : null}
                </div>

                {item.children ? (
                  <>
                    <div className="absolute right-0 z-20 mt-1 hidden min-w-[12rem] rounded-md border border-craftmark-line bg-white p-2 shadow-md sm:invisible sm:block sm:opacity-0 sm:transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block rounded-md px-3 py-2 text-sm font-medium text-craftmark-text hover:bg-craftmark-surface hover:text-craftmark-navy"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                    {openMobileMenu === item.label ? (
                      <div className="mt-1 rounded-md border border-craftmark-line bg-craftmark-surface p-2 sm:hidden">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block rounded-md px-2 py-1.5 text-sm font-medium text-craftmark-text hover:bg-white hover:text-craftmark-navy"
                            onClick={() => setOpenMobileMenu(null)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    ) : null}
                  </>
                ) : null}
              </li>
            ))}
          </ul>
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
