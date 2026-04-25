import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { SITE } from "@/lib/site";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: {
    default: `${SITE.name} — ${SITE.tagline}`,
    template: `%s — ${SITE.name}`,
  },
  description:
    "Professional-grade countertops for homeowners, builders, and commercial contractors. Projects of any size.",
};

const localBusiness = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE.name,
  description:
    "Custom countertops and surfaces for homeowners, builders, and commercial contractors. Projects of any size.",
  telephone: SITE.phone,
  email: SITE.email,
  url: SITE.url,
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.address.streetAddress,
    addressLocality: SITE.address.addressLocality,
    addressRegion: SITE.address.addressRegion,
    postalCode: SITE.address.postalCode,
    addressCountry: SITE.address.addressCountry,
  },
  foundingDate: SITE.foundingDate,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen font-sans">
        <JsonLd data={localBusiness} />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
