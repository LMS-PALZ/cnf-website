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
