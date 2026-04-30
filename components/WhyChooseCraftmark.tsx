type IconProps = { className?: string };

function IconFrame({ className = "h-5 w-5", children }: IconProps & { children: React.ReactNode }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden>
      {children}
    </svg>
  );
}

function IconProcess({ className }: IconProps) {
  return (
    <IconFrame className={className}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 12h7.5M8.25 16h4.5" />
    </IconFrame>
  );
}

function IconScale({ className }: IconProps) {
  return (
    <IconFrame className={className}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 21h19.5M3 3v18m4.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-9H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
      />
    </IconFrame>
  );
}

function IconFabrication({ className }: IconProps) {
  return (
    <IconFrame className={className}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .254c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </IconFrame>
  );
}

function IconTimeline({ className }: IconProps) {
  return (
    <IconFrame className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </IconFrame>
  );
}

function IconNationwide({ className }: IconProps) {
  return (
    <IconFrame className={className}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 18v-18"
      />
    </IconFrame>
  );
}

function IconLasting({ className }: IconProps) {
  return (
    <IconFrame className={className}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
      />
    </IconFrame>
  );
}

const cards: Array<{
  title: string;
  body: string;
  Icon: (props: IconProps) => React.ReactElement;
}> = [
  {
    title: "Professional process",
    body: "Clear planning, disciplined execution, and accountable handoffs from start to finish.",
    Icon: IconProcess,
  },
  {
    title: "Proven at scale",
    body: "Trusted by builders, contractors, dealers, and homeowners across thousands of projects.",
    Icon: IconScale,
  },
  {
    title: "Advanced fabrication",
    body: "High-capacity shop with professional equipment built for precision and consistency.",
    Icon: IconFabrication,
  },
  {
    title: "Reliable timelines",
    body: "Predictable production and installation schedules that protect downstream workflows.",
    Icon: IconTimeline,
  },
  {
    title: "Nationwide reach",
    body: "Fabrication and shipping support for projects across the country.",
    Icon: IconNationwide,
  },
  {
    title: "Results that last",
    body: "Built to professional standards—not just for today, but for long-term performance.",
    Icon: IconLasting,
  },
];

export function WhyChooseCraftmark() {
  return (
    <section className="border-t border-craftmark-line bg-craftmark-surface" aria-labelledby="why-choose-craftmark-heading">
      <div className="mx-auto max-w-[80rem] px-6 py-14 sm:px-8 sm:py-16">
        <h2 id="why-choose-craftmark-heading" className="text-2xl font-semibold tracking-tight text-craftmark-text sm:text-3xl">
          Why choose Craftmark
        </h2>
        <p className="mt-3 max-w-5xl text-lg leading-relaxed text-craftmark-muted">
          Craftmark combines disciplined process, modern fabrication, and nationwide reach to deliver reliable
          results at scale. From planning through production and delivery, our focus is consistency, clarity,
          and execution you can count on.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map(({ title, body, Icon }) => (
            <article key={title} className="rounded-lg border border-craftmark-line bg-white p-5 shadow-sm">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-craftmark-surface text-craftmark-navy">
                <Icon />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-craftmark-text">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-craftmark-muted">{body}</p>
            </article>
          ))}
        </div>

        <p className="mt-10 text-center text-base font-semibold text-craftmark-navy sm:text-lg">
          Trusted by the pros. Built for real-world projects.
        </p>
      </div>
    </section>
  );
}

