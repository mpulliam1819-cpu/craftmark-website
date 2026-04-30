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
  { href: "/products/partners", label: "Partners" },
  {
    href: "/products",
    label: "Products",
    children: [
      { href: "/products/materials", label: "Materials" },
      { href: "/products/sinks-and-edges", label: "Sinks & edges" },
      { href: "/colors", label: "Color Explorer" },
      { href: "/remnants", label: "Remnants" },
      { href: "/products/closeouts", label: "Closeouts" },
    ],
  },
  { href: "/projects", label: "Projects" },
  {
    href: "/about-us",
    label: "About",
    children: [
      { href: "/about-us", label: "About Us" },
      { href: "/meet-the-team", label: "Meet the Team" },
      { href: "/process", label: "Process" },
      { href: "/resources", label: "Resources" },
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
    <header ref={headerRef} className="w-full border-b border-craftmark-line bg-white">
      <div className="relative mx-auto max-w-[80rem] px-5 sm:px-6 lg:px-8">
        <div className="flex h-[84px] items-center justify-between lg:grid lg:h-24 lg:grid-cols-[auto_minmax(6rem,10rem)_minmax(0,1fr)] lg:items-center lg:gap-x-5 xl:gap-x-6 lg:justify-items-stretch">
          {/* Logo Area — column 1 */}
          <div className="relative w-auto shrink-0 bg-white pr-0 lg:pr-6">
            <Link href="/" className="inline-flex items-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={SITE.logoPath} alt={SITE.name} className="h-12 w-auto lg:h-14" />
            </Link>
          </div>

          {/* Gutter — column 2: empty track so nav overflow paints here, not over the logo */}
          <div className="hidden min-h-0 min-w-0 shrink-0 lg:block" aria-hidden />

          {/* Primary Navigation Area — column 3: fills rest of row; pr-8 matches floating CTA strip right-8 so Contact lines up above Request Quote */}
          <div className="relative hidden min-h-0 w-full min-w-0 justify-self-stretch lg:block lg:pr-8">
            <nav aria-label="Primary" className="flex w-full min-w-0 justify-end">
              <ul className="flex min-w-0 items-center justify-end gap-3 whitespace-nowrap xl:gap-5">
                {nav.map((item) => (
                  <li
                    key={item.href}
                    className="relative shrink-0"
                    onMouseEnter={() =>
                      item.children ? openMenu(item.label) : setOpenDesktopMenu(null)
                    }
                    onMouseLeave={() => (item.children ? scheduleCloseMenu() : undefined)}
                  >
                    {item.children ? (
                      <div className="inline-flex items-center">
                        <Link
                          href={item.href}
                          className="rounded-md px-2 py-2 text-lg font-medium tracking-tight text-slate-900/80 transition-colors hover:text-slate-900 xl:text-xl"
                        >
                          {item.label}
                        </Link>
                        <button
                          type="button"
                          className="rounded-md px-1 py-2 text-xs text-slate-500 transition-colors hover:text-slate-900 xl:text-sm"
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
                        className="rounded-md px-2 py-2 text-lg font-medium tracking-tight text-slate-900/80 transition-colors hover:text-slate-900 xl:text-xl"
                      >
                        {item.label}
                      </Link>
                    )}
                    {item.children && openDesktopMenu === item.label ? (
                      <div className="absolute left-1/2 z-40 mt-1 min-w-[13rem] -translate-x-1/2 rounded-md border border-craftmark-line bg-white p-2 shadow-md">
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

          {/* Mobile Menu Stub */}
          <div className="lg:hidden">
            <button
              type="button"
              className="inline-flex items-center rounded-md border border-craftmark-line px-3 py-2 text-sm font-semibold text-craftmark-text"
              onClick={() => setOpenMobileMenu((prev) => !prev)}
            >
              Menu
            </button>
          </div>
        </div>

        {openMobileMenu ? (
          <div className="border-t border-craftmark-line py-2 lg:hidden">
            {nav.map((item) => (
              <div key={item.href} className="border-b border-craftmark-line/60 py-1 last:border-0">
                <div className="flex items-center justify-between gap-2">
                  <Link
                    href={item.href}
                    className="rounded-md px-2 py-1.5 text-xl font-semibold text-craftmark-text hover:bg-craftmark-surface hover:text-craftmark-navy"
                    onClick={() => setOpenMobileMenu(false)}
                  >
                    {item.label}
                  </Link>
                  {item.children ? (
                    <button
                      type="button"
                      className="rounded-md px-2 py-1.5 text-sm text-craftmark-muted"
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
            <div className="mt-3 flex items-center gap-2 px-2 pb-1">
              <Link
                href="/book-consult"
                className="inline-flex h-10 flex-1 items-center justify-center rounded-md bg-craftmark-navy px-4 text-sm font-semibold text-white transition-colors hover:bg-craftmark-navyLight"
                onClick={() => setOpenMobileMenu(false)}
              >
                Book Consult
              </Link>
              <Link
                href="/quote-request"
                className="inline-flex h-10 flex-1 items-center justify-center rounded-md border border-craftmark-navy px-4 text-sm font-semibold text-craftmark-navy transition-colors hover:bg-craftmark-surface"
                onClick={() => setOpenMobileMenu(false)}
              >
                Request Quote
              </Link>
            </div>
          </div>
        ) : null}

        <div className="pointer-events-none absolute right-8 top-full z-30 hidden -translate-y-px lg:block">
          <div className="pointer-events-auto inline-flex items-center gap-2 rounded-b-lg border border-craftmark-line border-t-0 bg-white px-4 py-2.5 shadow-sm">
            <Link
              href="/book-consult"
              className="inline-flex h-10 items-center justify-center rounded-md bg-craftmark-navy px-4 text-sm font-semibold text-white transition-colors hover:bg-craftmark-navyLight"
            >
              Book Consult
            </Link>
            <Link
              href="/quote-request"
              className="inline-flex h-10 items-center justify-center rounded-md border border-craftmark-navy px-4 text-sm font-semibold text-craftmark-navy transition-colors hover:bg-craftmark-surface"
            >
              Request Quote
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

