import type { ReactElement, ReactNode } from "react";

type IconProps = { className?: string };

function IconSvg({ className = "h-6 w-6", children }: IconProps & { children: ReactNode }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      aria-hidden
    >
      {children}
    </svg>
  );
}

function IconHeritage({ className }: IconProps) {
  return (
    <IconSvg className={className}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.75 3v2.25M17.25 3v2.25M3 9.75h18M4.5 4.5h15A1.5 1.5 0 0121 6v12a1.5 1.5 0 01-1.5 1.5h-15A1.5 1.5 0 013 18V6a1.5 1.5 0 011.5-1.5z"
      />
    </IconSvg>
  );
}

function IconAligned({ className }: IconProps) {
  return (
    <IconSvg className={className}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 9h16.5m-16.5 6.75h16.5M3.75 3h16.5M9 3v18m6-18v18"
      />
    </IconSvg>
  );
}

function IconScaleFab({ className }: IconProps) {
  return (
    <IconSvg className={className}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 21h19.5M3 3v18m4.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-9H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
      />
    </IconSvg>
  );
}

function IconSchedule({ className }: IconProps) {
  return (
    <IconSvg className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </IconSvg>
  );
}

function IconPrecision({ className }: IconProps) {
  return (
    <IconSvg className={className}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
      />
    </IconSvg>
  );
}

const steps: Array<{
  title: string;
  caption: string;
  Icon: (p: IconProps) => ReactElement;
}> = [
  {
    title: "Nearly 50 years in production homebuilding",
    caption:
      "Deep roots in the builder supply chain, supporting production and custom homes for decades.",
    Icon: IconHeritage,
  },
  {
    title: "Builder-aligned process",
    caption:
      "Workflows built around site readiness, superintendent schedules, and closing timelines.",
    Icon: IconAligned,
  },
  {
    title: "Scalable fabrication",
    caption:
      "Capacity for a single custom home or full community production without sacrificing quality.",
    Icon: IconScaleFab,
  },
  {
    title: "Disciplined scheduling",
    caption: "Predictable production and installation that protects downstream trades and closing dates.",
    Icon: IconSchedule,
  },
  {
    title: "Precise, repeatable results",
    caption: "Consistent fit and finish from first lot through final phase.",
    Icon: IconPrecision,
  },
];

export function BuildersWhyGraphic() {
  return (
    <section
      className="border-b-2 border-craftmark-line bg-craftmark-surface"
      aria-labelledby="builders-why-graphic-heading"
    >
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14">
        <div className="text-center">
          <h2
            id="builders-why-graphic-heading"
            className="text-4xl font-semibold tracking-tight text-craftmark-text sm:text-5xl lg:text-[3.25rem]"
          >
            Why builders choose Craftmark
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg font-medium text-craftmark-navy sm:text-xl lg:text-2xl">
            Built around the way builders actually work.
          </p>
        </div>

        <div
          className="mx-auto mt-8 flex max-w-5xl items-center justify-center gap-4 text-base font-semibold uppercase tracking-wide text-craftmark-muted sm:mt-10 sm:gap-5 sm:text-lg lg:text-xl"
          aria-hidden
        >
          <span>1979</span>
          <span className="h-0.5 min-w-[5rem] flex-1 bg-craftmark-line sm:min-w-[9rem]" />
          <span className="shrink-0 text-craftmark-navy">Supply chain</span>
          <span className="h-0.5 min-w-[5rem] flex-1 bg-craftmark-line sm:min-w-[9rem]" />
          <span>Today</span>
        </div>

        <ol className="mt-10 grid list-none grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-12 lg:grid-cols-5 lg:gap-4">
          {steps.map(({ title, caption, Icon }) => (
            <li
              key={title}
              className="flex flex-col rounded-lg border border-craftmark-line bg-white p-5 shadow-sm sm:p-6"
            >
              <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-craftmark-surface text-craftmark-navy">
                <Icon className="h-7 w-7" />
              </div>
              <h3 className="mt-4 text-lg font-semibold leading-snug text-craftmark-text sm:text-xl">
                {title}
              </h3>
              <p className="mt-3 flex-1 text-base leading-relaxed text-craftmark-muted sm:text-[1.05rem]">
                {caption}
              </p>
            </li>
          ))}
        </ol>

        <p className="mt-8 text-center text-lg font-semibold text-craftmark-muted sm:mt-10 sm:text-xl">
          Experience matters when timelines matter.
        </p>
      </div>
    </section>
  );
}
