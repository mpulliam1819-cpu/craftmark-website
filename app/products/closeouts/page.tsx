import { PageIntro } from "@/components/PageIntro";
import colorsData from "@/data/colors.json";
import remnantsData from "@/data/remnants.json";
import type { ColorEntry } from "@/lib/color-types";
import type { RemnantEntry } from "@/lib/remnant-types";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Closeouts",
  description:
    "Browse closeout opportunities from Color Explorer selections and remnant inventory specials. Availability changes quickly.",
};

const colorItems = colorsData as ColorEntry[];
const remnantItems = remnantsData as RemnantEntry[];

export default function ProductsCloseoutsPage() {
  const featuredColors = colorItems.slice(0, 6);
  const featuredRemnants = remnantItems.slice(0, 6);

  return (
    <>
      <PageIntro eyebrow="Products" title="Closeouts">
        This page highlights closeout opportunities that can come from discontinued color runs,
        overstock slabs, and remnant inventory specials. Availability moves quickly, so use these as
        starting points and confirm current stock before you commit to a schedule.
      </PageIntro>

      <section className="border-t border-craftmark-line bg-craftmark-surface">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <div className="grid gap-8 md:grid-cols-2">
            <article className="rounded-lg border border-craftmark-line bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-craftmark-navy">Color selector closeouts</h2>
              <p className="mt-3 text-sm leading-relaxed text-craftmark-muted">
                Candidate colors for closeout pricing from stocked and rotating selections in Color
                Explorer.
              </p>
              <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-craftmark-muted">
                {featuredColors.map((item) => (
                  <li key={item.id ?? `${item.material}-${item.colorName}`}>
                    {item.colorName} ({item.brand ?? "Unbranded"})
                  </li>
                ))}
              </ul>
              <Link
                href="/colors"
                className="mt-6 inline-flex rounded-md bg-craftmark-navy px-4 py-2.5 text-sm font-semibold text-white hover:bg-craftmark-navyLight"
              >
                Open Color Explorer
              </Link>
            </article>

            <article className="rounded-lg border border-craftmark-line bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-craftmark-navy">Remnant inventory specials</h2>
              <p className="mt-3 text-sm leading-relaxed text-craftmark-muted">
                Smaller-lot inventory and remnant specials for projects where dimensions and timing
                align.
              </p>
              <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-craftmark-muted">
                {featuredRemnants.map((item) => (
                  <li key={item.remnantId}>
                    {item.colorName} ({item.material})
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-2">
                <Link
                  href="/remnants"
                  className="inline-flex rounded-md bg-craftmark-navy px-4 py-2.5 text-sm font-semibold text-white hover:bg-craftmark-navyLight"
                >
                  View remnant inventory
                </Link>
                <Link
                  href="/remnants/request"
                  className="inline-flex rounded-md border border-craftmark-navy px-4 py-2.5 text-sm font-semibold text-craftmark-navy hover:bg-craftmark-surface"
                >
                  Request a remnant
                </Link>
              </div>
            </article>
          </div>

          <p className="mt-10 text-sm text-craftmark-muted">
            Closeout inventory changes fast. For current allocations and staged release timing,{" "}
            <Link href="/contact" className="font-semibold text-craftmark-navy hover:text-craftmark-navyLight">
              contact Craftmark
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
