import React from 'react'
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";

const values = [
    { title: "Harvard University, 2025" },
    { title: "University of Sunderland" },
    { title: "Covenant University Nigeria" },
    { title: "Former Lead Financial Trader — Kora & Fincra, Toronto" },
    { title: "Founder, Farmstripe (Agri-tech, 5 Nigerian States)" },
]


export default function Founderpage() {
    return (
        <section className="bg-[#FAF8F5] py-20 px-6 md:px-16 text-[#0f2a1f]">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
                <div>
                    <strong className="text-xs sm-text-[20px] tracking-widest text-[#7B8C82] mb-4">
                        MEET THE FOUNDER
                    </strong>

                    <h2 className="text-4xl md:text-5xl font-serif mb-6">
                        Chiggy Nsofor —  <span className="text-[#196B3A]">The Person Behind the Purpose</span>
                    </h2>

                    <p className="text-[#7B8C82] max-w-xl mb-8 leading-relaxed">
                        Chiggy Nsofor is the Founder and CEO of the Chiggy Nsofor Foundation. Before
                        founding CNF, she served as Lead Financial Trader at both <span className="font-semibold text-black">Kora</span> and <span className="font-semibold text-black">Fincra</span>
                        in Toronto, bringing sharp financial acumen and operational discipline back
                        to the work she cares about most.
                    </p>
                    <p className="text-[#7B8C82] max-w-xl mb-8 leading-relaxed">
                        Her path to CNF was not conventional. Prior to fintech, she founded <span className="font-semibold text-black">Farmstripe</span>,
                        an agri-tech platform operating across five Nigerian states. She holds degrees
                        from the <span className="font-semibold text-black">University of Sunderland</span> and <span className="font-semibold text-black">Covenant University Nigeria</span>, and completed
                        a leadership programme at <span className="font-semibold text-black">Harvard University</span> (2025).
                    </p>
                    <p className="text-[#7B8C82] max-w-xl mb-8 leading-relaxed">
                        What Chiggy brings to CNF is not just her academic credentials or professional
                        track record — it is an unwillingness to accept that youth unemployment,
                        educational exclusion, and poverty are simply facts of Nigerian life.
                        Under her leadership, CNF has grown from a personal conviction into a
                        structured, data-driven organisation that has touched over 5,000 lives
                        in under two years.
                    </p>

                    <section className="relative border-l border-green-200 space-y-3">
                        {values.map((item, index) => (
                            <div key={index} className="flex items-start p-0 gap-2">
                                <div className="pt-1">
                                    <p className="w-2 h-2 bg-[#196B3A] rounded-full"></p>
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-[#196B3A]">
                                        {item.title}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </section>
                </div>


                <div>
                    <div className="relative w-full">
                        <ImagePlaceholder
                            aspect="aspect-[4/3] sm:aspect-[5/4]"
                            label="Place a high-quality CNF programme photo here"
                            tone="dark-on-primary"
                        />
                    </div>
                </div>
            </div>
        </section >
    )
}
