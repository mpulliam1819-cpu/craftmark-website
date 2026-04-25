type PageBannerImageProps = {
  imageSrc: string;
  imageAlt: string;
  title?: string;
  subtitle?: string;
  height?: "compact" | "default" | "tall" | "hero";
  variant?: "imageFirst" | "imageFirstMuted";
  textAlign?: "left" | "center" | "right";
  imagePosition?: string;
  frame?: "rounded" | "pill" | "soft";
  layout?: "contained" | "wide" | "splitLeft" | "splitRight" | "fullBleed";
};

const heightClass: Record<NonNullable<PageBannerImageProps["height"]>, string> = {
  compact: "h-52 sm:h-64",
  default: "h-64 sm:h-80",
  tall: "h-72 sm:h-[26rem]",
  hero: "h-[22rem] sm:h-[30rem] lg:h-[38rem]",
};

export function PageBannerImage({
  imageSrc,
  imageAlt,
  title,
  subtitle,
  height = "default",
  variant = "imageFirst",
  textAlign = "left",
  imagePosition = "center",
  frame = "rounded",
  layout = "contained",
}: PageBannerImageProps) {
  const alignClass = textAlign === "center" ? "text-center" : textAlign === "right" ? "text-right" : "text-left";
  const frameClass =
    frame === "pill" ? "rounded-[2rem]" : frame === "soft" ? "rounded-2xl" : "rounded-xl";
  const layoutClass =
    layout === "fullBleed"
      ? "max-w-none px-0"
      : layout === "wide"
        ? "max-w-7xl px-4 sm:px-6"
        : layout === "splitLeft"
          ? "max-w-6xl px-4 sm:px-6 lg:pr-24"
          : layout === "splitRight"
            ? "max-w-6xl px-4 sm:px-6 lg:pl-24"
            : "max-w-6xl px-4 sm:px-6";
  const imageShellClass = layout === "fullBleed" ? "border-y border-craftmark-line" : `border border-craftmark-line ${frameClass}`;
  const copyToneClass =
    variant === "imageFirstMuted" ? "text-craftmark-muted" : "text-craftmark-text";

  const titleClass =
    variant === "imageFirstMuted"
      ? "text-xl font-semibold text-craftmark-text sm:text-2xl"
      : "text-2xl font-semibold text-craftmark-text sm:text-3xl";

  return (
    <section className="border-y border-craftmark-line bg-craftmark-surface">
      <div className={`mx-auto py-8 sm:py-10 ${layoutClass}`}>
        <div className={`relative overflow-hidden ${imageShellClass} ${heightClass[height]}`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imageSrc}
            alt={imageAlt}
            className="h-full w-full object-cover"
            style={{ objectPosition: imagePosition }}
          />
        </div>
        {title || subtitle ? (
          <div className={`mt-4 sm:mt-5 ${alignClass}`}>
            {title ? <h2 className={titleClass}>{title}</h2> : null}
            {subtitle ? <p className={`mx-auto mt-2 max-w-3xl text-sm sm:text-base ${copyToneClass}`}>{subtitle}</p> : null}
          </div>
        ) : null}
      </div>
    </section>
  );
}
