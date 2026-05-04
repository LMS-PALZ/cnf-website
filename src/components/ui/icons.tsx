/**
 * Lightweight inline SVG icons used by home-page sections. Kept here as
 * a single module so the icon vocabulary is easy to extend without pulling
 * in an icon library.
 */

import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const baseProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

export function ToolsIcon(props: IconProps) {
  return (
    <svg {...baseProps} xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M14.7 6.3a4 4 0 1 0 5 5l-3-3a1.5 1.5 0 0 1 2.1-2.1l3 3a4 4 0 0 0-5-5l-2.1 2.1z" />
      <path d="M6 17l-3 3 1.5 1.5L8 18.5" />
      <path d="m13.5 9.5-9 9" />
    </svg>
  );
}

export function BookIcon(props: IconProps) {
  return (
    <svg {...baseProps} xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v17H6.5A2.5 2.5 0 0 0 4 21.5z" />
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    </svg>
  );
}

export function HeartIcon(props: IconProps) {
  return (
    <svg {...baseProps} xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M12 21s-7-4.35-9.5-9A5.5 5.5 0 0 1 12 6a5.5 5.5 0 0 1 9.5 6c-2.5 4.65-9.5 9-9.5 9z" />
    </svg>
  );
}

export function HandshakeIcon(props: IconProps) {
  return (
    <svg {...baseProps} xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="m11 17 2 2a1 1 0 0 0 1.4 0l4-4a1 1 0 0 0 0-1.4l-2-2" />
      <path d="m21 13-3.4 3.4" />
      <path d="M3 7h2l4 4 2-2 4 4-3 3-1-1-2 2-3-3z" />
      <path d="M16 5l-3 3" />
    </svg>
  );
}

