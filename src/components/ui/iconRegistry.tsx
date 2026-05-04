import type { ComponentType, SVGProps } from "react";
import {
  ArrowRightIcon,
  BabyIcon,
  BookIcon,
  BriefcaseIcon,
  BuildingIcon,
  DocumentIcon,
  DropletIcon,
  FoodIcon,
  GlobeIcon,
  GraduationCapIcon,
  HandshakeIcon,
  HeartIcon,
  ImageOffIcon,
  InstagramIcon,
  LinkedInIcon,
  MonitorIcon,
  PillIcon,
  PinIcon,
  RocketIcon,
  ScissorsIcon,
  StarIcon,
  StethoscopeIcon,
  ToolsIcon,
  WaveIcon,
  XTwitterIcon,
  YoutubeIcon,
} from "./icons";

export type IconRegistryKey =
  | "arrow-right"
  | "baby"
  | "book"
  | "briefcase"
  | "building"
  | "document"
  | "droplet"
  | "food"
  | "globe"
  | "graduation-cap"
  | "handshake"
  | "heart"
  | "image-off"
  | "instagram"
  | "linkedin"
  | "monitor"
  | "pill"
  | "pin"
  | "rocket"
  | "scissors"
  | "star"
  | "stethoscope"
  | "tools"
  | "wave"
  | "x-twitter"
  | "youtube";

/** Centralised key→component lookup so data files can refer to icons by
 * string. Keeps JSX out of `*.ts` data and lets us swap an icon without
 * touching any pages. */
export const iconRegistry: Record<
  IconRegistryKey,
  ComponentType<SVGProps<SVGSVGElement>>
> = {
  "arrow-right": ArrowRightIcon,
  baby: BabyIcon,
  book: BookIcon,
  briefcase: BriefcaseIcon,
  building: BuildingIcon,
  document: DocumentIcon,
  droplet: DropletIcon,
  food: FoodIcon,
  globe: GlobeIcon,
  "graduation-cap": GraduationCapIcon,
  handshake: HandshakeIcon,
  heart: HeartIcon,
  "image-off": ImageOffIcon,
  instagram: InstagramIcon,
  linkedin: LinkedInIcon,
  monitor: MonitorIcon,
  pill: PillIcon,
  pin: PinIcon,
  rocket: RocketIcon,
  scissors: ScissorsIcon,
  star: StarIcon,
  stethoscope: StethoscopeIcon,
  tools: ToolsIcon,
  wave: WaveIcon,
  "x-twitter": XTwitterIcon,
  youtube: YoutubeIcon,
};
