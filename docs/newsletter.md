# Newsletter setup

The signup form uses Brevo's double opt-in API. Brevo stores the subscriber list and sends both confirmation emails and newsletter campaigns. The site sends only the submitted email address to Brevo. The API key stays on the server.

Brevo's free plan currently stores up to 100,000 contacts and sends up to 300 emails per day. A campaign for more than 300 recipients needs to be requeued on following days or moved to a paid plan. Check [Brevo's current limits](https://help.brevo.com/hc/en-us/articles/208580669-FAQs-What-are-the-limits-of-the-Free-plan) before sending.

## Connect the account

1. [Sign up for a free Brevo account](https://onboarding.brevo.com/account/register/) owned by OpenLake. In **Settings → Senders, Domains, IPs → Senders**, [create and verify a sender](https://help.brevo.com/hc/en-us/articles/208836149-Create-a-new-sender-From-name-and-From-email). If OpenLake controls its sender domain, [authenticate it](https://help.brevo.com/hc/en-us/articles/12163873383186-Authenticate-your-domain-with-Brevo-Brevo-code-DKIM-DMARC) for better deliverability.
2. In **CRM → Contacts → Lists**, [create an **OpenLake newsletter** list](https://help.brevo.com/hc/en-us/articles/5526943347858-Create-folders-and-lists-to-organize-your-contacts). Copy its numeric list ID from Brevo.
3. In **Marketing → Templates**, [create an email template](https://help.brevo.com/hc/en-us/articles/360019540880-Create-a-custom-double-opt-in-DOI-email-template-for-a-sign-up-form-created-in-Brevo) for confirmation. The button URL must be `{{ params.DOIurl }}`, as required by the [API endpoint used by this site](https://developers.brevo.com/reference/create-doi-contact). Activate the template and copy its numeric template ID.
4. In **Settings → SMTP & API → API Keys & MCP**, [generate an API key](https://help.brevo.com/hc/en-us/articles/209467485-Create-and-manage-your-API-keys) for this site. This is an API key, not an SMTP key. Set these server-only environment variables in the deployment:

   ```text
   BREVO_API_KEY=<secret API key>
   BREVO_LIST_ID=<numeric list ID>
   BREVO_DOI_TEMPLATE_ID=<numeric template ID>
   BREVO_CONFIRMATION_URL=https://openlake.in/newsletterpage?confirmed=1
   ```

   On Vercel, add them under **Project → Settings → Environment Variables → Production** and [redeploy](https://vercel.com/docs/environment-variables/managing-environment-variables). For another host, use its server-side secrets settings and restart or redeploy.

5. Submit an address you control. Confirm that the page asks you to check your inbox, the confirmation email arrives, the confirmation link returns to the site, and the address appears in the correct Brevo list only after confirmation.

If the variables are missing, the page shows that signup is unavailable. Failed API requests never show a subscription success message. Do not put the API key in a `NEXT_PUBLIC_` variable or commit it.

The issue archive starts empty. Add a card to `NEWSLETTERS` in `components/landing/NewsletterPage.jsx` only after publishing a real issue, with a working `readUrl`.
