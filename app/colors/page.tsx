import { ColorExplorer } from "@/components/ColorExplorer";
import { PageIntro } from "@/components/PageIntro";
import type { ColorEntry } from "@/lib/color-types";
import type { Metadata } from "next";
import colorsData from "@/data/colors.json";

export const metadata: Metadata = {
  title: "Color Explorer",
  description:
    "Browse Craftmark materials and colors. Request a quote or check remnants—lead-gen only, no pricing.",
};

export default function ColorsPage() {
  const colors = colorsData as ColorEntry[];
  return (
    <>
      <PageIntro eyebrow="Materials" title="Color Explorer">
        Filter by material and color family, then open a color for next steps. Images can be swapped
        for photography later—layout and structure are ready.
      </PageIntro>
      <ColorExplorer colors={colors} />
    </>
  );
}
