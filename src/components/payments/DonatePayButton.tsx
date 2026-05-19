"use client";

import dynamic from "next/dynamic";

/** Client-only pay triggers — reliable on Vercel when used from server-rendered pages. */
export const DonatePayButton = dynamic(
    () => import("./donate-pay-button-impl").then((m) => m.DonatePayButton),
    { ssr: false },
);

export const DonatePayLinkButton = dynamic(
    () => import("./donate-pay-button-impl").then((m) => m.DonatePayLinkButton),
    { ssr: false },
);
