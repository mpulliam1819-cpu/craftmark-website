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
  image: string;
};

export function colorRowKey(c: ColorEntry): string {
  return c.id ?? `${c.brand ?? ""}-${c.material}-${c.colorName}`;
}
