import { PageIntro } from "@/components/PageIntro";
import { SinksCatalog } from "@/components/SinksCatalog";
import { sinksCatalog } from "@/data/sinks";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sinks & edge profiles",
  description:
    "Sink coordination and edge profile options for Craftmark countertops—selection guidance, shop standards, and what to confirm before fabrication.",
};

const edgeProfiles = [
  { name: "Straight", tier: "Standard", shape: "straight" },
  { name: "Eased", tier: "Standard", shape: "quarterRound" },
  { name: "Quarter Bevel", tier: "Standard", shape: "quarterBevel" },
  { name: "Roundover", tier: "Premium", shape: "halfBullnose" },
  { name: "Half Bevel", tier: "Premium", shape: "halfBevel" },
  { name: "Full Bullnose", tier: "Premium", shape: "fullBullnose" },
  { name: "Demi Bullnose", tier: "Premium", shape: "demiBullnose" },
  { name: "Bevel T&B", tier: "Premium", shape: "bevelTB" },
  { name: "Dupont", tier: "Premium", shape: "dupont" },
  { name: "Ogee", tier: "Premium", shape: "ogee" },
  { name: "Cove Dupont", tier: "Premium", shape: "coveDupont" },
  { name: "Waterfall", tier: "Premium", shape: "waterfall" },
] as const;

type EdgeShapeType = (typeof edgeProfiles)[number]["shape"];

function EdgeShape({ shape }: { shape: EdgeShapeType }) {
  const stroke = "#1F4E79";
  const common = { fill: "none", stroke, strokeWidth: 2.2, strokeLinejoin: "round" as const };

  switch (shape) {
    case "straight":
      return (
        <svg viewBox="0 0 120 62" className="h-14 w-full max-w-[9rem]" aria-hidden>
          <path d="M8 10h100v40H8z" {...common} />
        </svg>
      );
    case "quarterRound":
      return (
        <svg viewBox="0 0 120 62" className="h-14 w-full max-w-[9rem]" aria-hidden>
          <path d="M8 10h90a10 10 0 0 1 10 10v30H8z" {...common} />
        </svg>
      );
    case "quarterBevel":
      return (
        <svg viewBox="0 0 120 62" className="h-14 w-full max-w-[9rem]" aria-hidden>
          <path d="M8 10h78l22 16v24H8z" {...common} />
        </svg>
      );
    case "halfBullnose":
      return (
        <svg viewBox="0 0 120 62" className="h-14 w-full max-w-[9rem]" aria-hidden>
          <path d="M8 10h82a18 18 0 0 1 18 18v22H8z" {...common} />
        </svg>
      );
    case "halfBevel":
      return (
        <svg viewBox="0 0 120 62" className="h-14 w-full max-w-[9rem]" aria-hidden>
          <path d="M8 10h78l22 22v18H8z" {...common} />
        </svg>
      );
    case "fullBullnose":
      return (
        <svg viewBox="0 0 120 62" className="h-14 w-full max-w-[9rem]" aria-hidden>
          <path d="M8 10h68a20 20 0 0 1 0 40H8z" {...common} />
        </svg>
      );
    case "demiBullnose":
      return (
        <svg viewBox="0 0 120 62" className="h-14 w-full max-w-[9rem]" aria-hidden>
          <path d="M8 10h74a18 18 0 0 1 18 18v22H8z" {...common} />
        </svg>
      );
    case "bevelTB":
      return (
        <svg viewBox="0 0 120 62" className="h-14 w-full max-w-[9rem]" aria-hidden>
          <path d="M8 10h80l16 12v16l-16 12H8z" {...common} />
        </svg>
      );
    case "dupont":
      return (
        <svg viewBox="0 0 120 62" className="h-14 w-full max-w-[9rem]" aria-hidden>
          <path d="M8 10h70v14h8a22 22 0 0 1 22 22v4H8z" {...common} />
        </svg>
      );
    case "ogee":
      return (
        <svg viewBox="0 0 120 62" className="h-14 w-full max-w-[9rem]" aria-hidden>
          <path d="M8 10h66v10c0 8 6 14 14 14s14 6 14 14v2H8z" {...common} />
        </svg>
      );
    case "coveDupont":
      return (
        <svg viewBox="0 0 120 62" className="h-14 w-full max-w-[9rem]" aria-hidden>
          <path d="M8 10h74v9h10a14 14 0 0 1 14 14v13H8z" {...common} />
        </svg>
      );
    case "waterfall":
      return (
        <svg viewBox="0 0 120 62" className="h-14 w-full max-w-[9rem]" aria-hidden>
          <path d="M8 10h72v10h10v8h10v18H8z" {...common} />
        </svg>
      );
  }
}

