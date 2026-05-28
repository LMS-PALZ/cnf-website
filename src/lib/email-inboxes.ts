import { site } from "@/lib/site";

/** Destination inboxes for form notification emails. */
export type FormInbox = "info" | "partnership" | "programmes" | "media";

export const FORM_INBOX_ADDRESSES: Record<FormInbox, string> = {
    info: site.infoEmail,
    partnership: site.partnershipsEmail,
    programmes: site.programmesEmail,
    media: site.mediaEmail,
};
