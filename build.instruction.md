# Chiggy Foundation for Opportunity: Website Build Instruction (for Cursor / Any Next.js Repo)

**Purpose:** Hand this document to an AI or developer to **build a complete marketing + forms site** for the **Chiggy Foundation for Opportunity (CFO)**. It is **not** tied to the Glantra e-commerce codebase; copy this file into a **new** Next.js project root (e.g. `BUILD.md` or `build.instruction.md`).

**Design source note:** Several **Claude artifact** links were provided as visual references. Automated fetching of those URLs only recovered **page titles and shell text**, not the full HTML/CSS of each artifact. This spec is therefore **scoped to match those titles** and a coherent nonprofit site structure. After the first build, **open the original artifact links in a browser** and adjust spacing, typography, and colors to match the designs pixel-for-pixel where they differ.

**Original artifact references (for human review):**

| Order | URL (public artifact) | Inferred page / focus |
|-------|------------------------|------------------------|
| 1 | `.../e3993a2d-1dd1-450a-8b6e-ca5888a9c9fe` | **News & Impact Stories** |
| 2 | `.../6d964dfa-88a7-4219-b7f6-e6824567c27b` | **Donate**: Support Nigerian Communities |
| 3 | `.../901cca11-b956-49bd-b8fd-a0bebe8d9990` | **CNF Projects**: Impact Across **Three Pillars** |
| 4 | `.../29edf286-79cb-4755-a840-cfb9aecd526c` | **Our Work** |
| 5 | `.../0d2ab507-9c0c-4b38-afc7-df6efbf4f2ce` | **Skill Scale-Up Programme**: Free Youth Training in Nigeria |
| 6 | `.../8cf95ce3-f934-4766-907b-4f19aadb797a` | **Home**: Skills, Education & Humanitarian Aid |
| 7 | `.../762bc533-6d16-4389-ba09-808225b0a5c0` | **About**: Mission & Impact |
| 8 | `.../2b93a69e-a336-4168-a353-bcff6e4ab9d6` | **Get Involved**: Partner, Volunteer, Careers |

---

## 1. Project identity

| Field | Value |
|--------|--------|
| **Organization** | Chiggy Foundation for Opportunity (short: **CNF** where it reads well) |
| **One-line promise** | A Nigerian nonprofit advancing **skills**, **education**, and **humanitarian aid** in communities. |
| **Geography (copy)** | Nigeria (communities; align with real programme locations when you have them). |
| **Tone** | Clear, dignified, hopeful, transparent. Avoid sensationalism. |

---

## 2. Tech stack (required)

| Layer | Choice |
|--------|--------|
| **Framework** | **Next.js** (App Router), **TypeScript** |
| **UI** | **React 18+**, **Tailwind CSS 3** |
| **Feedback** | **react-hot-toast** (or `sonner` if preferred; one toast library site-wide) |
| **Forms** | **Server-side handling only** for submissions: **Server Actions** (preferred) or **Route Handlers** `POST` under `app/api/.../route.ts` |
| **Validation** | **Zod** (recommended) or **Yup**; validate on server; mirror errors to client if using client form state |
| **Optional email** | **Resend**, **Nodemailer + SMTP**, or **Store in DB**; never expose API keys to the client |

**Do not** send foundation forms (volunteer, contact, etc.) to a public client-side endpoint without server validation. **Environment variables** for secrets: `RESEND_API_KEY` or `SMTP_*`, etc.

**Node:** `>= 20.9` or as per `create-next-app` defaults.

---

## 3. Suggested information architecture and routes

Map **1:1** to the eight artifacts as primary pages. Use clean URLs (kebab-case).

