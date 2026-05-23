import { site } from "@/lib/site";

/** Destination inboxes for form notification emails. */
export type FormInbox = "partnership" | "programmes" | "media";

export const FORM_INBOX_ADDRESSES: Record<FormInbox, string> = {
    partnership: site.partnershipsEmail,
    programmes: site.programmesEmail,
    media: site.mediaEmail,
};
