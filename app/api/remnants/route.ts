import { NextResponse } from "next/server";
import remnants from "@/data/remnants.json";

export async function GET() {
  return NextResponse.json(remnants);
}
