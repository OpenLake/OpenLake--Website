import { NextResponse } from "next/server";
import { fetchProgramsFresh, hasKey } from "../../../lib/programs-data";
export type { AirtableProgram } from "../../../lib/programs";

export async function GET() {
  if (!hasKey()) {
    return NextResponse.json([]);
  }

  try {
    const programs = await fetchProgramsFresh();
    return NextResponse.json(programs);
  } catch {
    return NextResponse.json({ error: "Failed to fetch programs" }, { status: 502 });
  }
}
