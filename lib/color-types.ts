export type ColorEntry = {
  /** Stable slug for keys and imports (e.g. `cambria-brittanicca`). */
  id?: string;
  material: string;
  colorName: string;
  /** Quartz manufacturer line (MSI, Cambria, …). Omit for marble, quartzite, solid surface. */
  brand?: string;
  thicknessOptions: string[];
  finish: string;
  tags: string[];
  /** Backward-compatible single image fallback. */
  image: string;
  /** Optional swatch views (chips/samples). */
  swatchImages?: string[];
  /** Optional full slab views. */
  slabImages?: string[];
};

export function colorRowKey(c: ColorEntry): string {
  return c.id ?? `${c.brand ?? ""}-${c.material}-${c.colorName}`;
}

export function primarySwatchImage(c: ColorEntry): string {
  return c.swatchImages?.[0] ?? c.image;
}

export function primarySlabImage(c: ColorEntry): string {
  return c.slabImages?.[0] ?? c.image;
}
