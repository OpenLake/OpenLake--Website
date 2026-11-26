# Newsletter setup

The signup form uses Brevo's double opt-in API. Brevo stores the subscriber list and sends both confirmation emails and newsletter campaigns. The site sends only the submitted email address to Brevo. The API key stays on the server.

Brevo's free plan currently stores up to 100,000 contacts and sends up to 300 emails per day. A campaign for more than 300 recipients needs to be requeued on following days or moved to a paid plan. Check [Brevo's current limits](https://help.brevo.com/hc/en-us/articles/208580669-FAQs-What-are-the-limits-of-the-Free-plan) before sending.

## Connect the account

1. Create an OpenLake-owned Brevo account and verify the sender address or domain.
2. Create an **OpenLake newsletter** contact list. Copy its numeric list ID.
3. Create and activate a double opt-in email template. Its confirmation button must use `{{ params.DOIurl }}` as the link. Copy the numeric template ID.
4. Create an API key and set these server-only environment variables in the deployment:

   ```text
   BREVO_API_KEY=<secret API key>
   BREVO_LIST_ID=<numeric list ID>
   BREVO_DOI_TEMPLATE_ID=<numeric template ID>
   BREVO_CONFIRMATION_URL=https://openlake.in/newsletterpage?confirmed=1
   ```

5. Redeploy, then submit an address you control. Confirm that the page asks you to check your inbox, the confirmation email arrives, the confirmation link returns to the site, and the address appears in the correct Brevo list only after confirmation.

If the variables are missing, the page shows that signup is unavailable. Failed API requests never show a subscription success message. Do not put the API key in a `NEXT_PUBLIC_` variable or commit it.

The issue archive starts empty. Add a card to `NEWSLETTERS` in `components/landing/NewsletterPage.jsx` only after publishing a real issue, with a working `readUrl`.
