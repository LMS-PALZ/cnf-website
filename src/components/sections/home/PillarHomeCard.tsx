import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
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
    skills: "text-cnf-pillar-skills hover:text-cnf-primary",
    education: "text-cnf-pillar-education hover:text-cnf-pillar-education/80",
    humanitarian: "text-cnf-pillar-humanitarian hover:text-cnf-pillar-humanitarian/80",
};

export function PillarHomeCard({ pillar }: Props) {
    const hero = Boolean(pillar.heroImageSrc);
    const heroAlt = `${pillar.title} — ${pillar.badge}`;
    return (<Card tone="elevated" padding="none" className="flex h-full flex-col" as="article">
      <div className={cn("relative flex min-h-[13rem] flex-col justify-end gap-4 overflow-hidden px-6 pb-8 pt-6 sm:min-h-[15rem] md:min-h-[17rem]", !hero && headerTone[pillar.badgeTone], hero && "shadow-inner ring-1 ring-black/10")}>
        {hero && pillar.heroImageSrc && (<>
            <Image alt={heroAlt} className="z-0 object-cover" fill priority={false} sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" src={pillar.heroImageSrc}/>
            <div aria-hidden className="absolute inset-0 z-[1] bg-gradient-to-t from-black/80 via-black/50 to-black/40"/>
          </>)}

        <div className="relative z-10 flex flex-col gap-4">
          <Badge tone={pillar.badgeTone} className="w-fit bg-white/10 text-white/90">
            {pillar.badge}
          </Badge>
          <h3 className={`${fontDisplay.className} text-2xl font-semibold leading-tight text-white md:text-[1.65rem]`}>
            {pillar.title}
          </h3>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-5 p-6">
        <p className="text-base leading-relaxed text-cnf-muted">
          {pillar.description}
        </p>
        <div className="mt-auto pt-2">
          <Link href={pillar.href} className={cn("inline-flex items-center gap-1.5 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cnf-primary", linkTone[pillar.badgeTone])}>
            Learn more
            <span aria-hidden className="text-sm leading-none">&rarr;</span>
          </Link>
        </div>
      </div>
    </Card>);
}
