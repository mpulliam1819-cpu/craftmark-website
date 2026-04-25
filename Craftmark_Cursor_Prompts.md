# Craftmark Website + PPT — Cursor Prompt Pack

Use these prompts in Cursor **as-is**. They’re organized in recommended execution order.

---

## 0) Project-wide rules (paste once at the start of your Cursor session)

```text
Project rules:
- Lead-gen only. No pricing, no ecommerce, no checkout.
- Primary CTAs: Book Consult, Request Quote.
- Audiences: Homeowners, Builders, Commercial Contractors.
- Always reinforce: “Projects of any size.”
- Tone: professional, confident, non-salesy. No discount language.
- Build in a way that’s easy to later connect forms to SharePoint/CRM.
```

---

# A) POWERPOINT (.POTX) — Theme + Deck

## A1) Create the base theme (.potx)

```text
Create a PowerPoint theme file (.potx) called
“Craftmark_Pro-Grade.potx” using python-pptx.

Follow these requirements exactly:

THEME PURPOSE
Professional, minimal, credible. No marketing fluff.

THEME COLORS
Text Dark: #1F1F1F
Text Light: #FFFFFF
Accent 1 (Primary): #1F4E79
Accent 2: #6B7280
Accent 3: #D1D5DB
Accent 4: #3A6EA5
Accent 5: #F3F4F6

THEME FONTS
Headings: Segoe UI Semibold
Body: Segoe UI Regular

MASTER SLIDE
- White background
- Thin horizontal line (2px) at top using Accent 3
- Footer bottom-right with text “CRAFTMARK”, 10pt, Accent 2
- No slide numbers

SLIDE LAYOUTS (define in Slide Master)

Layout 1: Cover Slide
- Title: 52–56pt, bold
- Subtitle: 20–22pt
- No bullets

Layout 2: Statement Slide
- Large centered title (44–48pt)
- Optional sub-line (20pt)

Layout 3: Standard Content
- Title 36–40pt
- Body bullets 22–24pt
- Max 4 bullets, no sub bullets

Layout 4: Split Comparison
- Two equal columns
- Column headers bold 26pt
- Body 22pt

Layout 5: Translation Slide
- Two columns
- Left: Regular 22pt
- Right: Bold 22pt
- Designed for “X → Y” content

Layout 6: Product List
- Two columns
- Two bullets per column
- Optional faded background image support

OUTPUT
Generate the .potx file and save it to disk so it can be downloaded.
```

## A2) Generate a finished 10-slide deck using the theme

```text
Using the existing PowerPoint theme file
“Craftmark_Pro-Grade.potx”,

generate a finished 10-slide PowerPoint deck (.pptx)
called:

“Craftmark_Who-the-Pros-Use_Retail-Intro.pptx”

Apply the theme exactly as defined. Do not override fonts,
colors, or layouts.

SLIDE CONTENT (use the theme layouts appropriately):

Slide 1 – Cover (Cover layout)
Title:
CRAFTMARK

Subtitle:
WHO THE PROS USE — NOW OPEN TO HOMEOWNERS

Supporting line:
Professional-grade countertops. Homeowner-ready experience.

Slide 2 – Why This Matters (Standard Content layout)
Title:
Why This Matters

Bullets:
• Homeowners want fewer surprises
• Builders already trust Craftmark
• That trust is our biggest advantage
• Opening Craftmark to homeowners extends what already works

Slide 3 – Positioning (Statement layout)
Title:
The countertops the pros use —
now available direct to homeowners.

Sub-line:
Built for professional expectations. Delivered for real homes.

Slide 4 – Why Pros Use Craftmark (Standard Content layout)
Title:
Why Professionals Choose Craftmark

Bullets:
• Consistent, repeatable quality
• Custom-built products
• Predictable process
• Professional installation standards

Slide 5 – Pro → Homeowner Translation (Translation layout)
Title:
What Pro Standards Mean for Homeowners

Left / Right pairs:
Precision → Better fit & finish
Process → Fewer delays
Repeatability → Consistent installs
Expertise → Long-term performance

Slide 6 – What We Build (Product List layout)
Title:
What We Build

Left column:
• Quartz countertops
• Natural stone countertops

Right column:
• Solid surface countertops
• Custom bath surfaces

Footer line:
Built to order. Installed professionally.

Slide 7 – How We’re Different (Split Comparison layout)
Title:
Craftmark vs Typical Retail

Left column header: Typical Retail
Bullets:
• Limited stock options
• Sales-driven process
• Outsourced installation

Right column header: Craftmark
Bullets:
• Built-to-order solutions
• Process-driven execution
• Professional installation teams

Slide 8 – What We Are / What We Are Not (Split Comparison layout)
Title:
What We Are — And What We Are Not

Left column header: We Are
Bullets:
• A trusted professional partner
• A custom manufacturer & fabricator
• A reliable option for homeowners

Right column header: We Are Not
Bullets:
• A discount showroom
• A DIY supplier
• A price-first alternative

Slide 9 – Our Promise (Standard Content layout)
Title:
Our Promise to Homeowners

Bullets:
• Clear guidance
• Honest timelines
• Professional installation
• A job done right the first time

Slide 10 – Call to Action (Statement layout)
Title:
The countertops the pros use
are now available to you.

Sub-line:
Visit Craftmark • Book a design consultation • Build with confidence

OUTPUT:
Save the finished .pptx file and make it available for download.
```

