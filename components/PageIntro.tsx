import type { ReactNode } from "react";

export function PageIntro({
  eyebrow,
  title,
  children,
}: {
  eyebrow?: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <section className="border-b border-craftmark-line bg-white">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        {eyebrow ? (
          <p className="text-sm font-semibold uppercase tracking-wide text-craftmark-navy">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-craftmark-text sm:text-4xl">
          {title}
        </h1>
        {children ? <div className="mt-6 max-w-3xl text-lg text-craftmark-muted">{children}</div> : null}
      </div>
    </section>
  );
}
