import { PageIntro } from "@/components/PageIntro";
import { RemnantsBoard } from "@/components/RemnantsBoard";
import type { RemnantEntry } from "@/lib/remnant-types";
import type { Metadata } from "next";
import remnantsData from "@/data/remnants.json";

export const metadata: Metadata = {
  title: "Remnants",
  description:
    "Browse sample remnant listings. Availability changes quickly—submit a request for confirmation.",
};

export default function RemnantsPage() {
  const items = remnantsData as RemnantEntry[];
  return (
    <>
      <PageIntro eyebrow="Remnants" title="Remnant inventory (sample listings)">
        This grid is powered by structured data and an API endpoint so you can swap in a live feed
        later. Craftmark works on projects of any size; remnants are one path homeowners and pros use
        when timing and size align.
      </PageIntro>
      <RemnantsBoard items={items} />
    </>
  );
}
