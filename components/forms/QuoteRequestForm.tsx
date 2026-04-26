"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState, type FormEvent } from "react";

const audiences = ["Homeowner", "Builder", "Commercial Contractor"] as const;

export function QuoteRequestForm() {
  const router = useRouter();
  const search = useSearchParams();
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const material = search.get("material");
    const color = search.get("colorName");
    const line = search.get("brand");
    const mEl = document.querySelector<HTMLInputElement>('input[name="desiredMaterial"]');
    const cEl = document.querySelector<HTMLInputElement>('input[name="desiredColor"]');
    const bEl = document.querySelector<HTMLInputElement>('input[name="brand"]');
    if (material && mEl && !mEl.value) mEl.value = material;
    if (color && cEl && !cEl.value) cEl.value = color;
    if (line && bEl && !bEl.value) bEl.value = line;
  }, [search]);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setPending(true);
    const fd = new FormData(e.currentTarget);
    const res = await fetch("/api/quote-request", {
      method: "POST",
      body: fd,
    });
    setPending(false);
    if (!res.ok) {
      setError("Something went wrong. Please try again or call us.");
      return;
    }
    router.push("/quote-request/thank-you");
  }

  return (
    <form onSubmit={onSubmit} className="mx-auto max-w-xl space-y-5">
      <Field label="Name" name="name" required />
      <Field label="Email" name="email" type="email" required />
      <Field label="Phone" name="phone" type="tel" required />
      <Field label="ZIP" name="zip" required />
      <div>
        <label className="block text-sm font-medium text-craftmark-text">Audience</label>
        <select
          name="audience"
          required
          className="mt-1 w-full rounded-md border border-craftmark-line px-3 py-2 text-craftmark-text"
        >
          <option value="">Select…</option>
          {audiences.map((a) => (
            <option key={a} value={a}>
              {a}
            </option>
          ))}
        </select>
      </div>
      <Field label="Approximate scope" name="approximateScope" required />
      <Field label="Desired material" name="desiredMaterial" />
      <Field label="Brand / line (if quartz)" name="brand" />
      <Field label="Desired color" name="desiredColor" />
      <div>
        <label className="block text-sm font-medium text-craftmark-text">Upload drawing (optional)</label>
        <input
          name="drawing"
          type="file"
          accept=".pdf,.dwg,.dxf,image/*"
          className="mt-1 w-full rounded-md border border-craftmark-line px-3 py-2 text-craftmark-text file:mr-4 file:rounded-md file:border-0 file:bg-craftmark-surface file:px-3 file:py-2 file:text-sm file:font-semibold file:text-craftmark-navy hover:file:bg-craftmark-line/40"
        />
        <p className="mt-1 text-xs text-craftmark-muted">
          Attach a plan, sketch, or drawing file (PDF, DWG, DXF, or image).
        </p>
      </div>
      <div>
        <label className="block text-sm font-medium text-craftmark-text">Project description</label>
        <textarea
          name="projectDescription"
          required
          rows={5}
          className="mt-1 w-full rounded-md border border-craftmark-line px-3 py-2 text-craftmark-text"
        />
      </div>
      {error ? <p className="text-sm text-red-700">{error}</p> : null}
      <button
        type="submit"
        disabled={pending}
        className="w-full rounded-md bg-craftmark-navy px-4 py-3 text-sm font-semibold text-white hover:bg-craftmark-navyLight disabled:opacity-60"
      >
        {pending ? "Sending…" : "Submit quote request"}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-craftmark-text">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-1 w-full rounded-md border border-craftmark-line px-3 py-2 text-craftmark-text"
      />
    </div>
  );
}
