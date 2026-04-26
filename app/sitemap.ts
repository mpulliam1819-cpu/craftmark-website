import { SITE } from "@/lib/site";
import type { MetadataRoute } from "next";

const paths = [
  "/",
  "/homeowners",
  "/builders",
  "/commercial",
  "/products",
  "/products/partners",
  "/products/closeouts",
  "/products/materials",
  "/products/sinks-and-edges",
  "/process",
  "/projects",
  "/resources",
  "/faq",
  "/book-consult",
  "/book-consult/thank-you",
  "/quote-request",
  "/quote-request/thank-you",
  "/contact",
  "/contact/thank-you",
  "/colors",
  "/remnants",
  "/remnants/request",
  "/remnants/request/thank-you",
  "/showroom",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url.replace(/\/$/, "");
  return paths.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
  }));
}
