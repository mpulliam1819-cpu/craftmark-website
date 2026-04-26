import { persistLeadForm } from "@/lib/handle-submission";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const contentType = req.headers.get("content-type") ?? "";
    let payload: Record<string, unknown>;

    if (contentType.includes("multipart/form-data")) {
      const fd = await req.formData();
      payload = {};

      for (const [key, value] of fd.entries()) {
        if (value instanceof File) {
          if (key === "drawing" && value.size > 0) {
            payload.drawing = {
              fileName: value.name,
              fileType: value.type || "application/octet-stream",
              fileSizeBytes: value.size,
              lastModified: value.lastModified,
            };
          }
          continue;
        }

        payload[key] = value;
      }
    } else {
      payload = (await req.json()) as Record<string, unknown>;
    }

    await persistLeadForm("quote-request", payload);
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
}
