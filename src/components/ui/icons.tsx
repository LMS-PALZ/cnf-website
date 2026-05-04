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
