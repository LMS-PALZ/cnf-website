import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { videos } from "@/data/projects/videos";
import { VideoCard } from "./VideoCard";
export function CnfInActionSection() {
    return (<Section tone="dark" padding="lg" ariaLabelledBy="cnf-in-action-title">
      <SectionHeader id="cnf-in-action-title" eyebrow="Watch our work" title={<>
            CNF in <span className="text-cnf-accent">Action</span>
          </>} tone="dark" accent="accent" description="From SSU graduations to community outreaches, see what we do and how we do it."/>

      <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:auto-rows-fr lg:gap-5">
        {videos.map((video) => (<VideoCard key={video.id} video={video}/>))}
      </div>
    </Section>);
}
