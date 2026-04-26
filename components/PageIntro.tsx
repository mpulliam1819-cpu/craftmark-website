import type { ReactNode } from "react";

export function PageIntro({
  eyebrow,
  title,
  titleClassName,
  children,
}: {
  eyebrow?: string;
  title: string;
  /** Optional Tailwind size utilities; defaults to text-4xl / sm:text-5xl. */
  titleClassName?: string;
  children?: ReactNode;
}) {
  const titleSizes = titleClassName ?? "text-4xl sm:text-5xl";
  return (
    <section className="border-b-2 border-craftmark-line bg-craftmark-surface">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
        {eyebrow ? (
          <p className="text-base font-semibold uppercase tracking-wide text-craftmark-navy">
            {eyebrow}
          </p>
        ) : null}
        <h1
          className={`font-semibold tracking-tight text-craftmark-text ${eyebrow ? "mt-2" : ""} ${titleSizes}`}
        >
          {title}
        </h1>
        {children ? <div className="mt-6 max-w-4xl text-xl leading-relaxed text-craftmark-muted sm:text-2xl">{children}</div> : null}
      </div>
    </section>
  );
}
