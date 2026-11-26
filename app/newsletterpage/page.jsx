import NewsletterPage from "@/components/landing/NewsletterPage";

export const dynamic = "force-dynamic";

export default async function Page({ searchParams }) {
  const params = await searchParams;
  const signupEnabled = Boolean(
    process.env.BREVO_API_KEY &&
    process.env.BREVO_LIST_ID &&
    process.env.BREVO_DOI_TEMPLATE_ID &&
    process.env.BREVO_CONFIRMATION_URL,
  );

  return <NewsletterPage signupEnabled={signupEnabled} confirmed={params?.confirmed === "1"} />;
}
