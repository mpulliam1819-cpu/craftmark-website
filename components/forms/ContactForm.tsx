"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState, type FormEvent } from "react";

const audiences = ["Homeowner", "Builder", "Commercial Contractor"] as const;

export function ContactForm() {
  const router = useRouter();
  const search = useSearchParams();
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const intent = search.get("intent");
    if (intent === "commercial") {
      const sel = document.querySelector<HTMLSelectElement>('select[name="audience"]');
      if (sel) sel.value = "Commercial Contractor";
    }
  }, [search]);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setPending(true);
    const fd = new FormData(e.currentTarget);
    const body = Object.fromEntries(fd.entries());
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    setPending(false);
    if (!res.ok) {
      setError("Something went wrong. Please try again or call us.");
      return;
    }
    router.push("/contact/thank-you");
  }

  return (
    <form onSubmit={onSubmit} className="mx-auto max-w-xl space-y-5">
      <Field label="Name" name="name" required />
      <Field label="Email" name="email" type="email" required />
      <Field label="Phone" name="phone" type="tel" />
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
      <div>
        <label className="block text-sm font-medium text-craftmark-text">Message</label>
        <textarea
          name="message"
          required
          rows={6}
          className="mt-1 w-full rounded-md border border-craftmark-line px-3 py-2 text-craftmark-text"
        />
      </div>
      {error ? <p className="text-sm text-red-700">{error}</p> : null}
      <button
        type="submit"
        disabled={pending}
        className="w-full rounded-md bg-craftmark-navy px-4 py-3 text-sm font-semibold text-white hover:bg-craftmark-navyLight disabled:opacity-60"
      >
        {pending ? "Sending…" : "Send message"}
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
