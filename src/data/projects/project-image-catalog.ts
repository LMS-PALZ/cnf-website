/** Stock photos for project cards — swap paths here when final event photos are ready. */
export type ProjectImage = {
    src: string;
    alt: string;
};

export const MAX_PROJECT_CARD_IMAGES = 8;

const COHORT_1_BASE = "/assets/projects/COHORT%201";

/** CNF Launches the Skill Scale-Up Programme — `public/assets/projects/COHORT 1/` */
export const cohort1ProjectImages: ProjectImage[] = [
    {
        src: `${COHORT_1_BASE}/Screenshot%20From%202026-05-21%2022-04-36.png`,
        alt: "CNF Skill Scale-Up Programme launch at the training hub in Kurudu",
    },
    {
        src: `${COHORT_1_BASE}/Screenshot%20From%202026-05-21%2022-04-41.png`,
        alt: "First cohort orientation for the Skill Scale-Up Programme",
    },
    {
        src: `${COHORT_1_BASE}/Screenshot%20From%202026-05-21%2022-04-48.png`,
        alt: "CNF founder welcoming Skill Scale-Up Cohort 1 students",
    },
    {
        src: `${COHORT_1_BASE}/Screenshot%20From%202026-05-21%2022-04-54.png`,
        alt: "Skill Scale-Up Programme launch day at CNF training hub",
    },
    {
        src: `${COHORT_1_BASE}/Screenshot%20From%202026-05-21%2022-05-00.png`,
        alt: "Cohort 1 students at the SSU Programme orientation",
    },
    {
        src: `${COHORT_1_BASE}/Screenshot%20From%202026-05-21%2022-05-06.png`,
        alt: "CNF launches Skill Scale-Up with youth trainees in Abuja",
    },
    {
        src: `${COHORT_1_BASE}/3M8A8657%203.JPEG`,
        alt: "Skill Scale-Up Cohort 1 training and orientation session",
    },
    {
        src: `${COHORT_1_BASE}/6dd35ed9-f8e9-422a-8315-42c23c36b036%203.JPEG`,
        alt: "STARS at the inaugural Skill Scale-Up Programme launch",
    },
];

const COHORT_3_BASE = "/assets/projects/Cohort%203";

/** Skill Scale-Up Cohort 3 Tech Batch — `public/assets/projects/Cohort 3/` */
export const cohort3ProjectImages: ProjectImage[] = [
    {
        src: `${COHORT_3_BASE}/IMG_0049.jpg`,
        alt: "Skill Scale-Up Cohort 3 tech batch orientation session",
    },
    {
        src: `${COHORT_3_BASE}/DE8E3217-50A3-4574-BAA5-66B7E9974018_1_201_a.jpeg`,
        alt: "Cohort 3 STARS at the CNF training hub",
    },
    {
        src: `${COHORT_3_BASE}/C26ECFBF-0FB9-424A-BC20-9FE41F96237C_1_201_a.jpeg`,
        alt: "CNF founder addressing Skill Scale-Up Cohort 3",
    },
    {
        src: `${COHORT_3_BASE}/2857FD26-3D02-4F83-A06F-BF795FED3E10_1_201_a.jpeg`,
        alt: "Cohort 3 participants during tech batch training",
    },
    {
        src: `${COHORT_3_BASE}/40534FD2-CCCA-4D63-9189-9DCB9031CC45_1_105_c.jpeg`,
        alt: "STARS collaborating during Cohort 3 sessions",
    },
    {
        src: `${COHORT_3_BASE}/BB3B9525-E926-4CA0-913D-FED27703B642_1_105_c.jpeg`,
        alt: "Skill Scale-Up Cohort 3 tech batch at the training hub",
    },
];

const COHORT_2_GRAD_BASE = "/assets/projects/Cohort%202%20graduation";

