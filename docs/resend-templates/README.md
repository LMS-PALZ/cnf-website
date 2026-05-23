# Resend email templates (one per form)

Create **7 templates** in [Resend](https://resend.com/templates). Each has a fixed layout (header, body table, footer) and its own variables.

## Setup

1. **Create template** → paste HTML from the matching file below  
2. **From:** `CNF Website <noreply@chiggynsoforfoundation.org>`  
3. **Subject:** see table (the app also sends a subject on each API call)  
4. Add variables listed (type **string**, fallback `—`)  
5. **Publish** the template  
6. Copy the template ID into Vercel / `.env`

Do **not** use reserved names: `EMAIL`, `FIRST_NAME`, `LAST_NAME`, `contact`, `this`. We use `SUBMITTER_EMAIL`, `FULL_NAME`, etc.

## Templates

| File | Resend name | Subject | Env variable | Variables |
|------|-------------|---------|--------------|-----------|
| `partnership.html` | CNF — Partnership | New partnership enquiry (CNF website) | `RESEND_TEMPLATE_PARTNERSHIP` | FULL_NAME, SUBMITTER_EMAIL, PHONE, ORGANISATION, COUNTRY, PILLARS, MESSAGE |
| `contact.html` | CNF — Contact | New contact message (CNF website) | `RESEND_TEMPLATE_CONTACT` | FULL_NAME, SUBMITTER_EMAIL, PHONE, SUBJECT, MESSAGE |
| `volunteer.html` | CNF — Volunteer | New volunteer application (CNF website) | `RESEND_TEMPLATE_VOLUNTEER` | FULL_NAME, SUBMITTER_EMAIL, PHONE, LOCATION, VOLUNTEER_AREA, PRIOR_EXPERIENCE, PRIOR_ORGANISATION, LEADERSHIP, ID_TYPE |
| `careers-profile.html` | CNF — Careers profile | New careers profile (CNF website) | `RESEND_TEMPLATE_CAREERS_PROFILE` | FULL_NAME, SUBMITTER_EMAIL, EXPERTISE, INTRODUCTION |
| `donate-intent.html` | CNF — Donate | New donor interest (CNF website) | `RESEND_TEMPLATE_DONATE_INTENT` | FULL_NAME, SUBMITTER_EMAIL, PHONE, PLEDGE_AMOUNT, MESSAGE |
| `newsletter.html` | CNF — Newsletter | Newsletter signup (CNF website) | `RESEND_TEMPLATE_NEWSLETTER` | FULL_NAME, SUBMITTER_EMAIL |
| `careers-newsletter.html` | CNF — Careers signup | Careers interest signup (CNF website) | `RESEND_TEMPLATE_CAREERS_NEWSLETTER` | SUBMITTER_EMAIL |

## Env block

```env
RESEND_TEMPLATE_PARTNERSHIP=
RESEND_TEMPLATE_CONTACT=
RESEND_TEMPLATE_VOLUNTEER=
RESEND_TEMPLATE_CAREERS_PROFILE=
RESEND_TEMPLATE_DONATE_INTENT=
RESEND_TEMPLATE_NEWSLETTER=
RESEND_TEMPLATE_CAREERS_NEWSLETTER=
```

If a template ID is missing for a form, that form uses built-in HTML until you add it.

## Layout

- **Header** — green band, CNF name, tagline  
- **Body** — form title, intro, data table with submission fields  
- **Footer** — address, phone, website, CAC (full forms) or compact footer (newsletter templates)

Optional fields left blank on the website are sent as `—` in the email.
