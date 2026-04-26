export type SinkColorVariant = {
  name: string;
  images: string[];
};

export type SinkProduct = {
  id: string;
  model: string;
  name: string;
  category: "Bathroom" | "Kitchen";
  material: "Ceramic" | "Stainless Steel";
  description: string;
  features: string[];
  technicalInfo: string[];
  images: string[];
  colors?: SinkColorVariant[];
};

export const sinksCatalog: SinkProduct[] = [
  {
    id: "mazi-1601",
    model: "1601",
    name: "Ceramic Undermount Bathroom Sink 1601",
    category: "Bathroom",
    material: "Ceramic",
    description:
      "MAZI offers a fresh take on the classic Ceramic Bathroom Sink with a durable, hygienic surface and easy-to-clean baked-on glaze.",
    features: [
      "Easy-to-clean polished surface",
      "Durable non-porous finish is scratch and stain resistant",
      "Standard 1.75 in. drain opening works with pop-up drains without overflow",
      "High performance / low flow soft-touch adjustable neo-Perl aerator resists calcium build-up (on select models)",
      "Durable triple-plated finish is corrosion and rust-resistant",
    ],
    technicalInfo: [
      "Outside Dimensions: L 19-3/8 in. x W 15-3/4 in. x D 8-1/8 in.",
      "Inside Dimensions: L 17-1/4 in. x W 14-1/8 in.",
    ],
    images: ["/sinks/1601_01.webp", "/sinks/1601_02.webp"],
    colors: [
      { name: "White", images: ["/sinks/1601_01.webp", "/sinks/1601_02.webp"] },
      { name: "Bisque", images: ["/sinks/1601_Bisque_01.webp", "/sinks/1601_Bisque_02.webp"] },
    ],
  },
  {
    id: "mazi-1626",
    model: "1626",
    name: "Ceramic Undermount Bathroom Sink 1626",
    category: "Bathroom",
    material: "Ceramic",
    description:
      "A classic ceramic bathroom undermount sink with smooth non-porous finish and a premium high-gloss glaze.",
    features: [
      "Easy-to-clean polished surface",
      "Durable non-porous finish is scratch and stain resistant",
      "Standard 1.75 in. drain opening works with pop-up drains without overflow",
      "High performance / low flow soft-touch adjustable neo-Perl aerator resists calcium build-up (on select models)",
      "Durable triple-plated finish is corrosion and rust-resistant",
    ],
    technicalInfo: [
      "Outside Dimensions: L 17-1/8 in. x W 14-1/8 in. x D 7-1/2 in.",
      "Inside Dimensions: L 15-1/8 in. x W 12-1/8 in. x D 7-1/2 in.",
    ],
    images: ["/sinks/1626W_01.webp"],
    colors: [
      { name: "White", images: ["/sinks/1626W_01.webp"] },
      { name: "Bisque", images: ["/sinks/1626_Bisque_01_b4eef80e-4ecc-4a86-b47b-358d6f898b21.webp"] },
    ],
  },
  {
    id: "mazi-1628",
    model: "1628",
    name: "Ceramic Undermount Bathroom Sink 1628",
    category: "Bathroom",
    material: "Ceramic",
    description:
      "A ceramic bathroom sink option with polished finish and flexible install style for above-counter or semi-recessed applications.",
    features: [
      "Easy-to-clean polished surface",
      "Durable non-porous finish is scratch and stain resistant",
      "Standard 1.75 in. drain opening works with pop-up drains without overflow",
      "High performance / low flow soft-touch adjustable neo-Perl aerator resists calcium build-up (on select models)",
      "Durable triple-plated finish is corrosion and rust-resistant",
    ],
    technicalInfo: [
      "Outside Dimensions: L 18-1/8 in. x W 13 in. x D 7-1/4 in.",
      "Inside Dimensions: L 16-1/8 in. x W 11 in. x D 7-1/4 in.",
    ],
    images: ["/sinks/1628W_01_0b4995f6-6a20-4e2f-bf52-66f1e5d60f91.webp"],
  },
  {
    id: "mazi-1633",
    model: "1633",
    name: "Ceramic Undermount Bathroom Sink 1633",
    category: "Bathroom",
    material: "Ceramic",
    description:
      "A wider ceramic bathroom sink profile with high-gloss glaze and non-porous surface built for durable daily use.",
    features: [
      "Easy-to-clean polished surface",
      "Durable non-porous finish is scratch and stain resistant",
      "Standard 1.75 in. drain opening works with pop-up drains without overflow",
      "High performance / low flow soft-touch adjustable neo-Perl aerator resists calcium build-up (on select models)",
      "Durable triple-plated finish is corrosion and rust-resistant",
    ],
    technicalInfo: [
      "Outside Dimensions: L 20-1/8 in. x W 15 in. x D 7-1/2 in.",
      "Inside Dimensions: L 18 in. x W 13 in. x D 7-1/2 in.",
    ],
    images: ["/sinks/1633W_01.webp", "/sinks/1633_Edit.webp"],
    colors: [
      { name: "White", images: ["/sinks/1633W_01.webp", "/sinks/1633_Edit.webp"] },
      { name: "Bisque", images: ["/sinks/1633_Bisque_01_1.webp"] },
    ],
  },
  {
    id: "mazi-bl3219s",
    model: "BL3219S",
    name: "Ceramic Undermount Kitchen Sink BL3219S Bundle",
    category: "Kitchen",
    material: "Ceramic",
    description:
      "Ceramic undermount kitchen sink bundle with included accessories for a complete workstation setup.",
    features: [
      "Easy-to-clean polished surface",
      "Durable non-porous finish is scratch and stain resistant",
      "High performance / low flow soft-touch adjustable neo-Perl aerator resists calcium build-up (on select models)",
      "Durable triple-plated finish is corrosion and rust-resistant",
      "Bundle includes cutting board, strainer, sink grid, flexible mat, and sink",
    ],
    technicalInfo: ["Dimensions: L 32 in. x W 19 in. x D 10 in."],
    images: ["/sinks/BL3219S_1.webp", "/sinks/BL3219S03_1.webp", "/sinks/BL3219S_Dimensions.webp"],
  },
  {
    id: "mazi-204",
    model: "204",
    name: "Stainless Steel Kitchen Sink 204",
    category: "Kitchen",
    material: "Stainless Steel",
    description:
      "18-gauge stainless steel kitchen sink with soundproofing pads and corrosion-resistant satin finish.",
    features: [
      "Constructed with premium 18-Gauge T-304 stainless steel for durability",
      "Sound insulated with thick rubber dampening pads",
      "Commercial grade satin finish",
      "Standard 3-1/2 in. drain opening",
      "Accessories available separately",
    ],
    technicalInfo: ["Dimensions: L 31-5/8 in. x W 18-1/8 in. x D 9 in."],
    images: ["/sinks/204.webp"],
  },
  {
    id: "mazi-301",
    model: "301",
    name: "Stainless Steel Kitchen Sink 301",
    category: "Kitchen",
    material: "Stainless Steel",
    description:
      "Stainless steel kitchen sink designed to balance durability, sound control, and day-to-day utility.",
    features: [
      "Constructed with premium 18-Gauge (also available in 16-Gauge) T-304 stainless steel",
      "Sound insulated with thick rubber dampening pads",
      "Commercial grade satin finish",
      "Standard 3-1/2 in. drain opening",
      "Accessories available separately",
    ],
    technicalInfo: ["Dimensions: L 23-1/8 in. x W 17-3/4 in. x D 9 in. (also available in D 6 in.)"],
    images: ["/sinks/301.webp", "/sinks/301_Dimensions_1.webp"],
  },
  {
    id: "mazi-309",
    model: "309",
    name: "Stainless Steel Kitchen Sink 309",
    category: "Kitchen",
    material: "Stainless Steel",
    description:
      "Heavy-duty 16-gauge stainless steel sink with sound dampening and corrosion-resistant finish.",
    features: [
      "Constructed with premium 16-Gauge T-304 stainless steel for durability",
      "Sound insulated with thick rubber dampening pads",
      "Commercial grade satin finish",
      "Standard 3-1/2 in. drain opening",
      "Accessories available separately",
    ],
    technicalInfo: ["Dimensions: L 31-1/2 in. x W 18-3/4 in. x D 9 in."],
    images: ["/sinks/309.webp", "/sinks/309_2.webp"],
  },
  {
    id: "mazi-917l",
    model: "917L",
    name: "Stainless Steel Kitchen Sink 917L",
    category: "Kitchen",
    material: "Stainless Steel",
    description:
      "Asymmetric double-basin stainless sink with left-bowl depth priority and strong sound control.",
    features: [
      "Constructed with premium 18-Gauge (also available in 16-Gauge) T-304 stainless steel",
      "Sound insulated with thick rubber dampening pads",
      "Commercial grade satin finish",
      "Standard 3-1/2 in. drain opening",
      "Accessories available separately",
    ],
    technicalInfo: [
      "Left Basin Dimensions: L 32 in. x W 20-3/4 in. x D 9 / 7 in.",
      "Right Basin Dimensions: L 32 in. x W 20-3/4 in. x D 7 / 9 in.",
    ],
    images: ["/sinks/917L.webp"],
  },
  {
    id: "mazi-917r",
    model: "917R",
    name: "Stainless Steel Kitchen Sink 917R",
    category: "Kitchen",
    material: "Stainless Steel",
    description:
      "Asymmetric double-basin stainless sink with right-bowl depth priority and resilient finish.",
    features: [
      "Constructed with premium 18-Gauge (also available in 16-Gauge) T-304 stainless steel",
      "Sound insulated with thick rubber dampening pads",
      "Commercial grade satin finish",
      "Standard 3-1/2 in. drain opening",
      "Accessories available separately",
    ],
    technicalInfo: [
      "Left Basin Dimensions: L 32 in. x W 20-3/4 in. x D 9 / 7 in.",
      "Right Basin Dimensions: L 32 in. x W 20-3/4 in. x D 7 / 9 in.",
    ],
    images: ["/sinks/917R.webp"],
  },
  {
    id: "mazi-dr3119",
    model: "DR3119",
    name: "Stainless Steel Workstation Sink DR3119",
    category: "Kitchen",
    material: "Stainless Steel",
    description:
      "Workstation sink in 18-gauge stainless steel, designed for integrated prep and accessories.",
    features: [
      "Constructed with premium 18-Gauge T-304 stainless steel",
      "Sound insulated with thick rubber dampening pads",
      "Commercial grade satin finish",
      "Standard 3-1/2 in. drain opening",
      "Includes grid, cutting board, basket, and flexible mat",
    ],
    technicalInfo: [
      "Outside Dimensions: L 31 in. x W 19 in. x D 9 in.",
      "Inside Dimensions: L 29 in. x W 17-1/8 in. x D 9 in.",
    ],
    images: ["/sinks/DR3119_01.webp", "/sinks/DR31119_Bundle.webp", "/sinks/DR3119Accessories.webp"],
  },
  {
    id: "mazi-efs3320",
    model: "EFS3320",
    name: "Stainless Steel Kitchen Sink EFS3320",
    category: "Kitchen",
    material: "Stainless Steel",
    description:
      "Large-format stainless kitchen sink with deep bowl capacity and anti-noise dampening.",
    features: [
      "Constructed with premium 18-Gauge (also available in 16-Gauge) T-304 stainless steel",
      "Sound insulated with thick rubber dampening pads",
      "Commercial grade satin finish",
      "Standard 3-1/2 in. drain opening",
      "Accessories available separately",
    ],
    technicalInfo: ["Dimensions: L 33 in. x W 20 in. x D 10 in."],
    images: ["/sinks/EFS3320_02.webp", "/sinks/EFS3320_Drawing.webp"],
  },
  {
    id: "mazi-hbs3219",
    model: "HBS3219",
    name: "Stainless Steel Kitchen Sink HBS3219",
    category: "Kitchen",
    material: "Stainless Steel",
    description:
      "18-gauge stainless sink with roomy interior bowl dimensions and corrosion-resistant finish.",
    features: [
      "Constructed with premium 18-Gauge (also available in 16-Gauge) T-304 stainless steel",
      "Sound insulated with thick rubber dampening pads",
      "Commercial grade satin finish",
      "Standard 3-1/2 in. drain opening",
      "Accessories available separately",
    ],
    technicalInfo: [
      "Outside Dimensions: L 32 in. x W 19 in. x D 10 in.",
      "Inside Dimensions: L 30 in. x W 17 in. x D 10 in.",
    ],
    images: ["/sinks/HBS3219_01.webp", "/sinks/HBS3219_02.webp"],
  },
  {
    id: "mazi-hfs3320",
    model: "HFS3320",
    name: "Stainless Steel Handmade Farm Sink HFS3320",
    category: "Kitchen",
    material: "Stainless Steel",
    description:
      "Handmade farm-style stainless sink built in 18-gauge steel with sound dampening and satin finish.",
    features: [
      "Constructed with premium 18-Gauge (also available in 16-Gauge) T-304 stainless steel",
      "Sound insulated with thick rubber dampening pads",
      "Commercial grade satin finish",
      "Standard 3-1/2 in. drain opening",
      "Accessories available separately",
    ],
    technicalInfo: ["Dimensions: L 33 in. x W 20 in. x D 10 in."],
    images: ["/sinks/HFS3320.webp"],
  },
  {
    id: "mazi-lefs3320",
    model: "LEFS3320",
    name: "Stainless Steel Workstation Farm Sink LEFS3320",
    category: "Kitchen",
    material: "Stainless Steel",
    description:
      "16-gauge workstation farm sink with included accessories and integrated prep functionality.",
    features: [
      "Constructed with premium 16-Gauge T-304 stainless steel",
      "Sound insulated with thick rubber dampening pads",
      "Commercial grade satin finish",
      "Standard 3-1/2 in. drain opening",
      "Strainers, soap dispensers, and other accessories come included",
    ],
    technicalInfo: [
      "Outside Dimensions: L 33 in. x W 20 in. x D 10 in.",
      "Inside Dimensions: L 31 in. x W 18 in. x D 10 in.",
    ],
    images: ["/sinks/LEFS332001.webp", "/sinks/LEFS332002.webp"],
  },
];
