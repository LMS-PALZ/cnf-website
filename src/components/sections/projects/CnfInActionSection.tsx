import { SectionHeader } from "@/components/ui/SectionHeader";
import { cn } from "@/lib/cn";
import { pageContentWidthClass } from "@/lib/layout";
import { CnfInActionPlayer } from "./CnfInActionPlayer";

export function CnfInActionSection() {
    return (
        <section aria-labelledby="cnf-in-action-title" className="w-full bg-white py-12 md:py-14 lg:py-16">
            <div
                className={cn(
                    pageContentWidthClass,
                    "rounded-2xl bg-cnf-primary-soft px-6 py-10 sm:px-10 md:px-14 md:py-12",
                )}
            >
                <SectionHeader
                    id="cnf-in-action-title"
                    eyebrow="Watch our work"
                    title={
                        <>
                            CFO in <span className="text-cnf-accent">Action</span>
                        </>
                    }
                    tone="light"
                    accent="primary"
                    description="From SSU graduations to community outreaches, see what we do and how we do it."
                />

                <CnfInActionPlayer />
            </div>
        </section>
    );
}
