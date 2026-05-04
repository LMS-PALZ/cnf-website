import { Stat } from "@/components/ui/Stat";
import { heroDarkStats, heroLightStats, type HeroStat } from "@/data/home/hero-stats";

type Props = {
  /** Override stats if needed (defaults to data file values). */
  darkStats?: HeroStat[];
  lightStats?: HeroStat[];
};

/**
 * Horizontal stats band that bridges the hero and the "Who we are" section.
 * Visually splits 50/50: night-tone left (continuing the hero) and a
 * cream-tone right (introducing the page body).
 */
export function HomeHeroStats({
  darkStats = heroDarkStats,
  lightStats = heroLightStats,
}: Props) {
  return (
    <section
      aria-label="Foundation key figures"
      className="grid grid-cols-1 lg:grid-cols-2"
    >
      <div className="flex flex-wrap items-center gap-x-10 gap-y-6 bg-cnf-night-deep px-6 py-8 sm:px-10 md:px-14 lg:px-16">
        {darkStats.map((stat) => (
          <Stat key={stat.label} value={stat.value} label={stat.label} tone="dark" size="sm" />
        ))}
      </div>
      <div className="flex flex-wrap items-center gap-x-10 gap-y-6 bg-cnf-cream px-6 py-8 sm:px-10 md:px-14 lg:px-16">
        {lightStats.map((stat) => (
          <Stat key={stat.label} value={stat.value} label={stat.label} tone="light" size="sm" />
        ))}
      </div>
    </section>
  );
}
