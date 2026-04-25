/**
 * Stub for outbound email. Wire Resend/SendGrid/SMTP via env when ready.
 * ui → api route → storage adapter; email is optional side-channel.
 */
export async function notifyEmailStub(subject: string, body: string): Promise<void> {
  if (!process.env.NOTIFY_EMAIL_TO) {
    if (process.env.NODE_ENV === "development") {
      console.info("[email stub]", subject, body.slice(0, 500));
    }
    return;
  }
  console.info("[email stub: would send]", { to: process.env.NOTIFY_EMAIL_TO, subject });
}