/** Skill Scale-Up Cohort 2 graduation — `public/assets/projects/Cohort 2 graduation/` */
export const cohort2GraduationProjectImages: ProjectImage[] = [
    {
        src: `${COHORT_2_GRAD_BASE}/IMG_8257.JPG`,
        alt: "Skill Scale-Up Cohort 2 graduation celebration",
    },
    {
        src: `${COHORT_2_GRAD_BASE}/IMG_8130.JPG`,
        alt: "Cohort 2 graduates at the CNF graduation ceremony",
    },
    {
        src: `${COHORT_2_GRAD_BASE}/IMG_8132%202.JPG`,
        alt: "CNF team and Cohort 2 STARS celebrating graduation",
    },
    {
        src: `${COHORT_2_GRAD_BASE}/IMG_8135%202.JPG`,
        alt: "Cohort 2 graduates receiving certificates",
    },
    {
        src: `${COHORT_2_GRAD_BASE}/IMG_8156.JPG`,
        alt: "Skill Scale-Up Cohort 2 graduation event",
    },
    {
        src: `${COHORT_2_GRAD_BASE}/IMG_8194%202%20%281%29.JPG`,
        alt: "Cohort 2 graduates and mentors at the ceremony",
    },
    {
        src: `${COHORT_2_GRAD_BASE}/IMG_8252.JPG`,
        alt: "CNF Skill Scale-Up Cohort 2 graduation day",
    },
];

const ST_PHILLIPS_BASE = "/assets/projects/ST%20philip%20academy";

/** Educational Outreach at St. Phillips Academy — `public/assets/projects/ST philip academy/` */
export const stPhillipsAcademyProjectImages: ProjectImage[] = [
    {
        src: `${ST_PHILLIPS_BASE}/IMG_4107.JPG`,
        alt: "CNF educational outreach with students at St. Phillips Academy",
    },
    {
        src: `${ST_PHILLIPS_BASE}/IMG_4327%203.JPG`,
        alt: "St. Phillips Academy students during CNF outreach",
    },
    {
        src: `${ST_PHILLIPS_BASE}/IMG_4331-1%203.JPG`,
        alt: "CNF team engaging students at St. Phillips Academy",
    },
    {
        src: `${ST_PHILLIPS_BASE}/IMG_4138-2%203.JPG`,
        alt: "Educational outreach session at St. Phillips Academy",
    },
    {
        src: `${ST_PHILLIPS_BASE}/IMG_4750-1%203.JPG`,
        alt: "CNF founder with students at St. Phillips Academy",
    },
    {
        src: `${ST_PHILLIPS_BASE}/20240430_141328-1%203.JPG`,
        alt: "St. Phillips Academy outreach and school fee support",
    },
    {
        src: `${ST_PHILLIPS_BASE}/IMG_20240711_101701_024%202.JPG`,
        alt: "Students at St. Phillips Academy supported by CNF",
    },
];

const AGGS_IWD_BASE = "/assets/projects/AGGS%20IWD%20OUTREACH";

/** International Women's Day at AGGS Gudu — `public/assets/projects/AGGS IWD OUTREACH/` */
export const aggsIwdOutreachProjectImages: ProjectImage[] = [
    {
        src: `${AGGS_IWD_BASE}/ATT07852.jpg`,
        alt: "CNF International Women's Day outreach at AGGS Gudu",
    },
    {
        src: `${AGGS_IWD_BASE}/ATT07859.jpg`,
        alt: "Female students at AGGS Gudu during CNF IWD session",
    },
    {
        src: `${AGGS_IWD_BASE}/ATT07866.jpg`,
        alt: "CNF founder engaging students at AGGS Gudu on International Women's Day",
    },
    {
        src: `${AGGS_IWD_BASE}/IMG_0392.jpg`,
        alt: "AGGS Gudu students at CNF International Women's Day outreach",
    },
    {
        src: `${AGGS_IWD_BASE}/IMG_0454.jpg`,
        alt: "International Women's Day programme at Anglican Girls Grammar School Gudu",
    },
];

const MANGU_OUTREACH_BASE = "/assets/projects/MANGU%20OUTREACH";

