import type { ReactNode } from "react";

export function PageIntro({
  eyebrow,
  eyebrowClassName,
  title,
  titleClassName,
  bodyClassName,
  children,
}: {
  eyebrow?: string;
  /** Optional class overrides for eyebrow text. */
  eyebrowClassName?: string;
  title: string;
  /** Optional Tailwind size utilities; defaults to text-4xl / sm:text-5xl. */
  titleClassName?: string;
  /** Optional class overrides for the intro body wrapper width/spacing. */
  bodyClassName?: string;
  children?: ReactNode;
}) {
  const titleSizes = titleClassName ?? "text-4xl sm:text-5xl";
  const bodyClasses = bodyClassName ?? "mt-6 max-w-4xl text-xl leading-relaxed text-craftmark-muted sm:text-2xl";
  const eyebrowClasses = eyebrowClassName ?? "text-base font-semibold uppercase italic tracking-wide text-craftmark-navy";
  return (
    <section className="border-b-2 border-craftmark-line bg-craftmark-surface">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
        {eyebrow ? (
          <p className={eyebrowClasses}>
            {eyebrow}
          </p>
        ) : null}
        <h1
          className={`font-semibold tracking-tight text-craftmark-text ${eyebrow ? "mt-2" : ""} ${titleSizes}`}
        >
          {title}
        </h1>
        {children ? <div className={bodyClasses}>{children}</div> : null}
      </div>
    </section>
  );
}