| Route | Page name | Intent |
|--------|-----------|--------|
| `/` | **Home** | Hero, foundation name, **three pillars** (Skills, Education, Humanitarian) as cards or band, key stats (placeholder if unknown), CTAs: **Donate**, **Get Involved**, link to **Our Work** / **Projects** |
| `/about` | **About** | Mission, vision, values, **impact** summary, optional timeline, leadership or founder blurb (placeholders) |
| `/our-work` | **Our Work** | Narrative + links into programmes; bridge page before deep dives |
| `/projects` | **CNF Projects** | **Three pillars** with equal visual weight. Each pillar: short description, outcomes, 1-2 image placeholders, link to **Skill Scale-Up** or other subprogrammes as relevant |
| `/programmes/skill-scale-up` (or `/skill-scale-up`) | **Skill Scale-Up Programme** | Long-form: **free youth training** in Nigeria, eligibility, locations (TBC), how to apply (CTA to form on **Get Involved** or inline **application** section) |
| `/news` | **News & Impact Stories** | List of stories (static MD/JSON in v1, or MDX; optional `news/[slug]` for detail) |
| `/donate` | **Donate** | **Support Nigerian communities**; explain use of funds; **bank / payment instructions** (placeholders: “Details provided after verification with finance” if needed), optional **recurring** copy; **donor interest form** (name, email, message, amount optional) **POST** to server |
| `/get-involved` | **Get Involved** | Three **sections** (or tabs on mobile): **Partner** (org partnerships), **Volunteer** (form), **Careers** (link or email + small form) |

**Global:** **Header** with logo text or SVG placeholder, **nav links** to all main sections, **Donate** as primary button, **hamburger** on small screens. **Footer:** About snippet, address/email placeholders, **Privacy Policy** link, social icons (placeholder `href="#"` or hide until real).

**404:** Friendly page with link home.

**SEO:** `metadata` per page (title, description, `openGraph` basic). Use `metadataBase` from env `NEXT_PUBLIC_SITE_URL`.

---

## 4. Content model: three pillars (lock this in)

The **Projects** and **Home** artifacts refer to **three pillars**. **Standardize** on:

1. **Skills** - Livelihoods, employability, **Skill Scale-Up** and related training.
2. **Education** - Access, quality, materials, scholarships (as applicable; placeholder text until real programmes are confirmed).
3. **Humanitarian aid** - Relief, community support, emergency response (wording to match the foundation’s real scope).

**Each pillar** should have: title, 2-3 sentence description, 1 **placeholder image** (`/images/pillar-*.jpg` or `next/image` + remote placeholder), and cross-links to **Our Work** and relevant programme pages.

---

## 5. Page-by-page build notes (for implementers)

### 5.1 Home (`/`)

- Hero: full-width or max-width, headline: foundation name + subhead **Skills, Education & Humanitarian Aid** (per artifact 6).
- **Three pillar** preview (icons or small cards) linking to `/projects#pillar-X` or `/projects` with hash scroll.
- **Optional:** impact numbers (e.g. “+X youth trained” with “Figures updated annually” disclaimer if placeholder).
- **CTA row:** **Donate** (primary), **Get Involved** (secondary), **Read our stories** → `/news`.
- **Mobile:** stack CTAs, readable font sizes, no horizontal scroll.

### 5.2 About (`/about`)

- Mission, vision, values (bulleted).
- “Why we exist” and Nigeria/community focus.
- **Impact** section: qualitative + optional metrics.
- CTA: Donate, Get Involved.

### 5.3 Our Work (`/our-work`)

- Overview of how CNF works (programme delivery, partners, volunteers).
- Cards linking to **Projects** and **Skill Scale-Up**.

### 5.4 CNF Projects: Three Pillars (`/projects`)

- Page title: **CNF Projects** and subtitle **Impact Across Three Pillars** (per artifact 3).
- **Three** distinct sections (anchor IDs: `skills`, `education`, `humanitarian` or `pillar-1` etc.).
- Consistent card layout, accessible headings (`h1` once, then `h2` per pillar).

### 5.5 Skill Scale-Up Programme (dedicated page)

- Title from artifact 5: **Free Youth Training in Nigeria** (or equivalent).
- Sections: **About the programme**, **Who it is for**, **What you learn** (placeholders: digital skills, entrepreneurship, etc. as TBC), **Locations / cohorts** (TBC), **How to apply** → button to `/get-involved#volunteer` or a dedicated `apply` anchor with **form** (server-handled).

### 5.6 News & Impact Stories (`/news`)