## A3) Create a Sales/Showroom theme variant (.potx)

```text
Create a second PowerPoint theme (.potx)
based on “Craftmark_Pro-Grade.potx”.

Name the new theme:
“Craftmark_Pro-Grade_Sales-Showroom.potx”

The theme must remain visually consistent
with the original, with the following changes only:

THEME ADJUSTMENTS:
- Slightly larger body text across all layouts (+2pt)
- Slightly increased line spacing (1.35)
- Stronger emphasis on Accent 1 for headers
- No structural layout changes
- Same fonts, colors, and master structure

INTENDED USE:
- Sales conversations
- Showroom presentations
- Homeowner-facing discussions
- Reading across a desk or display wall

LAYOUT RULE OVERRIDES:
- Bullets should be easier to scan quickly
- Headlines slightly bolder visually
- Maintain professional, non-salesy tone

DELIVERABLE:
Generate and save the new .potx theme file
and make it available for download.
```

---

# B) WEBSITE — Lead Gen + Multi-Audience + Colors + Remnants

## B1) Scaffold the new Craftmark website (Next.js)

```text
Build a production-ready Next.js (App Router) + TypeScript + Tailwind website
for Craftmark Countertops.

PRIMARY GOAL
Lead generation only.
No pricing, no ecommerce, no checkout.

PRIMARY CTAs
- Book a Design Consultation
- Request a Quote

CORE POSITIONING
“Who the pros use — now open to homeowners.”
Craftmark serves projects of ANY SIZE.

AUDIENCES
1) Homeowners
2) Builders
3) Commercial Contractors

SITE STRUCTURE (required routes)
- / (homepage with audience split)
- /homeowners
- /builders
- /commercial
- /products
- /process
- /projects
- /faq
- /book-consult
- /quote-request
- /contact

HOMEPAGE REQUIREMENTS
- Hero headline:
  “The countertops the pros use — now open to homeowners.”
- Subtext explaining Craftmark serves:
  homeowners, builders, commercial contractors, and large projects
- Three primary buttons:
  “For Homeowners” → /homeowners
  “For Builders” → /builders
  “For Commercial Contractors” → /commercial
- Proof bar:
  Trusted since 1979 · Custom-built · Projects of any size

HOMEOWNERS PAGE (/homeowners)
- Emphasize:
  Kitchen & bath remodels
  Fit & finish
  Professional install
  Fewer surprises
- CTAs:
  Book Consult
  Request Quote

BUILDERS PAGE (/builders)
- Emphasize:
  Volume capability
  Repeatability
  Scheduling reliability
  Single home → full developments
- Messaging:
  “From one project to hundreds — Craftmark scales with you.”
- CTA:
  Contact / Start a Conversation

COMMERCIAL PAGE (/commercial)
- Emphasize:
  reliability, repeatability, schedule, risk reduction, documentation readiness
- CTA:
  “Start a Commercial Conversation” (routes to /contact with commercial preselected)

PROJECTS PAGE (/projects)
- Clearly state:
  “Craftmark supports projects of any size”
- Sections:
  Small (single kitchens/baths)
  Medium (custom homes, remodels)
  Large (multi-unit, production, commercial)

FORMS
- Book Consult form:
  name, email, phone, zip, audience type, project description
- Quote Request form:
  same fields + approximate scope + desired material
- Thank you pages with next-steps copy

SEO / AI DISCOVERY
- Add LocalBusiness schema
- Add FAQPage schema with 20 FAQs covering:
  timelines, project size, homeowner vs builder vs commercial,
  service area, “cost expectations” without numbers
- Clear NAP in footer

STYLE
- Professional, clean, confident
- No sales hype
- No stock “happy remodel” clichés

DELIVERABLE
Generate all files.
Include README with:
- npm run dev
- build instructions
```

## B2) Reinforce “Projects of any size” everywhere

```text
Update copy across the site to consistently emphasize:
“Craftmark works on projects of any size.”

Add this concept to:
- Homepage
- Homeowners page
- Builders page
- Commercial page
- Projects page
- FAQ

Ensure messaging clearly covers:
- Single kitchen or bath remodels
- Custom homes
- Multi-home developments
- Commercial scopes

Do not introduce pricing or ecommerce language.
```

## B3) Build a Color Explorer (/colors)

