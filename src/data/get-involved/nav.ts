/** Get Involved sub-routes (also used in main nav dropdown). */
export const getInvolvedRoutes = {
    partnership: {
        href: "/get-involved/partnership",
        label: "Partnership",
    },
    volunteer: {
        href: "/get-involved/volunteer",
        label: "Volunteer",
    },
    careers: {
        href: "/get-involved/careers",
        label: "Careers",
    },
} as const;

export const getInvolvedNavChildren = [
    getInvolvedRoutes.partnership,
    getInvolvedRoutes.volunteer,
    getInvolvedRoutes.careers,
] as const;
