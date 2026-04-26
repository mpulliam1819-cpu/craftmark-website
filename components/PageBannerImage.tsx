type PageBannerImageProps = {
  imageSrc: string;
  imageAlt: string;
  title?: string;
  subtitle?: string;
  /** Overrides default title typography when provided. */
  titleClassName?: string;
  /** Overrides default subtitle typography (still gets mx-auto and max-width). */
  subtitleClassName?: string;
  /** Overrides spacing/alignment wrapper around title/subtitle below the image. */
  contentClassName?: string;
  height?: "compact" | "default" | "tall" | "hero";
  variant?: "imageFirst" | "imageFirstMuted";
  textAlign?: "left" | "center" | "right";
  imagePosition?: string;
  frame?: "rounded" | "pill" | "soft";
  layout?: "contained" | "wide" | "splitLeft" | "splitRight" | "fullBleed";
  /** Optional override for outer content width + horizontal padding wrapper. */
  containerClassName?: string;
};

const heightClass: Record<NonNullable<PageBannerImageProps["height"]>, string> = {
  compact: "h-56 sm:h-72",
  default: "h-72 sm:h-96",
  tall: "h-80 sm:h-[30rem]",
  hero: "h-[22rem] sm:h-[30rem] lg:h-[38rem]",
};

export function PageBannerImage({
  imageSrc,
  imageAlt,
  title,
  subtitle,
  titleClassName,
  subtitleClassName,
  contentClassName,
  height = "default",
  variant = "imageFirst",
  textAlign = "left",
  imagePosition = "center",
  frame = "rounded",
  layout = "contained",
  containerClassName,
}: PageBannerImageProps) {
  const alignClass = textAlign === "center" ? "text-center" : textAlign === "right" ? "text-right" : "text-left";
  const frameClass =
    frame === "pill" ? "rounded-[2rem]" : frame === "soft" ? "rounded-2xl" : "rounded-xl";
  const layoutClass =
    layout === "fullBleed"
      ? "max-w-none px-0"
      : layout === "wide"
        ? "max-w-[88rem] px-4 sm:px-6 lg:px-8"
        : layout === "splitLeft"
          ? "max-w-[88rem] px-4 sm:px-6 lg:pr-28 lg:px-8"
          : layout === "splitRight"
            ? "max-w-[88rem] px-4 sm:px-6 lg:pl-28 lg:px-8"
            : "max-w-[88rem] px-4 sm:px-6 lg:px-8";
  const imageShellClass = layout === "fullBleed" ? "border-y border-craftmark-line" : `border border-craftmark-line ${frameClass}`;
  const copyToneClass =
    variant === "imageFirstMuted" ? "text-craftmark-muted" : "text-craftmark-text";
  const subtitleAlignClass =
    textAlign === "center" ? "mx-auto" : textAlign === "right" ? "ml-auto" : "";

  const defaultTitleClass =
    variant === "imageFirstMuted"
      ? "text-2xl font-semibold text-craftmark-text sm:text-3xl lg:text-4xl"
      : "text-3xl font-semibold text-craftmark-text sm:text-4xl lg:text-5xl";
  const titleClass = titleClassName ?? defaultTitleClass;

  return (
    <section className="border-y border-craftmark-line bg-craftmark-surface">
      <div className={`mx-auto py-10 sm:py-12 ${containerClassName ?? layoutClass}`}>
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
          <div className={`${contentClassName ?? "mt-6 sm:mt-7"} ${alignClass}`}>
            {title ? <h2 className={titleClass}>{title}</h2> : null}
            {subtitle ? (
              <p
                className={
                  subtitleClassName ?
                    `${subtitleAlignClass} mt-3 max-w-4xl ${subtitleClassName}`
                  : `${subtitleAlignClass} mt-3 max-w-4xl text-base leading-relaxed sm:text-lg lg:text-xl ${copyToneClass}`
                }
              >
                {subtitle}
              </p>
            ) : null}
          </div>
        ) : null}
      </div>
    </section>
  );
}
