import { NextRequest, NextResponse } from "next/server";
import {
  SITE_BASE_ID,
  parseRecord,
  siteBaseUrl,
  siteAuthHeaders,
} from "../../../../lib/site-programs";
import { canEditProgram } from "../../../../lib/server-auth";

export const dynamic = "force-dynamic";

function apiKey() {
  return process.env.HACK_CLUB_SITE_AIRTABLE_KEY;
}

// Verify a file's leading bytes match an expected image format's magic signature
function matchesMagicBytes(mime: string, bytes: Uint8Array): boolean {
  const startsWith = (sig: number[]) => sig.every((b, i) => bytes[i] === b);
  switch (mime) {
    case "image/png":
      return startsWith([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
    case "image/jpeg":
      return startsWith([0xff, 0xd8, 0xff]);
    case "image/gif":
      return (
        startsWith([0x47, 0x49, 0x46, 0x38, 0x37, 0x61]) ||
        startsWith([0x47, 0x49, 0x46, 0x38, 0x39, 0x61])
      );
    case "image/webp":
      return (
        startsWith([0x52, 0x49, 0x46, 0x46]) &&
        bytes[8] === 0x57 &&
        bytes[9] === 0x45 &&
        bytes[10] === 0x42 &&
        bytes[11] === 0x50
      );
    default:
      return false;
  }
}

// Find or create a record by program name
async function findOrCreate(programName: string, key: string): Promise<string> {
  const listRes = await fetch(`${siteBaseUrl()}?fields[]=Name`, {
    headers: siteAuthHeaders(key),
    cache: "no-store",
  });
  const listData = await listRes.json();
  const records = (listData.records ?? []) as { id: string; fields: { Name?: string } }[];
  const existing = records.find((r) => r.fields.Name === programName);
  if (existing) return existing.id;

  const createRes = await fetch(siteBaseUrl(), {
    method: "POST",
    headers: siteAuthHeaders(key),
    body: JSON.stringify({ records: [{ fields: { Name: programName } }] }),
  });
  const createData = await createRes.json();
  const created = createData.records?.[0] as { id: string } | undefined;
  if (!created) throw new Error("Failed to create record");
  return created.id;
}

// POST — upload logo or background image for a program
// FormData fields: programName (string), type ("logo" | "bg"), file (File)
export async function POST(req: NextRequest) {
  const key = apiKey();
  if (!key) {
    return NextResponse.json({ error: "HACK_CLUB_SITE_AIRTABLE_KEY is not set" }, { status: 500 });
  }

  const form = await req.formData();
  const programName = form.get("programName");
  const type = form.get("type");
  const file = form.get("file");

  if (typeof programName !== "string" || !programName.trim() || programName.length > 200) {
    return NextResponse.json({ error: "Invalid programName" }, { status: 400 });
  }
  if (type !== "logo" && type !== "bg") {
    return NextResponse.json({ error: "Invalid type (expected 'logo' or 'bg')" }, { status: 400 });
  }
  if (!(file instanceof File)) {
    return NextResponse.json({ error: "Missing file" }, { status: 400 });
  }

  const ALLOWED_MIME: Record<string, string> = {
    "image/png": "png",
    "image/jpeg": "jpg",
    "image/gif": "gif",
    "image/webp": "webp",
  };
  const MAX_BYTES = 8 * 1024 * 1024;

  const mime = file.type;
  const ext = ALLOWED_MIME[mime];
  if (!ext) {
    return NextResponse.json(
      { error: "Unsupported file type. Allowed: PNG, JPEG, GIF, WebP." },
      { status: 415 },
    );
  }
  if (file.size > MAX_BYTES) {
    return NextResponse.json({ error: "File too large (max 8 MB)" }, { status: 413 });
  }

  // Verify magic bytes match the declared MIME type; file.type is client-controlled
  const head = new Uint8Array(await file.slice(0, 16).arrayBuffer());
  if (!matchesMagicBytes(mime, head)) {
    return NextResponse.json(
      { error: "File contents do not match the declared image type." },
      { status: 415 },
    );
  }

  // Authorization — must own this program (or be admin)
  if (!(await canEditProgram(req, programName))) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const filename = `${type}.${ext}`;
  const fieldName = type === "logo" ? "Logo" : "BG Image";

  const recordId = await findOrCreate(programName, key);
  if (!/^rec[A-Za-z0-9]{14}$/.test(recordId)) {
    console.error("[upload] unexpected Airtable record id", recordId);
    return NextResponse.json({ error: "Invalid record id from upstream" }, { status: 502 });
  }

  const bytes = await file.arrayBuffer();
  const base64 = Buffer.from(bytes).toString("base64");

  const uploadRes = await fetch(
    `https://content.airtable.com/v0/${SITE_BASE_ID}/${encodeURIComponent(recordId)}/${encodeURIComponent(fieldName)}/uploadAttachment`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contentType: mime,
        filename,
        file: base64,
      }),
    },
  );

  if (!uploadRes.ok) {
    console.error("[upload] Airtable content API error", uploadRes.status, await uploadRes.text());
    return NextResponse.json(
      { error: `Upload failed (${uploadRes.status})` },
      { status: uploadRes.status },
    );
  }

  // Fetch the updated record to return fresh data
  const fetchRes = await fetch(`${siteBaseUrl()}/${encodeURIComponent(recordId)}`, {
    headers: siteAuthHeaders(key),
    cache: "no-store",
  });
  if (!fetchRes.ok) {
    return NextResponse.json(
      { error: "Upload succeeded but failed to fetch updated record" },
      { status: 500 },
    );
  }

  return NextResponse.json(parseRecord(await fetchRes.json()));
}