export default function SinksAndEdgesPage() {
  return (
    <>
      <PageIntro eyebrow="Products" title="Sinks & edge profiles">
        Sink choice and edge detail drive both fabrication and install sequencing. Use this page as a
        checklist for what to confirm early—bowl on site (or approved sub), faucet and accessory
        layout, and the edge profile that matches your material and traffic pattern. Your Craftmark
        team will lock details into the shop drawing before production.
      </PageIntro>

      <section id="sinks" className="border-t border-craftmark-line bg-craftmark-surface">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <h2 className="text-2xl font-semibold text-craftmark-text">Sinks</h2>
          <p className="mt-3 max-w-3xl text-craftmark-muted">
            We coordinate cutouts, support, and reveal with the sink manufacturer&apos;s guidance and
            your cabinet line. Bring questions about composite, stainless, or fireclay bowls to
            measure so tolerances stay predictable.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            <a
              href="https://www.kohler.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-md border border-craftmark-line bg-white px-4 py-2 text-sm font-semibold text-craftmark-navy hover:bg-craftmark-surface"
            >
              Kohler sinks
            </a>
            <a
              href="https://www.blanco.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-md border border-craftmark-line bg-white px-4 py-2 text-sm font-semibold text-craftmark-navy hover:bg-craftmark-surface"
            >
              Blanco sinks
            </a>
            <a
              href="https://www.mazi-sinks.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-md border border-craftmark-line bg-white px-4 py-2 text-sm font-semibold text-craftmark-navy hover:bg-craftmark-surface"
            >
              MAZI sinks
            </a>
          </div>
          <SinksCatalog sinks={sinksCatalog} />
        </div>
      </section>

      <section id="edge-profiles" className="border-t border-craftmark-line bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <h2 className="text-2xl font-semibold text-craftmark-text">Edge profiles</h2>
          <p className="mt-3 max-w-3xl text-craftmark-muted">
            Available profiles depend on material thickness, brand, and shop capability. The visual
            guide below mirrors our most-requested profile families. Final profile selection is
            confirmed on your approved shop drawing.
          </p>

          <div className="mt-10">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-craftmark-navy">
              Standard edge profiles
            </h3>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {edgeProfiles
                .filter((edge) => edge.tier === "Standard")
                .map((edge) => (
                  <li key={edge.name} className="rounded-lg border border-craftmark-line bg-craftmark-surface p-4">
                    <div className="flex h-16 items-center">
                      <EdgeShape shape={edge.shape} />
                    </div>
                    <p className="mt-3 text-sm font-semibold text-craftmark-text">{edge.name}</p>
                  </li>
                ))}
            </ul>
          </div>

          <div className="mt-12">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-craftmark-navy">
              Premium edge profiles
            </h3>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {edgeProfiles
                .filter((edge) => edge.tier === "Premium")
                .map((edge) => (
                  <li key={edge.name} className="rounded-lg border border-craftmark-line bg-craftmark-surface p-4">
                    <div className="flex h-16 items-center">
                      <EdgeShape shape={edge.shape} />
                    </div>
                    <p className="mt-3 text-sm font-semibold text-craftmark-text">{edge.name}</p>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-t border-craftmark-line bg-craftmark-surface">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <p className="text-sm text-craftmark-muted">
            <Link href="/products" className="font-semibold text-craftmark-navy hover:text-craftmark-navyLight">
              Back to Products
            </Link>
            {" · "}
            <Link href="/colors" className="font-semibold text-craftmark-navy hover:text-craftmark-navyLight">
              Color Explorer
            </Link>
            {" · "}
            <Link href="/quote-request" className="font-semibold text-craftmark-navy hover:text-craftmark-navyLight">
              Request a quote
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
