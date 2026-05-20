export type TrustPoint = {
    id: string;
    title: string;
    description: string;
};
export const trustPoints: TrustPoint[] = [
    {
        id: "secure",
        title: "Secure Payments",
        description: "All online donations processed securely via Korapay, a trusted Nigerian payment platform.",
    },
    {
        id: "transparent",
        title: "Full Transparency",
        description: "Our Annual Report is publicly available. See exactly how every naira is deployed.",
    },
    {
        id: "registered",
        title: "Registered NGO",
        description: "CAC registered (No. 7511818). A legitimate, accountable Nigerian non-profit organisation.",
    },
    {
        id: "direct-impact",
        title: "Direct Impact",
        description: "No donation is wasted on unnecessary overhead. Our \u223C12% overhead ratio keeps funds where they belong.",
    },
];
