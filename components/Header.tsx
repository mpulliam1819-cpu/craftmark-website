"use client";

import Link from "next/link";
import { useState } from "react";
import { SITE, fullAddress } from "@/lib/site";

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
  { href: "/projects", label: "Projects" },
  {
    href: "/about-us",
    label: "About",
    children: [
      { href: "/process", label: "Process" },
      { href: "/meet-the-team", label: "Meet the Team" },
      { href: "/about-us", label: "About Us" },
      { href: "/associations", label: "Associations" },
      { href: "/faq", label: "FAQ" },
      { href: "/contact", label: "Contact" },
    ],
  },
];

export function Header() {
  const [openMobileMenu, setOpenMobileMenu] = useState<string | null>(null);

  return (
    <header className="border-b border-craftmark-line bg-white">
      <div className="mx-auto flex max-w-6xl flex-wrap items-start justify-between gap-6 px-4 py-4 sm:px-6">
        <div className="min-w-[14rem]">
          <Link href="/" className="inline-flex items-center text-lg font-semibold text-craftmark-navy">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={SITE.logoPath} alt={SITE.name} className="h-12 w-auto sm:h-14" />
          </Link>
          <p className="mt-2 text-xs text-craftmark-muted">{fullAddress()}</p>
        </div>
        <div className="min-w-0 flex-1">
          <nav className="w-full">
            <ul className="flex flex-wrap items-center justify-start gap-x-1 gap-y-1 text-base font-semibold text-craftmark-text sm:justify-end sm:gap-x-2">
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
                    <div className="absolute left-1/2 z-20 mt-1 hidden min-w-[12rem] -translate-x-1/2 rounded-md border border-craftmark-line bg-white p-2 shadow-md sm:invisible sm:block sm:opacity-0 sm:transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
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
          <div className="mt-3 flex w-full gap-3 sm:justify-end">
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
        </div>
      </div>
    </header>
  );
}
