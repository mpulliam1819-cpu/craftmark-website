# Deploying Craftmark website (Vercel)

## 1) Push to GitHub

Create a repository, then from the project root:

```bash
git init
git add .
git commit -m "Initial Craftmark Next.js site"
git remote add origin <your-repo-url>
git push -u origin main
```

## 2) Import to Vercel

1. Sign in at [https://vercel.com](https://vercel.com).
2. New Project → Import the GitHub repository.
3. Framework preset: **Next.js**. Root directory: repository root (where `package.json` lives).
4. Environment variables: set at least `NEXT_PUBLIC_SITE_URL` to your production URL (for `sitemap.xml`, `robots.txt`, and JSON-LD).

## 3) Build

Vercel runs `npm run build` automatically. Fix any build errors reported in the deployment log.

## 4) Domain

Project → Settings → Domains → add your apex (`example.com`) and `www` as needed, then update DNS at your registrar per Vercel instructions.

## Sitemap and robots

- `app/sitemap.ts` serves `/sitemap.xml`.
- `app/robots.ts` serves `/robots.txt` and references the sitemap URL derived from `NEXT_PUBLIC_SITE_URL` / `lib/site.ts`.

## Forms on Vercel

Serverless filesystems are ephemeral. JSON writes to `data/submissions/` are intended for **local development** (or when `SUBMISSIONS_FILE=1` on a writable host). For production, plan on:

- Email or ticketing via `NOTIFY_EMAIL_TO` + a real mail provider, and/or
- CRM/SharePoint via the stub in `lib/sharepoint-stub.ts`.

## Performance checklist (basic)

- Use `next/image` for large photography when assets are finalized (SVG placeholders today).
- Keep third-party scripts minimal.
- After launch, run Lighthouse on `/`, `/quote-request`, and `/colors`.
- Enable Vercel Analytics or Web Vitals monitoring if desired.
