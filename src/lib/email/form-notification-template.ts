import { site } from "@/lib/site";

export type FormNotificationField = {
    label: string;
    value: string;
};

export type FormNotificationContent = {
    title: string;
    intro?: string;
    fields: FormNotificationField[];
    messageLabel?: string;
    messageBody?: string;
};

function escapeHtml(value: string): string {
    return value
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
}

function buildFieldRowsHtml(fields: FormNotificationField[]): string {
    const filtered = fields.filter((field) => field.value.trim());
    if (filtered.length === 0) {
        return "";
    }

    return filtered
        .map(
            (field, index) =>
                `<tr style="background-color:${index % 2 === 0 ? "#ffffff" : "#f8fafc"};"><td style="padding:12px 16px;border-bottom:1px solid #e2e8f0;font-family:system-ui,-apple-system,'Segoe UI',Roboto,sans-serif;font-size:13px;font-weight:600;color:#475569;vertical-align:top;width:36%;">${escapeHtml(field.label)}</td><td style="padding:12px 16px;border-bottom:1px solid #e2e8f0;font-family:system-ui,-apple-system,'Segoe UI',Roboto,sans-serif;font-size:14px;color:#0f172a;line-height:1.5;vertical-align:top;">${escapeHtml(field.value.trim())}</td></tr>`,
        )
        .join("");
}

function buildMessageSectionHtml(content: FormNotificationContent): string {
    if (!content.messageBody?.trim()) {
        return "";
    }
    return `<table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="margin-top:24px;"><tr><td style="background-color:#f8fafc;border-left:4px solid #166534;border-radius:0 8px 8px 0;padding:16px 20px;font-family:system-ui,-apple-system,'Segoe UI',Roboto,sans-serif;"><p style="margin:0 0 8px;font-size:11px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#166534;">${escapeHtml(content.messageLabel ?? "Message")}</p><p style="margin:0;font-size:14px;line-height:1.65;color:#0f172a;white-space:pre-wrap;">${escapeHtml(content.messageBody.trim())}</p></td></tr></table>`;
}

function buildEmailShell(bodyInnerHtml: string): string {
    const siteUrl = site.url.replace(/\/$/, "");
    return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </head>
  <body style="margin:0;padding:0;background-color:#eef2f6;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color:#eef2f6;">
      <tr>
        <td align="center" style="padding:32px 16px;font-family:system-ui,-apple-system,'Segoe UI',Roboto,sans-serif;">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width:600px;">
            <tr>
              <td style="background:linear-gradient(135deg,#14532d,#166534);border-radius:12px 12px 0 0;padding:24px 28px;">
                <p style="margin:0 0 4px;font-size:11px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:#bbf7d0;">Website notification</p>
                <p style="margin:0;font-size:22px;font-weight:700;color:#fff;">${escapeHtml(site.name)}</p>
                <p style="margin:6px 0 0;font-size:13px;color:#dcfce7;">${escapeHtml(site.tagline)}</p>
              </td>
            </tr>
            <tr>
              <td style="background:#fff;border-left:1px solid #e2e8f0;border-right:1px solid #e2e8f0;padding:28px;">
                ${bodyInnerHtml}
              </td>
            </tr>
            <tr>
              <td style="background:#0f172a;border-radius:0 0 12px 12px;padding:24px 28px;text-align:center;">
                <p style="margin:0 0 6px;font-size:14px;font-weight:700;color:#fff;">${escapeHtml(site.name)}</p>
                <p style="margin:0 0 12px;font-size:12px;line-height:1.5;color:#94a3b8;">${escapeHtml(site.address)} · ${escapeHtml(site.phone)}</p>
                <p style="margin:0 0 8px;font-size:12px;"><a href="${escapeHtml(siteUrl)}" style="color:#4ade80;text-decoration:none;">${escapeHtml(siteUrl.replace(/^https?:\/\//, ""))}</a></p>
                <p style="margin:0;font-size:11px;color:#64748b;">${escapeHtml(site.registrationLine)}</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

export function buildFormNotificationEmail(content: FormNotificationContent): {
    text: string;
    html: string;
} {
    const lines: string[] = [content.title];
    if (content.intro) {
        lines.push("", content.intro);
    }

    lines.push("");
    for (const field of content.fields) {
        if (field.value.trim()) {
            lines.push(`${field.label}: ${field.value.trim()}`);
        }
    }

    if (content.messageBody?.trim()) {
        lines.push("", content.messageLabel ?? "Message", content.messageBody.trim());
    }

    const text = lines.join("\n");
    const fieldRows = buildFieldRowsHtml(content.fields);
    const messageBlock = buildMessageSectionHtml(content);

    const bodyInner = `
      <h2 style="margin:0 0 10px;font-size:20px;font-weight:700;color:#0f172a;border-bottom:3px solid #166534;padding-bottom:16px;">${escapeHtml(content.title)}</h2>
      ${content.intro ? `<p style="margin:0 0 20px;font-size:15px;line-height:1.6;color:#475569;">${escapeHtml(content.intro)}</p>` : ""}
      <p style="margin:0 0 12px;font-size:11px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#166534;">Submission details</p>
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="border:1px solid #e2e8f0;border-radius:8px;overflow:hidden;">
        <tr style="background:#f1f5f9;">
          <th align="left" style="padding:12px 16px;width:36%;font-size:12px;color:#64748b;text-transform:uppercase;">Field</th>
          <th align="left" style="padding:12px 16px;font-size:12px;color:#64748b;text-transform:uppercase;">Response</th>
        </tr>
        ${fieldRows}
      </table>
      ${messageBlock}`;

    const html = buildEmailShell(bodyInner);

    return { text, html };
}
