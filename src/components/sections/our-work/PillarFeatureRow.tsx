import { iconRegistry, type IconRegistryKey } from "@/components/ui/iconRegistry";
import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/cn";
import { pillarTheme } from "@/lib/pillar-theme";
import type { PillarTheme } from "@/data/our-work/pillars";
type Props = {
    iconKey: IconRegistryKey;
    title: string;
    description: string;
    theme: PillarTheme;
};
export function PillarFeatureRow({ iconKey, title, description, theme }: Props) {
    const Icon = iconRegistry[iconKey];
    const t = pillarTheme[theme];
    return (<Card tone="elevated" padding="sm" className="flex items-start gap-4 bg-white">
      <span className={cn("flex h-9 w-9 shrink-0 items-center justify-center rounded-md", t.soft, t.text)}>
        <Icon className="h-4 w-4"/>
      </span>
      <div className="min-w-0">
        <p className="text-sm font-semibold text-cnf-ink md:text-base">{title}</p>
        <p className="mt-1 text-xs leading-relaxed text-cnf-muted md:text-sm">
          {description}
        </p>
      </div>
    </Card>);
}