export function WaveIcon(props: IconProps) {
  return (
    <svg {...baseProps} xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M9 11V5a1.5 1.5 0 0 1 3 0v6" />
      <path d="M12 11V4a1.5 1.5 0 0 1 3 0v7" />
      <path d="M15 11V5.5a1.5 1.5 0 0 1 3 0V14a6 6 0 0 1-12 0v-2.5" />
      <path d="M9 11V8.5a1.5 1.5 0 0 0-3 0V13" />
    </svg>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <svg {...baseProps} xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

export function PinIcon(props: IconProps) {
  return (
    <svg {...baseProps} xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M12 21s-7-7.5-7-12a7 7 0 1 1 14 0c0 4.5-7 12-7 12z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  );
}

export function MonitorIcon(props: IconProps) {
  return (
    <svg {...baseProps} xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x="3" y="4" width="18" height="13" rx="2" />
      <path d="M9 21h6" />
      <path d="M12 17v4" />
    </svg>
  );
}

export function ScissorsIcon(props: IconProps) {
  return (
    <svg {...baseProps} xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="6" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <path d="M20 4 8.12 15.88" />
      <path d="M14.47 14.48 20 20" />
      <path d="M8.12 8.12 12 12" />
    </svg>
  );
}

export function StarIcon(props: IconProps) {
  return (
    <svg {...baseProps} xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M12 2.5l2.95 6 6.55.95-4.75 4.6 1.12 6.5L12 17.5 6.13 20.55l1.12-6.5L2.5 9.45l6.55-.95L12 2.5z" />
    </svg>
  );
}

export function BriefcaseIcon(props: IconProps) {
  return (
    <svg {...baseProps} xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
      <path d="M3 13h18" />
    </svg>
  );
}

export function DocumentIcon(props: IconProps) {
  return (
    <svg {...baseProps} xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
      <path d="M14 3v6h6" />
      <path d="M9 13h6" />
      <path d="M9 17h6" />
    </svg>
  );
}

export function StethoscopeIcon(props: IconProps) {
  return (
    <svg {...baseProps} xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M5 3v6a4 4 0 0 0 8 0V3" />
      <path d="M9 13v3a5 5 0 0 0 10 0v-2" />
      <circle cx="19" cy="11" r="2" />
    </svg>
  );
}

export function FoodIcon(props: IconProps) {
  return (
    <svg {...baseProps} xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M3 11h18a8 8 0 0 1-8 8h-2a8 8 0 0 1-8-8z" />
      <path d="M5 11V8a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v3" />
      <path d="M2 21h20" />
    </svg>
  );
}

export function BabyIcon(props: IconProps) {
  return (
    <svg {...baseProps} xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="12" cy="9" r="4" />
      <path d="M9.5 9.5h.01" />
      <path d="M14.5 9.5h.01" />
      <path d="M10 12c.5.5 1.5 1 2 1s1.5-.5 2-1" />
      <path d="M5 21v-3a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v3" />
    </svg>
  );
}

export function GlobeIcon(props: IconProps) {
  return (
    <svg {...baseProps} xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3a14 14 0 0 1 0 18" />
      <path d="M12 3a14 14 0 0 0 0 18" />
    </svg>
  );
}

export function ImageOffIcon(props: IconProps) {
  return (
    <svg {...baseProps} xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="9" cy="9" r="1.5" />
      <path d="m21 15-3.5-3.5L9 20" />
      <path d="m3 21 18-18" />
    </svg>
  );
}

export function GraduationCapIcon(props: IconProps) {
  return (
    <svg {...baseProps} xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="m22 10-10-5L2 10l10 5 10-5z" />
      <path d="M6 12v5c0 1 4 2 6 2s6-1 6-2v-5" />
      <path d="M22 10v6" />
    </svg>
  );
}

export function RocketIcon(props: IconProps) {
  return (
    <svg {...baseProps} xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M5 13c0 1.5 1 4 1 4l3-1c-.5-1.5-1-3.5-1-3.5l-3 .5z" />
      <path d="M14 4c1 0 4 0 6 2 2 2 2 5 2 6-1 4-7 8-9 9l-2-2-3-3-2-2c1-2 5-8 8-10z" />
      <circle cx="15" cy="9" r="1.5" />
    </svg>
  );
}

export function BuildingIcon(props: IconProps) {
  return (
    <svg {...baseProps} xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x="4" y="3" width="16" height="18" rx="1" />
      <path d="M9 7h.01" />
      <path d="M15 7h.01" />
      <path d="M9 11h.01" />
      <path d="M15 11h.01" />
      <path d="M10 21v-4h4v4" />
    </svg>
  );
}

export function PillIcon(props: IconProps) {
  return (
    <svg {...baseProps} xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z" />
      <path d="m8.5 8.5 7 7" />
    </svg>
  );
}

export function DropletIcon(props: IconProps) {
  return (
    <svg {...baseProps} xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M12 2.7s-7 7.3-7 12a7 7 0 0 0 14 0c0-4.7-7-12-7-12z" />
    </svg>
  );
}

export function MoneyBagIcon(props: IconProps) {
  return (
    <svg {...baseProps} xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M9.5 6h5l1.7-2.3a.5.5 0 0 0-.4-.7H8.2a.5.5 0 0 0-.4.7L9.5 6z" />
      <path d="M9.5 6c-1.6 1.5-5 4.5-5 9a6 6 0 0 0 6 6h3a6 6 0 0 0 6-6c0-4.5-3.4-7.5-5-9" />
      <path d="M12 11v6" />
      <path d="M14 13h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3H10" />
    </svg>
  );
}

export function BoxIcon(props: IconProps) {
  return (
    <svg {...baseProps} xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="m21 8-9-5-9 5 9 5 9-5z" />
      <path d="M3 8v8l9 5 9-5V8" />
      <path d="M12 13v8" />
    </svg>
  );
}

export function UsersIcon(props: IconProps) {
  return (
    <svg {...baseProps} xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

export function MegaphoneIcon(props: IconProps) {
  return (
    <svg {...baseProps} xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M3 11v2a2 2 0 0 0 2 2h1l3 4h2v-12h-2L6 11H5a2 2 0 0 0-2 0z" />
      <path d="M11 7v10c5 0 9-2 9-5s-4-5-9-5z" />
    </svg>
  );
}

export function ClipboardIcon(props: IconProps) {
  return (
    <svg {...baseProps} xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x="6" y="4" width="12" height="16" rx="2" />
      <path d="M9 4V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1" />
      <path d="M9 4h6v3H9z" />
      <path d="M9 12h6" />
      <path d="M9 16h4" />
    </svg>
  );
}

export function PencilIcon(props: IconProps) {
  return (
    <svg {...baseProps} xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.121 2.121 0 1 1 3 3L7 19l-4 1 1-4 12.5-12.5z" />
    </svg>
  );
}

export function SparkleIcon(props: IconProps) {
  return (
    <svg {...baseProps} xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M12 3v4" />
      <path d="M12 17v4" />
      <path d="M3 12h4" />
      <path d="M17 12h4" />
      <path d="m6 6 2.5 2.5" />
      <path d="m15.5 15.5 2.5 2.5" />
      <path d="m6 18 2.5-2.5" />
      <path d="m15.5 8.5 2.5-2.5" />
    </svg>
  );
}

export function TargetIcon(props: IconProps) {
  return (
    <svg {...baseProps} xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
    </svg>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <svg {...baseProps} xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7a2 2 0 0 1 1.72 2.03z" />
    </svg>
  );
}

/* ---------- Social icons (kept simple, brand-recognisable) ---------- */

export function InstagramIcon(props: IconProps) {
  return (
    <svg {...baseProps} xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
    </svg>
  );
}

export function YoutubeIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.4 3.5 12 3.5 12 3.5s-7.4 0-9.4.6A3 3 0 0 0 .5 6.2C0 8.2 0 12 0 12s0 3.8.5 5.8A3 3 0 0 0 2.6 19.9c2 .6 9.4.6 9.4.6s7.4 0 9.4-.6a3 3 0 0 0 2.1-2.1c.5-2 .5-5.8.5-5.8s0-3.8-.5-5.8zM9.6 15.6V8.4l6.3 3.6-6.3 3.6z" />
    </svg>
  );
}

export function XTwitterIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M18.244 2H21l-6.55 7.49L22 22h-6.78l-4.72-6.18L4.99 22H2.23l7.02-8.02L2 2h6.92l4.27 5.65L18.244 2zm-2.39 18h2.04L7.18 4H5l10.854 16z" />
    </svg>
  );
}

export function LinkedInIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}
