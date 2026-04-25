"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { SITE } from "@/lib/site";

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
    ],
  },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [openDesktopMenu, setOpenDesktopMenu] = useState<string | null>(null);
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState<string | null>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const headerRef = useRef<HTMLElement | null>(null);

  const openMenu = (label: string) => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setOpenDesktopMenu(label);
  };

  const scheduleCloseMenu = () => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    closeTimerRef.current = setTimeout(() => setOpenDesktopMenu(null), 180);
  };

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenDesktopMenu(null);
        setOpenMobileMenu(false);
        setOpenMobileSubmenu(null);
      }
    };
    const onMouseDown = (event: MouseEvent) => {
      if (!headerRef.current) return;
      if (!headerRef.current.contains(event.target as Node)) {
        setOpenDesktopMenu(null);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("mousedown", onMouseDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("mousedown", onMouseDown);
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    };
  }, []);

  return (
    <header ref={headerRef} className="relative bg-transparent">
      <div className="flex flex-wrap items-center justify-between gap-4 border-x border-t border-craftmark-line bg-white px-4 py-3 sm:flex-nowrap sm:px-6 lg:px-10">
        <div className="min-w-[12rem] shrink-0">
          <Link href="/" className="inline-flex items-center text-lg font-semibold text-craftmark-navy">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={SITE.logoPath} alt={SITE.name} className="h-12 w-auto sm:h-[3.5rem]" />
          </Link>
        </div>
        <div className="min-w-0 flex-1">
          <div className="hidden sm:block">
            <div className="flex items-center">
              <nav className="flex w-full">
                <ul className="flex w-full items-center justify-between whitespace-nowrap px-3 text-[1.6rem] font-semibold text-craftmark-text lg:px-5">
                  {nav.map((item) => (
                    <li
                      key={item.href}
                      className="relative"
                      onMouseEnter={() =>
                        item.children ? openMenu(item.label) : setOpenDesktopMenu(null)
                      }
                      onMouseLeave={() => (item.children ? scheduleCloseMenu() : undefined)}
                    >
                      {item.children ? (
                        <div className="inline-flex items-center">
                          <Link
                            href={item.href}
                            className="block rounded-md px-2 py-2 transition-colors hover:bg-craftmark-surface hover:text-craftmark-navy"
                          >
                            {item.label}
                          </Link>
                          <button
                            type="button"
                            className="rounded-md px-1.5 py-2 text-xs text-craftmark-muted transition-colors hover:bg-craftmark-surface hover:text-craftmark-navy"
                            aria-label={`Toggle ${item.label} menu`}
                            onClick={() =>
                              setOpenDesktopMenu((prev) => (prev === item.label ? null : item.label))
                            }
                          >
                            ▾
                          </button>
                        </div>
                      ) : (
                        <Link
                          href={item.href}
                          className="block rounded-md px-2 py-2 transition-colors hover:bg-craftmark-surface hover:text-craftmark-navy"
                        >
                          {item.label}
                        </Link>
                      )}
                      {item.children && openDesktopMenu === item.label ? (
                        <div className="absolute left-1/2 z-30 mt-1 min-w-[13rem] -translate-x-1/2 rounded-md border border-craftmark-line bg-white p-2 shadow-md">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="block rounded-md px-3 py-2 text-sm font-medium text-craftmark-text hover:bg-craftmark-surface hover:text-craftmark-navy"
                              onClick={() => setOpenDesktopMenu(null)}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      ) : null}
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
          <div className="mt-2 sm:hidden">
            <div className="flex items-center justify-between gap-3">
              <button
                type="button"
                className="inline-flex items-center rounded-md border border-craftmark-line px-3 py-2 text-sm font-semibold text-craftmark-text"
                onClick={() => setOpenMobileMenu((prev) => !prev)}
              >
                Menu
              </button>
              <div className="flex gap-2">
                <Link
                  href="/book-consult"
                  className="inline-flex items-center justify-center rounded-md bg-craftmark-navy px-3 py-2 text-sm font-semibold text-white hover:bg-craftmark-navyLight"
                >
                  Book Consult
                </Link>
                <Link
                  href="/quote-request"
                  className="inline-flex items-center justify-center rounded-md border border-craftmark-navy px-3 py-2 text-sm font-semibold text-craftmark-navy hover:bg-craftmark-surface"
                >
                  Request Quote
                </Link>
              </div>
            </div>
            {openMobileMenu ? (
              <div className="mt-2 rounded-md border border-craftmark-line bg-white p-2">
                {nav.map((item) => (
                  <div key={item.href} className="border-b border-craftmark-line/60 py-1 last:border-0">
                    <div className="flex items-center justify-between gap-2">
                      <Link
                        href={item.href}
                        className="rounded-md px-2 py-1.5 text-sm font-semibold text-craftmark-text hover:bg-craftmark-surface hover:text-craftmark-navy"
                        onClick={() => setOpenMobileMenu(false)}
                      >
                        {item.label}
                      </Link>
                      {item.children ? (
                        <button
                          type="button"
                          className="rounded-md px-2 py-1 text-xs text-craftmark-muted"
                          onClick={() =>
                            setOpenMobileSubmenu((prev) => (prev === item.label ? null : item.label))
                          }
                        >
                          {openMobileSubmenu === item.label ? "-" : "+"}
                        </button>
                      ) : null}
                    </div>
                    {item.children && openMobileSubmenu === item.label ? (
                      <div className="mt-1 rounded-md bg-craftmark-surface p-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block rounded-md px-2 py-1.5 text-sm text-craftmark-text hover:bg-white hover:text-craftmark-navy"
                            onClick={() => {
                              setOpenMobileMenu(false);
                              setOpenMobileSubmenu(null);
                            }}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    ) : null}
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute right-4 top-full z-20 hidden -translate-y-px sm:block sm:right-6 lg:right-10">
        <div className="pointer-events-auto inline-flex items-center gap-3 rounded-b-lg border border-craftmark-line bg-white px-4 py-2.5">
          <Link
            href="/book-consult"
            className="inline-flex items-center justify-center rounded-md bg-craftmark-navy px-4 py-2.5 text-sm font-semibold text-white hover:bg-craftmark-navyLight"
          >
            Book Consult
          </Link>
          <Link
            href="/quote-request"
            className="inline-flex items-center justify-center rounded-md border border-craftmark-navy px-4 py-2.5 text-sm font-semibold text-craftmark-navy hover:bg-craftmark-surface"
          >
            Request Quote
          </Link>
        </div>
      </div>
    </header>
  );
}
