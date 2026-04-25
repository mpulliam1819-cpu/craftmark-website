export const SITE = {
  name: "Craftmark Countertops",
  tagline: "Who the pros use — now open to homeowners.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.example.com",
  phone: "(555) 000-1979",
  email: "hello@craftmarkcountertops.example",
  logoPath: "/images/logo.png",
  address: {
    streetAddress: "2782 Simpson Circle",
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
