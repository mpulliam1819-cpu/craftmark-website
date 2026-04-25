# Craftmark Countertops — website

Lead-generation site (Next.js App Router, TypeScript, Tailwind). No pricing, no ecommerce.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Environment variables

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL for sitemap, schema, and robots (default placeholder in `lib/site.ts`). |
| `NOTIFY_EMAIL_TO` | Optional. When set, the email stub logs intent to notify this address (wire to Resend/SendGrid/SMTP). |
| `SUBMISSIONS_FILE` | Set to `1` on a server with a writable filesystem to mirror JSON submissions (not typical on Vercel). |
| `SUBMISSIONS_DISABLE_FILE` | Set to `1` to skip file writes even in development. |
| `SHAREPOINT_*` | Optional stubs for future list integration (`SHAREPOINT_SITE_URL`, `SHAREPOINT_LIST_LEADS_ID`, `SHAREPOINT_LIST_REMNANTS_ID`). |

## Forms and storage

- UI posts to API routes under `app/api/*`.
- `lib/handle-submission.ts` coordinates file storage (dev), email stub, and SharePoint stubs.
- Swap `lib/storage` or add a new adapter when connecting SharePoint/CRM.

## Content

- Colors: `data/colors.json` — consumed by `/colors` and seedable from Excel later. Each row may include optional `id` (stable slug) and `brand` (quartz manufacturer line).
- Remnants: `data/remnants.json` — `/remnants` and `GET /api/remnants` (swap data source later).

Update NAP and contact details in `lib/site.ts`.
