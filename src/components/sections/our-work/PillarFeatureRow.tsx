import { Card } from "@/components/ui/Card";

type Props = {
    title: string;
    description: string;
};

export function PillarFeatureRow({ title, description }: Props) {
    return (<Card tone="elevated" padding="sm" className="bg-white">
      <div className="min-w-0">
        <p className="text-sm font-semibold text-cnf-ink md:text-base">{title}</p>
        <p className="mt-1 text-xs leading-relaxed text-cnf-muted md:text-sm">
          {description}
        </p>
      </div>
    </Card>);
}
