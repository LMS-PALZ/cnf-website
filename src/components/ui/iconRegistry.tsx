import type { ComponentType, SVGProps } from "react";
import {
  ArrowRightIcon,
  BabyIcon,
  BookIcon,
  BoxIcon,
  BriefcaseIcon,
  BuildingIcon,
  ClipboardIcon,
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
  MegaphoneIcon,
  MoneyBagIcon,
  MonitorIcon,
  PencilIcon,
  PhoneIcon,
  PillIcon,
  PinIcon,
  RocketIcon,
  ScissorsIcon,
  SparkleIcon,
  StarIcon,
  StethoscopeIcon,
  TargetIcon,
  ToolsIcon,
  UsersIcon,
  WaveIcon,
  XTwitterIcon,
  YoutubeIcon,
} from "./icons";

export type IconRegistryKey =
  | "arrow-right"
  | "baby"
  | "book"
  | "box"
  | "briefcase"
  | "building"
  | "clipboard"
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
  | "megaphone"
  | "money-bag"
  | "monitor"
  | "pencil"
  | "phone"
  | "pill"
  | "pin"
  | "rocket"
  | "scissors"
  | "sparkle"
  | "star"
  | "stethoscope"
  | "target"
  | "tools"
  | "users"
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
  box: BoxIcon,
  briefcase: BriefcaseIcon,
  building: BuildingIcon,
  clipboard: ClipboardIcon,
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
  megaphone: MegaphoneIcon,
  "money-bag": MoneyBagIcon,
  monitor: MonitorIcon,
  pencil: PencilIcon,
  phone: PhoneIcon,
  pill: PillIcon,
  pin: PinIcon,
  rocket: RocketIcon,
  scissors: ScissorsIcon,
  sparkle: SparkleIcon,
  star: StarIcon,
  stethoscope: StethoscopeIcon,
  target: TargetIcon,
  tools: ToolsIcon,
  users: UsersIcon,
  wave: WaveIcon,
  "x-twitter": XTwitterIcon,
  youtube: YoutubeIcon,
};