- **Grid or list** of cards: title, date, excerpt, “Read more” to `/news/[slug]` or expand inline in v1.
- **V1 data:** `content/news/*.md` or a `src/data/news.json` array; no CMS required for MVP.
- **Optional:** tag “Impact” vs “Update”.

### 5.7 Donate (`/donate`)

- Headline: **Support Nigerian Communities** (per artifact 2).
- **Transparency copy:** how donations help (placeholders).
- **Payment methods block:** bank name, account name, number as **env-driven** or **placeholder** with note “Contact finance@…”
- **Form fields (example):** name, email, phone optional, message, optional pledge amount, consent checkbox (privacy).
- **Submit:** `POST` → Server Action or API route: validate, save (JSON file/DB) and/or **send email to foundation inbox**, return success; **toast** on client.

### 5.8 Get Involved (`/get-involved`)

- Intro paragraph.
- **Partner:** what partnership means, contact: `partnerships@...` (placeholder).
- **Volunteer:** fields (name, email, city, skills, availability, message) → **server** + toast.
- **Careers:** short copy + “We post openings here and on LinkedIn” or **upload CV** link later; for MVP a simple **interest form** (role interest, email, file optional if you add storage later; else email-only).

---

## 6. Forms, server, and toasts (implementation rules)

1. **Client:** `react-hook-form` optional; `fetch` to Server Action via form `action` **or** `fetch('/api/...')` with `credentials: 'same-origin'`.
2. **Server:** parse body, **Zod** parse, return `{ ok: true }` or `{ error: '...' }` / `fieldErrors`.
3. **Client after submit:** on success, **`toast.success('...')`**, reset form. On error, **`toast.error(message)`** and show field errors if any.
4. **Rate limiting:** for production, add simple rate limit on IP (middleware or upstash) or hCaptcha; document as TODO.
5. **No secrets in client** for email; use `process.env` in Route Handler / Server Action only.

**Example form endpoints (suggested):**

- `POST /api/forms/contact` (general, if you add global contact)
- `POST /api/forms/donate-intent` (donate page)
- `POST /api/forms/volunteer` (get involved)
- Or single `app/actions/forms.ts` with `submitVolunteerForm(prev, formData)`.

**Persistence MVP:** append JSON lines to `data/submissions-*.log.json` in dev, or a SQLite/Postgres table in production. **At minimum** log server-side and email admin.

---

## 7. Styling and design system (NGO-appropriate)

Since full artifact CSS was not extracted:

- **Approach A:** **CSS variables** in `globals.css`: `--color-primary` (e.g. deep green), `--color-accent` (e.g. gold or warm orange), **neutral** text (`slate`/`stone` Tailwind).
- **Approach B:** When reviewing artifacts in browser, **copy hex values** from DevTools and paste into `tailwind.config` `extend.colors` as `cnf: { primary: '...', accent: '...' }`.
- **Typography:** One **display** font (e.g. **Fraunces**, **Playfair**, or **DM Serif**) + one **UI sans** (e.g. **Inter**, **Source Sans 3**) via `next/font/google`.
- **Spacing:** Generous section padding `py-16 md:py-24`, `max-w-6xl` or `7xl` content width.
- **Imagery:** `next/image`, `sizes` for responsive, placeholder from **Unsplash** or solid blocks until assets exist.
- **Buttons:** large tap targets, focus rings for keyboard users.
- **Motion:** subtle only (Framer Motion optional); respect `prefers-reduced-motion`.

---

## 8. Mobile web (not native apps)

- **All** pages must be **usable in mobile Safari/Chrome** (your earlier definition of mobile).
- **Viewport:** default Next metadata is fine; test **375px** width.
- **Form inputs:** use **`text-base` (16px+)** on inputs/textarea to reduce iOS zoom-on-focus.
- **Nav:** collapse to **hamburger** or **bottom-optional** pattern; this spec assumes **header hamburger** for parity with common foundation sites.

---

## 9. Accessibility and SEO (baseline)

