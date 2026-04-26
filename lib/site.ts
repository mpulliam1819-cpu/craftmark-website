export const SITE = {
  name: "Craftmark Countertops",
  tagline: "Custom fabrication and installation.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.example.com",
  phone: "(770) 242-8469",
  email: "sales@agcomarble.net",
  logoPath: "/images/logo.png",
  address: {
    streetAddress: "2772 Simpson Cir",
    addressLocality: "Norcross",
    addressRegion: "GA",
    postalCode: "30071",
    addressCountry: "US",
  },
  foundingDate: "1979",
} as const;

export function fullAddress(): string {
  const a = SITE.address;
  return `${a.streetAddress}, ${a.addressLocality}, ${a.addressRegion} ${a.postalCode}`;
}

export function directionsUrl(): string {
  const a = SITE.address;
  const query = `${a.streetAddress}, ${a.addressLocality}, ${a.addressRegion} ${a.postalCode}`;
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}
