/** Shared eyebrow size (home + section pages). */
const sectionEyebrowSizeClassName =
    "text-lg tracking-[0.12em] md:text-xl md:tracking-[0.1em]";

/** Size override for SectionHeader (pairs with its text-xs base). */
export const homeEyebrowClassName = sectionEyebrowSizeClassName;

/** Standalone section eyebrows (e.g. About page). */
export const primaryEyebrowClassName = `font-semibold uppercase text-cnf-primary ${sectionEyebrowSizeClassName}`;

export const accentEyebrowClassName = `font-semibold uppercase text-cnf-accent ${sectionEyebrowSizeClassName}`;

/** Shared background for Who we are, Results, and Voices sections. */
export const homeSoftSectionClassName = "!bg-cnf-primary-soft text-cnf-ink";