/** Food Relief Outreach in Mangu — `public/assets/projects/MANGU OUTREACH/` */
export const manguOutreachProjectImages: ProjectImage[] = [
    {
        src: `${MANGU_OUTREACH_BASE}/IMG_3264.JPG`,
        alt: "CNF food relief outreach in Mangu, Plateau State",
    },
    {
        src: `${MANGU_OUTREACH_BASE}/IMG_3263.JPG`,
        alt: "Families receiving food supplies during CNF Mangu outreach",
    },
    {
        src: `${MANGU_OUTREACH_BASE}/IMG_3275%20%281%29.JPG`,
        alt: "CNF team distributing food relief in Mangu community",
    },
    {
        src: `${MANGU_OUTREACH_BASE}/IMG_3280%20%281%29.JPG`,
        alt: "Mangu outreach beneficiaries with CNF food relief packages",
    },
    {
        src: `${MANGU_OUTREACH_BASE}/IMG_3289%20%281%29.JPG`,
        alt: "Food relief distribution in Mangu, Plateau State",
    },
    {
        src: `${MANGU_OUTREACH_BASE}/IMG_3290.JPG`,
        alt: "CNF humanitarian food outreach in Mangu",
    },
    {
        src: `${MANGU_OUTREACH_BASE}/IMG_3291.JPG`,
        alt: "Community members at CNF Mangu food relief outreach",
    },
    {
        src: `${MANGU_OUTREACH_BASE}/IMG_3293.JPG`,
        alt: "CNF food relief programme in Mangu, Plateau State",
    },
];

const FESTIVE_FOOD_RELIEF_BASE = "/assets/projects/FESTIVE%20FOOD%20RELIEF";

/** Festive Food Relief Outreach, Gonin Gora — `public/assets/projects/FESTIVE FOOD RELIEF/` */
export const festiveFoodReliefProjectImages: ProjectImage[] = [
    {
        src: `${FESTIVE_FOOD_RELIEF_BASE}/1.jpg`,
        alt: "CNF festive food relief outreach in Gonin Gora, Kaduna",
    },
    {
        src: `${FESTIVE_FOOD_RELIEF_BASE}/3.jpg`,
        alt: "Families receiving festive food packages from CNF in Gonin Gora",
    },
    {
        src: `${FESTIVE_FOOD_RELIEF_BASE}/5.jpg`,
        alt: "CNF team distributing food relief during the festive season",
    },
    {
        src: `${FESTIVE_FOOD_RELIEF_BASE}/6.jpg`,
        alt: "Gonin Gora community members at CNF festive food outreach",
    },
    {
        src: `${FESTIVE_FOOD_RELIEF_BASE}/7.jpg`,
        alt: "Festive Food Relief programme in Gonin Gora, Kaduna State",
    },
    {
        src: `${FESTIVE_FOOD_RELIEF_BASE}/8.jpg`,
        alt: "CNF humanitarian food distribution in Gonin Gora",
    },
    {
        src: `${FESTIVE_FOOD_RELIEF_BASE}/10.jpg`,
        alt: "CNF volunteers at Festive Food Relief outreach in Kaduna",
    },
    {
        src: `${FESTIVE_FOOD_RELIEF_BASE}/11.jpg`,
        alt: "Food relief supplies distributed to families in Gonin Gora",
    },
];

const JIKWOYI_DRUG_BASE = "/assets/projects/DRUG%20DONATION%20OUTREACH%20JIKWOYI";

