import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { ArrowRightIcon, BookIcon, HeartIcon, ToolsIcon } from "@/components/ui/icons";
import { cn } from "@/lib/cn";
import { fontDisplay } from "@/lib/fonts";
import type { HomePillar } from "@/data/home/pillars-detailed";

type Props = {
  pillar: HomePillar;
};

const headerTone: Record<HomePillar["badgeTone"], string> = {
  skills: "bg-cnf-pillar-skills text-white",
  education: "bg-cnf-pillar-education text-white",
  humanitarian: "bg-cnf-pillar-humanitarian text-white",
};

const linkTone: Record<HomePillar["badgeTone"], string> = {
  skills: "text-cnf-pillar-skills hover:text-cnf-primary-dark",
  education: "text-cnf-pillar-education hover:text-cnf-pillar-education/80",
  humanitarian:
    "text-cnf-pillar-humanitarian hover:text-cnf-pillar-humanitarian/80",
};

const bulletTone: Record<HomePillar["badgeTone"], string> = {
  skills: "text-cnf-pillar-skills",
  education: "text-cnf-pillar-education",
  humanitarian: "text-cnf-pillar-humanitarian",
};

const Icon = {
  tools: ToolsIcon,
  book: BookIcon,
  heart: HeartIcon,
} as const;

export function PillarHomeCard({ pillar }: Props) {
  const IconComponent = Icon[pillar.iconKey];

  return (
    <Card
      tone="elevated"
      padding="none"
      className="flex h-full flex-col"
      as="article"
    >
      <div
        className={cn(
          "relative flex items-start justify-between gap-4 px-6 pb-8 pt-6",
          headerTone[pillar.badgeTone]
        )}
      >
        <div className="flex flex-col gap-4">
          <Badge tone={pillar.badgeTone} className="bg-white/10 text-white/90">
            {pillar.badge}
          </Badge>
          <h3
            className={`${fontDisplay.className} text-2xl font-semibold leading-tight text-white md:text-[1.65rem]`}
          >
            {pillar.title}
          </h3>
        </div>
        <IconComponent
          aria-hidden
          className="h-10 w-10 shrink-0 text-white/35"
        />
      </div>

      <div className="flex flex-1 flex-col gap-5 p-6">
        <p className="text-base leading-relaxed text-cnf-muted">
          {pillar.description}
        </p>
        <ul className="space-y-2">
          {pillar.programmes.map((p) => (
            <li
              key={p}
              className="flex items-start gap-2 text-sm leading-relaxed text-cnf-ink"
            >
              <span
                aria-hidden
                className={cn(
                  "mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full",
                  bulletTone[pillar.badgeTone].replace("text-", "bg-")
                )}
              />
              <span>{p}</span>
            </li>
          ))}
        </ul>
        <div className="mt-auto pt-2">
          <Link
            href={pillar.href}
            className={cn(
              "inline-flex items-center gap-1.5 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cnf-primary",
              linkTone[pillar.badgeTone]
            )}
          >
            Learn more
            <ArrowRightIcon className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </Card>
  );
}
