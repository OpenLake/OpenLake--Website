const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  const apiKey = process.env.BREVO_API_KEY;
  const listId = Number(process.env.BREVO_LIST_ID);
  const templateId = Number(process.env.BREVO_DOI_TEMPLATE_ID);
  const redirectionUrl = process.env.BREVO_CONFIRMATION_URL;

  if (!apiKey || !Number.isInteger(listId) || listId <= 0 ||
      !Number.isInteger(templateId) || templateId <= 0 || !redirectionUrl) {
    return Response.json({ error: "Newsletter signup is unavailable." }, { status: 503 });
  }

  if (request.headers.get("content-type")?.split(";")[0] !== "application/json" ||
      Number(request.headers.get("content-length")) > 2048) {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  let body: unknown;
  try {
    const raw = await request.text();
    if (raw.length > 2048) {
      return Response.json({ error: "Invalid request." }, { status: 400 });
    }
    body = JSON.parse(raw);
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const email = typeof body === "object" && body !== null && "email" in body &&
    typeof body.email === "string" ? body.email.trim() : "";
  if (email.length > 254 || !EMAIL_PATTERN.test(email)) {
    return Response.json({ error: "Enter a valid email address." }, { status: 400 });
  }

  try {
    const response = await fetch("https://api.brevo.com/v3/contacts/doubleOptinConfirmation", {
      method: "POST",
      headers: {
        "api-key": apiKey,
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({
        email,
        includeListIds: [listId],
        templateId,
        redirectionUrl,
        contactPixelTrackingConsent: false,
      }),
      signal: AbortSignal.timeout(10000),
    });
    if (!response.ok) {
      return Response.json(
        { error: "Could not start your subscription. Please try again later." },
        { status: response.status === 429 ? 429 : 502 },
      );
    }
    return Response.json({ ok: true });
  } catch {
    return Response.json(
      { error: "Could not start your subscription. Please try again later." },
      { status: 502 },
    );
  }
}