/** Drug Donations & Healthcare Access in Jikwoyi — `public/assets/projects/DRUG DONATION OUTREACH JIKWOYI/` */
export const jikwoyiDrugDonationProjectImages: ProjectImage[] = [
    {
        src: `${JIKWOYI_DRUG_BASE}/3M8A9074%202.JPG`,
        alt: "CNF team sorting donated medications at Jikwoyi outreach",
    },
    {
        src: `${JIKWOYI_DRUG_BASE}/3M8A9060.JPG`,
        alt: "Drug donation outreach at Jikwoyi Primary Health Care Clinic",
    },
    {
        src: `${JIKWOYI_DRUG_BASE}/3M8A9063.JPG`,
        alt: "CNF medical supplies donation in Jikwoyi, Abuja",
    },
    {
        src: `${JIKWOYI_DRUG_BASE}/3M8A9068%202.JPG`,
        alt: "Healthcare workers and CNF team at Jikwoyi clinic outreach",
    },
    {
        src: `${JIKWOYI_DRUG_BASE}/3M8A9180%202.JPG`,
        alt: "Medication inventory donated by CNF to Jikwoyi community clinic",
    },
    {
        src: `${JIKWOYI_DRUG_BASE}/3M8A9183%202.JPG`,
        alt: "CNF drug donation programme in Jikwoyi, Abuja",
    },
    {
        src: `${JIKWOYI_DRUG_BASE}/3M8A9208%20%281%29.JPG`,
        alt: "Jikwoyi clinic staff receiving CNF medical donations",
    },
    {
        src: `${JIKWOYI_DRUG_BASE}/3M8A9212.JPG`,
        alt: "CNF healthcare access outreach at Jikwoyi Primary Health Care",
    },
];

const KUJE_HEALTH_BASE =
    "/assets/projects/WHITE%20DOVE%20AND%20KUJE%20GENERAL%20HEALTH%20OUTREACH";

/** Health Outreach, Whitedove & Kuje General Hospital — web formats only (HEIC excluded). */
export const kujeHealthOutreachProjectImages: ProjectImage[] = [
    {
        src: `${KUJE_HEALTH_BASE}/IMG_4850.JPG`,
        alt: "CNF health outreach at Kuje General Hospital",
    },
    {
        src: `${KUJE_HEALTH_BASE}/IMG_4851.JPG`,
        alt: "CNF team supporting patients at Kuje and Whitedove hospitals",
    },
    {
        src: `${KUJE_HEALTH_BASE}/IMG_4833-2.JPG`,
        alt: "Healthcare outreach visit at Kuje General Hospital",
    },
    {
        src: `${KUJE_HEALTH_BASE}/834A3071-DE0A-4EAA-B566-EFD2F9C9A9D5_1_201_a.jpeg`,
        alt: "CNF offsetting hospital bills for patients in Kuje",
    },
    {
        src: `${KUJE_HEALTH_BASE}/7A891BA7-BF97-4B1E-8DC4-CCF078928A69_1_201_a.jpeg`,
        alt: "Whitedove and Kuje General Hospital health outreach by CNF",
    },
];

const KUCHINGORO_BASE = "/assets/projects/Outreach%20at%20New%20Kuchingoro";

/** Outreach at New Kuchingoro IDP Camp — `public/assets/projects/Outreach at New Kuchingoro/` */
export const kuchingoroOutreachProjectImages: ProjectImage[] = [
    {
        src: `${KUCHINGORO_BASE}/_Y4B0747.JPG`,
        alt: "CNF medical outreach at New Kuchingoro IDP Camp",
    },
    {
        src: `${KUCHINGORO_BASE}/_Y4B0802.JPG`,
        alt: "Displaced families at CNF Project HEEM outreach in Kuchingoro",
    },
    {
        src: `${KUCHINGORO_BASE}/Copy%20of%20_Y4B0785.JPG`,
        alt: "CNF team providing medical care at New Kuchingoro IDP Camp",
    },
    {
        src: `${KUCHINGORO_BASE}/_Y4B0346.JPG`,
        alt: "Free medical services at New Kuchingoro IDP Camp outreach",
    },
    {
        src: `${KUCHINGORO_BASE}/_Y4B0500%20%281%29.JPG`,
        alt: "CNF humanitarian outreach with IDP camp residents in Kuchingoro",
    },
    {
        src: `${KUCHINGORO_BASE}/Copy%20of%20_Y4B0355-1.JPG`,
        alt: "Food relief and medical support at New Kuchingoro IDP Camp",
    },
    {
        src: `${KUCHINGORO_BASE}/_Y4B0319.JPG`,
        alt: "CNF Project HEEM outreach at New Kuchingoro",
    },
    {
        src: `${KUCHINGORO_BASE}/_Y4B0668%202.JPG`,
        alt: "Community members at New Kuchingoro IDP Camp CNF outreach",
    },
];

