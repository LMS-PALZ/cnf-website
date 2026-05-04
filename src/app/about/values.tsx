"use client";

import React from "react";

const values = [
    {
        icon: "⭐",
        title: "Integrity",
        description:
            "We do the right thing — always. With our resources, our people, and our beneficiaries.",
        highlight: true,
    },
    {
        icon: "🏆",
        title: "Excellence",
        description:
            "We hold ourselves to the highest standard in everything we deliver, because the people we serve deserve nothing less.",
    },
    {
        icon: "💡",
        title: "Possibility",
        description:
            "We believe no circumstance is permanent. We bring creative, forward-thinking solutions to challenges others have accepted as fixed.",
    },
    {
        icon: "🤝",
        title: "People First",
        description:
            "We are stronger together — our team, our communities, our beneficiaries. No one is left behind, no one works alone.",
    },
    {
        icon: "🌱",
        title: "Growth",
        description:
            "We don’t just serve — we build. Every programme is designed to leave people more capable, more confident, and more independent than we found them.",
    },
];

export default function CoreValues() {
    return (
        <section className="bg-[#f7f9f8] py-20 px-6 md:px-16">
            <div className="max-w-7xl mx-auto">
                <strong className="text-xs sm-text-[17px] tracking-widest text-[#7B8C82] mb-4">
                    WHAT WE STAND FOR
                </strong>

                <h2 className="text-4xl md:text-5xl font-serif mb-6">
                    Our <span className="text-[#196B3A]">Core Values</span>
                </h2>

                <p className="text-[#7B8C82] max-w-xl mb-12 leading-relaxed">
                    Five values that define how we work, who we are, and what every
                    beneficiary, partner, and team member can always expect from CNF.
                </p>

                <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
                    {values.map((value, index) => (
                        <div
                            key={index}
                            className="rounded-2xl p-6 text-center border transition-all border-[#E2EBE6] duration-300 hover:shadow-lg hover:border-1.8 hover:border-[#196B3A]">
                            <div className="text-3xl mb-4">{value.icon}</div>

                            <h3 className="text-lg font-semibold mb-3">
                                {value.title}
                            </h3>

                            <p className="text-sm text-[#7B8C82] leading-relaxed">
                                {value.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}