import { persistLeadForm } from "@/lib/handle-submission";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const payload = (await req.json()) as Record<string, unknown>;
    await persistLeadForm("book-consult", payload);
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
}
