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
            lines.push(`${field.label}: ${field.value}`);
        }
    }

    if (content.messageBody?.trim()) {
        lines.push("", content.messageLabel ?? "Message", content.messageBody.trim());
    }

    const text = lines.join("\n");

    const fieldRows = content.fields
        .filter((field) => field.value.trim())
        .map(
            (field) =>
                `<tr><td style="padding:8px 12px 8px 0;color:#64748b;font-size:14px;vertical-align:top;white-space:nowrap;">${escapeHtml(field.label)}</td><td style="padding:8px 0;color:#0f172a;font-size:14px;">${escapeHtml(field.value)}</td></tr>`,
        )
        .join("");

    const messageBlock = content.messageBody?.trim()
        ? `<div style="margin-top:20px;padding-top:16px;border-top:1px solid #e2e8f0;"><p style="margin:0 0 8px;font-size:12px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:#64748b;">${escapeHtml(content.messageLabel ?? "Message")}</p><p style="margin:0;font-size:14px;line-height:1.6;color:#0f172a;white-space:pre-wrap;">${escapeHtml(content.messageBody.trim())}</p></div>`
        : "";

    const html = `<!DOCTYPE html>
<html lang="en">
  <body style="margin:0;padding:24px;background:#f8fafc;font-family:system-ui,-apple-system,Segoe UI,sans-serif;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:560px;margin:0 auto;background:#ffffff;border:1px solid #e2e8f0;border-radius:12px;">
      <tr>
        <td style="padding:24px;">
          <p style="margin:0 0 8px;font-size:12px;font-weight:600;letter-spacing:0.12em;text-transform:uppercase;color:#166534;">CNF Website</p>
          <h1 style="margin:0 0 12px;font-size:20px;line-height:1.3;color:#0f172a;">${escapeHtml(content.title)}</h1>
          ${content.intro ? `<p style="margin:0 0 16px;font-size:14px;line-height:1.6;color:#475569;">${escapeHtml(content.intro)}</p>` : ""}
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0">${fieldRows}</table>
          ${messageBlock}
        </td>
      </tr>
    </table>
  </body>
</html>`;

    return { text, html };
}
