import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const frameProps = {
    width: 262,
    height: 216,
    viewBox: "0 0 262 216",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": true as const,
};

export function CateringProgramIcon(props: IconProps) {
    return (
        <svg {...frameProps} {...props}>
            <rect width="261.75" height="215.102" rx="16.7655" fill="white" />
            <defs>
                <linearGradient
                    id="catering-dome"
                    x1="92"
                    y1="108"
                    x2="174"
                    y2="178"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#18C4ED" />
                    <stop offset="1" stopColor="#0788D1" />
                </linearGradient>
                <linearGradient
                    id="catering-hat"
                    x1="102"
                    y1="67"
                    x2="160"
                    y2="123"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#F4F5F8" />
                    <stop offset="1" stopColor="#D6DBE7" />
                </linearGradient>
            </defs>
            {/* Artwork follows the 154 × 154 area used by the original SVGs. */}
            <ellipse cx="131" cy="190" rx="54" ry="12" fill="#DDE2EC" />
            {/* Chef's hat */}
            <path
                d="M107 108c-10 0-18-8-18-18 0-9 7-17 16-18 4-11 14-18 26-18s22 7 26 18c9 1 16 9 16 18 0 10-8 18-18 18h-48Z"
                fill="url(#catering-hat)"
            />
            <path
                d="M107 101h48v25c0 4-3 7-7 7h-34c-4 0-7-3-7-7v-25Z"
                fill="#F1F3F7"
            />
            <path d="M113 116h36" stroke="#AEB6C8" strokeWidth="4" strokeLinecap="round" />
            {/* Serving cloche */}
            <path
                d="M89 173c2-29 19-47 42-47s40 18 42 47H89Z"
                fill="url(#catering-dome)"
            />
            <path
                d="M101 164c4-17 15-28 29-30"
                stroke="#5ED8F3"
                strokeWidth="6"
                strokeLinecap="round"
                opacity="0.75"
            />
            <rect x="124" y="116" width="14" height="14" rx="7" fill="#FFC928" />
            <path d="M78 174h106" stroke="#07576A" strokeWidth="9" strokeLinecap="round" />
            <path d="M91 183h80" stroke="#9EA8BC" strokeWidth="7" strokeLinecap="round" />
            <circle cx="177" cy="86" r="9" fill="#4267E8" />
            <circle cx="184" cy="76" r="4" fill="#FFC928" />
        </svg>
    );
}

export function PhotographyProgramIcon(props: IconProps) {
    return (
        <svg {...frameProps} {...props}>
            <rect width="261.75" height="215.102" rx="16.7655" fill="white" />
            <defs>
                <linearGradient
                    id="photo-body"
                    x1="75"
                    y1="101"
                    x2="187"
                    y2="178"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#18C4ED" />
                    <stop offset="1" stopColor="#0788D1" />
                </linearGradient>
                <radialGradient
                    id="photo-lens"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(131 140) rotate(90) scale(31)"
                >
                    <stop stopColor="#79DDF4" />
                    <stop offset="0.45" stopColor="#4267E8" />
                    <stop offset="1" stopColor="#07576A" />
                </radialGradient>
            </defs>
            {/* Artwork follows the 154 × 154 area used by the original SVGs. */}
            <circle cx="148" cy="121" r="61" fill="#4267E8" />
            <ellipse cx="132" cy="190" rx="58" ry="11" fill="#DDE2EC" />
            {/* Camera body */}
            <path
                d="M82 100h25l8-14h34l8 14h23c7 0 12 5 12 12v61c0 7-5 12-12 12H82c-7 0-12-5-12-12v-61c0-7 5-12 12-12Z"
                fill="url(#photo-body)"
            />
            <path d="M82 100h98c7 0 12 5 12 12v12H70v-12c0-7 5-12 12-12Z" fill="#07576A" />
            <rect x="88" y="91" width="20" height="9" rx="4.5" fill="#FFC928" />
            <circle cx="174" cy="112" r="5" fill="#FFC928" />
            {/* Lens */}
            <circle cx="131" cy="143" r="39" fill="#DDE2EC" />
            <circle cx="131" cy="143" r="31" fill="url(#photo-lens)" />
            <circle cx="131" cy="143" r="17" fill="#07576A" />
            <circle cx="120" cy="132" r="7" fill="white" opacity="0.75" />
            <path
                d="M83 163v-27"
                stroke="#5ED8F3"
                strokeWidth="6"
                strokeLinecap="round"
                opacity="0.8"
            />
            <circle cx="187" cy="77" r="8" fill="#FFC928" />
        </svg>
    );
}