- Semantic landmarks: `header`, `main`, `footer`, `nav` with `aria-label` when multiple navs.
- **h1** once per page; logical heading order.
- **Alt text** on all meaningful images; decorative images `alt=""`.
- **Links** descriptive (“Read about Skill Scale-Up” not “Click here”).
- **Sitemap** `app/sitemap.ts` and **robots.txt** optional in v1.

---

## 10. Legal and policy

- **`/privacy`** or **`/privacy-policy`**: short privacy page (data you collect on forms, cookies, contact).
- **Donate / forms:** state how data is used and retention.
- If you later add real **online payments** (Paystack, Stripe Nigeria, etc.), add **refund/charity** disclosure with counsel.

---

## 11. Environment variables (template)

```env
NEXT_PUBLIC_SITE_NAME=Chiggy Foundation for Opportunity
NEXT_PUBLIC_SITE_URL=https://chiggynsoforfoundation.org
NEXT_PUBLIC_CONTACT_EMAIL=programmes@cnfhq.org

# Resend (required for form email delivery)
# Send from the domain verified in Resend; deliver to @cnfhq.org team inboxes.
RESEND_API_KEY=
RESEND_FROM=CNF Website <noreply@chiggynsoforfoundation.org>
RESEND_SENDING_DOMAIN=chiggynsoforfoundation.org

# Optional inbox overrides
# PARTNERSHIPS_EMAIL=partnerships@cnfhq.org
# PROGRAMMES_EMAIL=programmes@cnfhq.org
# MEDIA_EMAIL=media@cnfhq.org
```

**Form routing:** partnership → `partnerships@cnfhq.org`; contact, volunteer, careers, donate → `programmes@cnfhq.org`; newsletter → `media@cnfhq.org`. **Sending domain** (`from`) is `chiggynsoforfoundation.org`; **receiving inboxes** are on `cnfhq.org`. Notification HTML is built in `src/lib/email/form-notification-template.ts`.

---

## 12. File structure (suggested for the new project)

```
app/
  layout.tsx
  page.tsx
  about/page.tsx
  our-work/page.tsx
  projects/page.tsx
  programmes/skill-scale-up/page.tsx
  news/page.tsx
  news/[slug]/page.tsx   # optional
  donate/page.tsx
  get-involved/page.tsx
  privacy/page.tsx
  not-found.tsx
  api/
    forms/.../route.ts   # or actions only
  globals.css
components/
  site/
    SiteHeader.tsx
    SiteFooter.tsx
  sections/...
content/
  news/   # or data/news.json
lib/
  site.ts
  email.ts
public/
  images/
```

---

## 13. Build order (for Cursor or a developer)

1. Scaffold **Next + TS + Tailwind + ESLint**, add **react-hot-toast** provider in root layout.
2. **Global** layout, header, footer, nav to all routes.
3. Build **Home** + **About** (static first).
4. **Projects (three pillars)** + **Our Work** + **Skill Scale-Up** (static copy + images).
5. **Donate** + **Get Involved** with **server** form handling + toasts.
6. **News** (static data).
7. **Polish** metadata, 404, privacy, a11y pass, **mobile** pass at 375px.
8. **Reconcile** with Claude artifact UIs: open the eight links, adjust colors, spacing, and section order to match.

---

## 14. Out of scope for v1 (unless you add explicitly)

- CMS (Sanity, Contentful).
- Auth / admin panel for non-technical editors.
- Real payment processor (only when finance approves; keep donate page honest).
- Full **multilingual** (English first; Yoruba/Igbo/Hausa as future `next-intl` if needed).

---

## 15. Success criteria (review checklist)

- [ ] All **eight** page themes from the artifact list exist and are linked from the nav.
- [ ] **Three pillars** are clear on Home and on Projects.
- [ ] **Skill Scale-Up** is findable and explains **youth training in Nigeria** (TBC where needed).
- [ ] **Donate** and **Get Involved** forms **only** submit through **server** code; **toasts** confirm success or show errors.
- [ ] **Mobile** layout is readable and navigable; no obvious horizontal overflow.
- [ ] **Privacy** page linked in footer; contact methods plausible placeholders.

---

*End of Chiggy Foundation for Opportunity build instruction. Copy this file into the target project and attach it to your Cursor / AI session as the primary spec.*