const PROJECT_WASH_KEFFI_BASE = "/assets/projects/Project%20WASH-Keffi";

/** Project WASH, Keffi — `public/assets/projects/Project WASH-Keffi/` */
export const projectWashKeffiProjectImages: ProjectImage[] = [
    {
        src: `${PROJECT_WASH_KEFFI_BASE}/Screenshot%20From%202026-05-21%2021-55-06.png`,
        alt: "CNF Project WASH hygiene education at secondary schools in Keffi",
    },
    {
        src: `${PROJECT_WASH_KEFFI_BASE}/Screenshot%20From%202026-05-21%2021-56-56.png`,
        alt: "Project WASH outreach with secondary school students",
    },
    {
        src: `${PROJECT_WASH_KEFFI_BASE}/Screenshot%20From%202026-05-21%2021-57-01.png`,
        alt: "Hygiene and sanitation awareness session at a partner school",
    },
    {
        src: `${PROJECT_WASH_KEFFI_BASE}/Screenshot%20From%202026-05-21%2021-57-08.png`,
        alt: "Students learning personal hygiene during Project WASH",
    },
    {
        src: `${PROJECT_WASH_KEFFI_BASE}/Screenshot%20From%202026-05-21%2021-57-13.png`,
        alt: "CNF WASH programme activities at a secondary school in Keffi",
    },
    {
        src: `${PROJECT_WASH_KEFFI_BASE}/Screenshot%20From%202026-05-21%2021-57-19.png`,
        alt: "Project WASH hygiene education and supplies outreach",
    },
    {
        src: `${PROJECT_WASH_KEFFI_BASE}/Screenshot%20From%202026-05-21%2021-57-41.png`,
        alt: "Secondary school hygiene education led by CNF",
    },
    {
        src: `${PROJECT_WASH_KEFFI_BASE}/Screenshot%20From%202026-05-21%2021-57-55.png`,
        alt: "CNF promoting sanitation awareness through Project WASH",
    },
];

/** Reusable catalog entries; compose per-project `images` arrays in projects.ts */
export const projectImageCatalog = {
    skillsTraining: {
        src: "/assets/ourWorkImgs/skillaqc.jpeg",
        alt: "Skill Scale-Up training session with participants",
    },
    educationOutreach: {
        src: "/assets/ourWorkImgs/education%20outreach.jpg",
        alt: "CNF education outreach with students",
    },
    communityAid: {
        src: "/assets/ourWorkImgs/community%20aid.jpg",
        alt: "CNF community aid and humanitarian outreach",
    },
    howItStarted: {
        src: "/assets/howItStarted/howitstarted.jpg",
        alt: "CNF foundation outreach and community engagement",
    },
    graduationCeremony: {
        src: "/assets/carouselImgs/3M8A8846.JPG",
        alt: "CNF Skill Scale-Up graduation ceremony",
    },
    cohortCelebration: {
        src: "/assets/carouselImgs/3M8A8624.JPEG",
        alt: "CNF programme celebration with graduates and mentors",
    },
    programmeLaunch: {
        src: "/assets/carouselImgs/_Y4B0504.JPG",
        alt: "CNF programme launch and orientation",
    },
    communityGathering: {
        src: "/assets/carouselImgs/_Y4B0704.JPG",
        alt: "CNF community gathering during an outreach",
    },
    clinicOutreach: {
        src: "/assets/carouselImgs/IMG_4340%203.JPG",
        alt: "CNF healthcare and clinic outreach",
    },
    handsOnWorkshop: {
        src: "/assets/carouselImgs/DE8E3217-50A3-4574-BAA5-66B7E9974018_1_201_a.jpeg",
        alt: "Hands-on skills workshop with CNF beneficiaries",
    },
} as const satisfies Record<string, ProjectImage>;
