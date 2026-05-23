const EMPTY = "—";

function orEmpty(value: string | null | undefined): string {
    const trimmed = value?.trim();
    return trimmed ? trimmed : EMPTY;
}

export function partnershipTemplateVariables(data: {
    firstName: string;
    lastName: string;
    email: string;
    phone?: string | null;
    organisation: string;
    country: string;
    pillars: string[];
    message: string;
}): Record<string, string> {
    return {
        FULL_NAME: `${data.firstName} ${data.lastName}`,
        SUBMITTER_EMAIL: data.email,
        PHONE: orEmpty(data.phone),
        ORGANISATION: data.organisation,
        COUNTRY: data.country,
        PILLARS: data.pillars.join(", "),
        MESSAGE: data.message,
    };
}

export function contactTemplateVariables(data: {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
}): Record<string, string> {
    return {
        FULL_NAME: data.name,
        SUBMITTER_EMAIL: data.email,
        PHONE: orEmpty(data.phone),
        SUBJECT: data.subject,
        MESSAGE: data.message,
    };
}

export function volunteerTemplateVariables(data: {
    firstName: string;
    lastName: string;
    email: string;
    phone?: string | null;
    city: string;
    country: string;
    volunteerArea: string;
    priorExperience: string;
    priorOrganisation?: string | null;
    leadershipOpenness: string;
    idType: string;
}): Record<string, string> {
    return {
        FULL_NAME: `${data.firstName} ${data.lastName}`,
        SUBMITTER_EMAIL: data.email,
        PHONE: orEmpty(data.phone),
        LOCATION: `${data.city}, ${data.country}`,
        VOLUNTEER_AREA: data.volunteerArea,
        PRIOR_EXPERIENCE: data.priorExperience,
        PRIOR_ORGANISATION: orEmpty(data.priorOrganisation),
        LEADERSHIP: data.leadershipOpenness,
        ID_TYPE: data.idType,
    };
}

export function careersProfileTemplateVariables(data: {
    firstName: string;
    lastName: string;
    email: string;
    areaOfExpertise: string;
    briefIntroduction: string;
}): Record<string, string> {
    return {
        FULL_NAME: `${data.firstName} ${data.lastName}`,
        SUBMITTER_EMAIL: data.email,
        EXPERTISE: data.areaOfExpertise,
        INTRODUCTION: data.briefIntroduction,
    };
}

export function donateIntentTemplateVariables(data: {
    name: string;
    email: string;
    phone?: string | null;
    pledgeAmount?: string | null;
    message: string;
}): Record<string, string> {
    return {
        FULL_NAME: data.name,
        SUBMITTER_EMAIL: data.email,
        PHONE: orEmpty(data.phone),
        PLEDGE_AMOUNT: orEmpty(data.pledgeAmount),
        MESSAGE: data.message,
    };
}

export function newsletterTemplateVariables(data: { name: string; email: string }): Record<string, string> {
    return {
        FULL_NAME: data.name,
        SUBMITTER_EMAIL: data.email,
    };
}

export function careersNewsletterTemplateVariables(data: { email: string }): Record<string, string> {
    return {
        SUBMITTER_EMAIL: data.email,
    };
}
