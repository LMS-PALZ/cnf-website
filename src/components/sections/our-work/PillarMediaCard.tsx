import { CnfImage } from "@/components/ui/CnfImage";
import { Card } from "@/components/ui/Card";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Stat } from "@/components/ui/Stat";
import { cn } from "@/lib/cn";
import { fontDisplay } from "@/lib/fonts";
import { pillarTheme } from "@/lib/pillar-theme";
import type { PillarBlockData, PillarTheme } from "@/data/our-work/pillars";
type Props = {
    theme: PillarTheme;
    mediaLabel: string;
    reachStat: PillarBlockData["reachStat"];
    smallStats: PillarBlockData["smallStats"];
    media?: React.ReactNode;
    /** When set, replaces the solid header + placeholder with a photo hero and overlay. */
    heroImageSrc?: string;
};
export function PillarMediaCard({ theme, mediaLabel, reachStat, smallStats, media, heroImageSrc, }: Props) {
    const t = pillarTheme[theme];
    const hero = Boolean(heroImageSrc);
    return (<div className="flex flex-col gap-6">
      <div className={cn("relative overflow-hidden rounded-2xl", hero ? "min-h-[22rem] shadow-sm ring-1 ring-black/10 sm:min-h-[28rem] md:min-h-[34rem]" : t.surface)}>
        {!hero && (<div aria-hidden className="cnf-dot-pattern absolute inset-0 opacity-25"/>)}
        {hero && heroImageSrc && (<>
            <CnfImage alt={mediaLabel} className="z-0 object-cover" fill priority={false} sizes="(max-width: 1024px) 100vw, 50vw" src={heroImageSrc}/>
            <div aria-hidden className="absolute inset-0 z-[1] bg-gradient-to-t from-black/85 via-black/45 to-black/35"/>
          </>)}

        <div className={cn("relative z-[2]", !hero && "px-6 pb-44 pt-10 sm:px-10 sm:pb-48 md:pb-52")}>
          {!hero && (media ?? (<ImagePlaceholder aspect="aspect-[16/9] sm:aspect-[16/10]" label={mediaLabel} tone="dark-on-primary" className={t.onSurface}/>))}
        </div>

        <div className="absolute inset-x-4 bottom-4 z-20 sm:inset-x-6 sm:bottom-6">
          <Card tone="dark" padding="md" className="bg-cnf-night/95 backdrop-blur">
            <p className={cn("text-[11px] font-semibold uppercase tracking-[0.2em]", t.text)}>
              {reachStat.eyebrow}
            </p>
            <p className={cn(fontDisplay.className, "mt-2 text-4xl font-semibold leading-none text-white md:text-5xl")}>
              {reachStat.value}
            </p>
            <p className="mt-2 text-xs leading-relaxed text-white/65 md:text-sm">
              {reachStat.description}
            </p>
          </Card>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 md:gap-4">
        {smallStats.map((s) => (<Card key={s.label} tone="default" padding="md" className="bg-white">
            <Stat value={s.value} label={s.label} tone="light" size="sm"/>
          </Card>))}
      </div>
    </div>);
}