export function HairStylingProgramIcon(props: IconProps) {
    return (
        <svg {...frameProps} {...props}>
            <rect width="261.75" height="215.102" rx="16.7655" fill="white" />
            <defs>
                <linearGradient
                    id="hair-dryer-body"
                    x1="78"
                    y1="88"
                    x2="168"
                    y2="168"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#18C4ED" />
                    <stop offset="1" stopColor="#0788D1" />
                </linearGradient>
                <linearGradient
                    id="hair-dryer-nozzle"
                    x1="156"
                    y1="108"
                    x2="210"
                    y2="138"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#5ED8F3" />
                    <stop offset="1" stopColor="#0788D1" />
                </linearGradient>
            </defs>
            <ellipse cx="131" cy="190" rx="54" ry="12" fill="#DDE2EC" />
            {/* Soft backdrop orb */}
            <circle cx="176" cy="98" r="38" fill="#4267E8" opacity="0.9" />
            {/* Hair dryer body */}
            <ellipse cx="118" cy="118" rx="46" ry="40" fill="url(#hair-dryer-body)" />
            <ellipse cx="110" cy="112" rx="22" ry="18" fill="#5ED8F3" opacity="0.55" />
            {/* Nozzle */}
            <path
                d="M152 104h46c8 0 14 6 14 14s-6 14-14 14h-46c-6 0-10-5-10-14s4-14 10-14Z"
                fill="url(#hair-dryer-nozzle)"
            />
            <rect x="196" y="110" width="10" height="16" rx="3" fill="#07576A" />
            {/* Handle */}
            <path
                d="M104 148c0 0-4 10-4 22 0 10 8 18 18 18s16-6 16-14c0-12-8-22-12-26"
                fill="#07576A"
            />
            <path
                d="M112 154c-1 8 0 16 4 22"
                stroke="#5ED8F3"
                strokeWidth="4"
                strokeLinecap="round"
                opacity="0.7"
            />
            {/* Accent dial */}
            <circle cx="98" cy="108" r="8" fill="#FFC928" />
            <circle cx="98" cy="108" r="3.5" fill="white" />
            {/* Small scissors accent */}
            <path
                d="M176 148l18 22"
                stroke="#07576A"
                strokeWidth="5"
                strokeLinecap="round"
            />
            <path
                d="M194 148l-18 22"
                stroke="#18C4ED"
                strokeWidth="5"
                strokeLinecap="round"
            />
            <circle cx="174" cy="144" r="6" fill="#FFC928" />
            <circle cx="196" cy="144" r="6" fill="#FFC928" />
            <circle cx="188" cy="68" r="8" fill="#FFC928" />
        </svg>
    );
}

export function MakeupArtistryProgramIcon(props: IconProps) {
    return (
        <svg {...frameProps} {...props}>
            <rect width="261.75" height="215.102" rx="16.7655" fill="white" />
            <defs>
                <linearGradient
                    id="makeup-lipstick"
                    x1="156"
                    y1="96"
                    x2="196"
                    y2="176"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#18C4ED" />
                    <stop offset="1" stopColor="#0788D1" />
                </linearGradient>
                <linearGradient
                    id="makeup-palette"
                    x1="72"
                    y1="96"
                    x2="148"
                    y2="168"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#F4F5F8" />
                    <stop offset="1" stopColor="#D6DBE7" />
                </linearGradient>
            </defs>
            <ellipse cx="131" cy="190" rx="54" ry="12" fill="#DDE2EC" />
            <circle cx="186" cy="86" r="28" fill="#4267E8" />
            {/* Compact palette */}
            <rect
                x="72"
                y="96"
                width="86"
                height="72"
                rx="18"
                fill="url(#makeup-palette)"
            />
            <rect x="80" y="104" width="70" height="56" rx="14" fill="white" />
            <circle cx="100" cy="124" r="12" fill="#FFC928" />
            <circle cx="128" cy="124" r="12" fill="#18C4ED" />
            <circle cx="115" cy="146" r="12" fill="#4267E8" />
            <circle cx="100" cy="124" r="5" fill="white" opacity="0.55" />
            {/* Makeup brush */}
            <path
                d="M148 158l34-70"
                stroke="#07576A"
                strokeWidth="10"
                strokeLinecap="round"
            />
            <path
                d="M152 150l26-54"
                stroke="#9EA8BC"
                strokeWidth="4"
                strokeLinecap="round"
            />
            <ellipse cx="190" cy="74" rx="16" ry="12" fill="#5ED8F3" />
            <ellipse cx="190" cy="74" rx="9" ry="7" fill="#FFC928" />
            {/* Lipstick upright */}
            <rect
                x="168"
                y="118"
                width="32"
                height="52"
                rx="10"
                fill="url(#makeup-lipstick)"
            />
            <rect x="172" y="104" width="24" height="20" rx="6" fill="#07576A" />
            <path
                d="M176 104c3-12 10-18 14-18s11 6 14 18"
                fill="#FFC928"
            />
            <rect x="174" y="132" width="20" height="8" rx="3" fill="#5ED8F3" opacity="0.8" />
            <circle cx="204" cy="62" r="6" fill="#FFC928" />
        </svg>
    );
}