```text
Create a new route /colors named “Color Explorer”.

DATA
- Add a data file at /data/colors.json.
- Populate it with a reasonable starter dataset structure:
  [
    {
      "material": "Quartz",
      "colorName": "Sterling White",
      "thicknessOptions": ["2cm","3cm"],
      "finish": "Polished",
      "tags": ["white","clean","subtle"],
      "image": "/images/colors/placeholder.jpg"
    }
  ]
- Build the UI so it works even with placeholder images.

FEATURES
- Filters: material, color family tag, search by name
- Color detail modal or page: shows CTA buttons
  - “Request Quote”
  - “Check Remnants”

INTEGRATION
- “Request Quote” links to /quote-request and pre-fills color name/material
- “Check Remnants” links to /remnants/request and pre-fills color name/material

Keep this lead-gen only. Do not add pricing.
```

## B4) Remnants feature (public list + request workflow)

```text
Create remnant functionality.

ROUTES
- /remnants (public overview + filters + disclaimer + “Request Remnant” CTA)
- /remnants/request (form page)
- /api/remnants (API endpoint placeholder for future live feed)

STAGE A (NOW)
- Add /data/remnants.json with a few sample entries.
- Show a grid with filters: material, color, thickness, minimum size.
- Add a clear disclaimer:
  “Remnant availability changes quickly. Submit a request and our team will confirm what’s available.”

REQUEST FORM
Fields:
- Name
- Company (optional)
- Email
- Phone
- Zip / service area
- Audience type (Homeowner / Builder / Commercial Contractor)
- Desired material
- Desired color
- Minimum size (inches or sqft)
- Timing (ASAP / This month / Flexible)
- Notes

On submit:
- Save submission to a simple local JSON store OR a placeholder function
  (write it so we can later swap to SharePoint/CRM easily)
- Show Thank You page with next steps text

STAGE B (FUTURE-READY)
- Build /api/remnants so it reads from /data/remnants.json today,
  but is structured so we can swap the data source later.

No pricing. No checkout.
```

## B5) (Optional) Showroom Mode website route (/showroom)

```text
Create a Showroom Mode route at /showroom.

Constraints:
- Larger text
- Shorter sections
- Visual-forward layout
- Clear scrolling narrative:
  Who We Are → What We Build → Projects of Any Size → Book Consult

CTAs:
- Book Consult
- Request Quote

Purpose:
Use on showroom screens, iPads, or during sales conversations.
```

## B6) GEO/SEO quick win: FAQ schema on Home + FAQ page

```text
Add an FAQ section to the Home page and a full FAQ page.
Create 20 FAQs homeowners, builders, and commercial contractors actually ask
(timeline, materials, seams, sinks, service area, “projects of any size”, how quoting works).

Add FAQPage JSON-LD schema markup.
Ensure NAP (name/address/phone) is consistent and visible in footer.
```

## B7) Deployment prompt (Next.js → Vercel)

```text
Prepare this Next.js project for deployment to Vercel.
Add build scripts, confirm environment variables needed for the contact forms,
and produce a short DEPLOYMENT.md with steps:
GitHub push → Vercel import → build → domain connect.

Also include:
- sitemap generation
- robots.txt
- basic performance checklist
```

---

# C) OPTIONAL — Data ingestion prompts (when you’re ready)

## C1) Convert an Excel color list to /data/colors.json

```text
I will provide an Excel file export of our color list.
Write a small script in /scripts/excel-to-colors-json.ts (or .py) that:
- Reads the Excel file
- Extracts material + color name + any IDs
- Outputs /data/colors.json in the schema used by /colors
- Adds reasonable tags by simple heuristics (white/gray/beige/dark) based on name
- Leaves images as placeholder paths

Include README instructions on running the script.
```

## C2) Convert a remnant list to /data/remnants.json

```text
I will provide an Excel/CSV export of remnants.
Create a script to convert that export to /data/remnants.json.
Fields should include:
RemnantID, Material, ColorName, Thickness, Finish, Size, Location, Status, LastUpdated, PhotoURL.

Update /remnants to display these fields.
```

---

# D) OPTIONAL — Form routing prompts (email now, SharePoint later)

## D1) Email submissions now + clean swap path later

```text
Implement form submission handlers so that today:
- Book Consult and Quote Request send an email notification (SMTP or provider stub)
- Also write submissions to a local JSON file in /data/submissions/ for dev

Design it so later we can replace the storage with SharePoint/CRM by swapping one module.
Provide clear separation: ui → api route → storage adapter.
```

## D2) SharePoint integration stub

```text
Create a storage adapter stub for SharePoint list writes.
Do not hardcode credentials.
Read from environment variables.
Provide a clear interface for createLead() and createRemnantRequest().
```

---

## Notes
- If Cursor starts to hand-wave, add: “Write real code only. No pseudocode. Ensure it runs.”
- If it introduces pricing: “Remove all pricing references. Lead-gen only.”

