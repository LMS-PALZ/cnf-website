import { Avatar } from "@/components/ui/Avatar";
import { Card } from "@/components/ui/Card";
import { StarRating } from "@/components/ui/StarRating";
import type { Testimonial } from "@/data/home/testimonials";
type Props = {
    testimonial: Testimonial;
};
export function TestimonialCard({ testimonial }: Props) {
    return (<Card tone="elevated" padding="md" className="flex h-full flex-col gap-4 bg-white" as="figure">
      <StarRating value={testimonial.rating ?? 5}/>
      <blockquote className="flex-1 text-sm italic leading-relaxed text-cnf-ink md:text-base">
        “{testimonial.quote}”
      </blockquote>
      <figcaption className="flex items-center gap-3">
        <Avatar name={testimonial.name} tone={testimonial.pillar} size="md"/>
        <div className="flex flex-col">
          <span className="text-sm font-semibold text-cnf-ink">{testimonial.name}</span>
          <span className="text-xs text-cnf-muted">{testimonial.role}</span>
        </div>
      </figcaption>
    </Card>);
}
